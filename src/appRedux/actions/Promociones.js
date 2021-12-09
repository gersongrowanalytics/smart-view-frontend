import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {message} from "antd";
import {
  OBTENER_PROMOCIONES_EXITO,
  OBTENER_PROMOCIONES_FAIL,
  ACTUALIZAR_CATEGORIAS_DE_PROMOCIONES,
  OBTENER_CANALES_DE_PROMOCIONES_EXITO,
  OBTENER_CANALES_DE_PROMOCIONES_FAIL,
  SELECCIONAR_PROMOCION,
  ACTUALIZAR_COLOR_SELECCIONADO_PROMOCION,
  SELECCIONAR_VISTA_PROMOCION,
  REINICIAR_PROMOCIONES,
  DESELECCIONAR_PROMOCION,
  OBTENER_PROMOCIONES_EXCEL,
  OBTENER_PROMOCIONES_EXCEL_ESPECIFICO,
  MOSTRAR_MODAL_INFORMATIVO_PROMOCIONES,
  ACTUALIZAR_CANALES_DE_PROMOCIONES,
  ACTIVAR_MODAL_DESCARGAS_PROMOCIONES,
  ACTIVAR_MODAL_REPORTES_PAGOS_PROMOCIONES,
  OBTENER_REPORTE_PAGOS_EXCEL_ESPECIFICO,
  CARGANDO_REPORTE_PAGOS_PROMOCIONES,
  CAMBIAR_DISENIO_PROMOCIONES,
  CARGANDO_VER_PDF_PROMOCIONES
} from "constants/SistemaTypes";
import config from 'config'
import { TransactionOutlined } from "@ant-design/icons";

export const reiniciarPromocionesReducer = () => (dispatch) => {
  console.log("reiniciar")
  dispatch({
    type: OBTENER_CANALES_DE_PROMOCIONES_FAIL,
    payload: []
  })
  dispatch({
      type    : REINICIAR_PROMOCIONES,
      payload : true
    })
}

export const obtenerPromocionesReducer = () =>async (dispatch, getState) => {
    const {
        diaFiltroSelec,
        mesFiltroSelec,
        anoFiltroSelec
    } = getState().fechas

    const {
        idSucursalUsuarioSelec,
    } = getState().sucursales

    await fetch(config.api+'promociones/mostrar/categorias',
      {
        mode:'cors',
        method: 'POST',
        body: JSON.stringify({
            usutoken : localStorage.getItem('usutoken'),
            sucid    : idSucursalUsuarioSelec,
            dia      : diaFiltroSelec,
            mes      : mesFiltroSelec,
            ano      : anoFiltroSelec,
        }),
        headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json',
          'api_token': localStorage.getItem('usutoken'),
          'api-token': localStorage.getItem('usutoken'),
        }
      }
    )
    .then( async res => {
      await dispatch(estadoRequestReducer(res.status))
      return res.json()
    })
    .then(data => {
      const estadoRequest = getState().estadoRequest.init_request
      if(estadoRequest === true){
        if(data.respuesta === true){
            // data.datos.map(item => {
            //     data.datos.push(item)
            // })
            // data.datos.map(item => {
            //     data.datos.push(item)
            // })
            // data.datos.map(item => {
            //     data.datos.push(item)
            // })
            dispatch({
              type    : REINICIAR_PROMOCIONES,
              payload : false
            })
            dispatch({
                type: OBTENER_PROMOCIONES_EXITO,
                payload: {
                  "datos" : data.datos,
                  "fecha" : data.fechaActualiza
                }
            })
        }else{
            dispatch({
                type: OBTENER_PROMOCIONES_FAIL,
                payload: data.datos
            })
        }
      }
    }).catch((error)=> {
        dispatch({
            type: OBTENER_PROMOCIONES_FAIL,
            payload: []
        })
    });
}

export const seleccionarCategoriaReducer = (scaid, limpiarCanales, posicion) => async (dispatch, getState) => {

    if(limpiarCanales == true){
      dispatch({
        type: OBTENER_CANALES_DE_PROMOCIONES_FAIL,
        payload: []
      })
    }

    let {categoriasPromociones, deseleccionarPromocion} = getState().promociones

    let colorSeleccionado = '';
    categoriasPromociones.map((categoria, nuevaposicion) => {
        if(categoria.scaid === scaid){
            categoriasPromociones[nuevaposicion]['seleccionado'] = true
            colorSeleccionado = categoria.catcolor
        }else{
            categoriasPromociones[nuevaposicion]['seleccionado'] = false
        }
    })

    dispatch({
        type: ACTUALIZAR_CATEGORIAS_DE_PROMOCIONES,
        payload: categoriasPromociones
    })

    dispatch({
        type: ACTUALIZAR_COLOR_SELECCIONADO_PROMOCION,
        payload: colorSeleccionado
    })

    let canalesObtenidos = []

    await fetch(config.api+'promociones/mostrar/promociones',
      {
        mode:'cors',
        method: 'POST',
        body: JSON.stringify({
            usutoken  : localStorage.getItem('usutoken'),
            scaid     : scaid,
        }),
        headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json',
          'api_token': localStorage.getItem('usutoken'),
          'api-token': localStorage.getItem('usutoken')
        }
      }
    )
    .then( async res => {
      await dispatch(estadoRequestReducer(res.status))
      return res.json()
    })
    .then(data => {
      const estadoRequest = getState().estadoRequest.init_request
      const reiniciandoPromociones = getState().promociones.reiniciandoPromociones

      if(estadoRequest === true){
        if(reiniciandoPromociones == false){
          if(data.respuesta === true){
              canalesObtenidos = data.datos
              dispatch({
                  type: OBTENER_CANALES_DE_PROMOCIONES_EXITO,
                  payload: {
                    canalesPromociones : data.datos,
                    scaid              : scaid
                  }
              })
              
          }else{
              dispatch({
                  type: editarPromocionReducer,
                  payload: data.datos
              })
          }
        }else{

          dispatch({
            type    : REINICIAR_PROMOCIONES,
            payload : false
          })

        }
      }
    }).catch((error)=> {
        dispatch({
            type: OBTENER_CANALES_DE_PROMOCIONES_FAIL,
            payload: []
        })
    });

    categoriasPromociones[posicion]['canales'] = canalesObtenidos

    dispatch({
      type: ACTUALIZAR_CATEGORIAS_DE_PROMOCIONES,
      payload: categoriasPromociones
    })

}

export const editarPromocionReducer = (posicionCanal, posicionPromocion) => async (dispatch, getState) => {

    let {canalesPromociones} = getState().promociones
    canalesPromociones[posicionCanal]['promociones'][posicionPromocion]['guardando'] = !canalesPromociones[posicionCanal]['promociones'][posicionPromocion]['guardando']
    dispatch({
        type: ACTUALIZAR_CANALES_DE_PROMOCIONES,
        payload: canalesPromociones
    })
}

export const aceptarEdicionPromocionReducer = (posicionCanal, posicionPromocion, scaid, cspid, valorizado, planchas) => async (dispatch, getState) => {

    let {canalesPromociones, scaidSeleccionado} = getState().promociones
    canalesPromociones[posicionCanal]['promociones'][posicionPromocion]['guardando'] = false
    // dispatch({
    //     type: ACTUALIZAR_CANALES_DE_PROMOCIONES,
    //     payload: canalesPromociones
    // })


    await fetch(config.api+'promociones/editar',
      {
        mode:'cors',
        method: 'POST',
        body: JSON.stringify({
          usutoken    : localStorage.getItem('usutoken'),
          cspid       : cspid,
          valorizado  : valorizado,
          planchas    : planchas
        }),
        headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json',
          'api_token': localStorage.getItem('usutoken'),
          'api-token': localStorage.getItem('usutoken'),
        }
      }
    )
    .then( async res => {
      	await dispatch(estadoRequestReducer(res.status))
      	return res.json()
    })
    .then(data => {
      	const estadoRequest = getState().estadoRequest.init_request
      	if(estadoRequest === true){
        	if(data.respuesta === true){
            	dispatch(seleccionarCategoriaReducer(scaidSeleccionado, false))
            	message.success(data.mensaje) 
        	}else{
            	message.error(data.mensaje) 
        	}
      	}
    }).catch((error)=> {
		console.log(error)
		message.error("Lo sentimos, ocurrio un error del servidor (Frntd)") 
    });
}

export const seleccionarPromocionReducer = (accion) => {
    return {
        type: SELECCIONAR_PROMOCION,
        payload: accion
    }
}

export const seleccionarVistaPromocionReducer = (accion) => {
    return {
        type: SELECCIONAR_VISTA_PROMOCION,
        payload: accion
    }
}

export const deseleccionarPromocionReducer = (accion) => {
    return {
        type: DESELECCIONAR_PROMOCION,
        payload: accion
    }
}

export const descargarInformacionPromocionesReducer = () => async (dispatch, getState) => {

    // alert('descargarinfo')
    const {
        diaFiltroSelec,
        mesFiltroSelec,
        anoFiltroSelec
    } = getState().fechas

    const {
        idSucursalUsuarioSelec,
    } = getState().sucursales

    let objetoArray = [];

    await fetch(config.api+'promociones/descargar',
      {
        mode:'cors',
        method: 'POST',
        body: JSON.stringify({
            usutoken : localStorage.getItem('usutoken'),
            sucid    : idSucursalUsuarioSelec,
            dia      : diaFiltroSelec,
            mes      : mesFiltroSelec,
            ano      : anoFiltroSelec,
        }),
        headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json',
          'api_token': localStorage.getItem('usutoken'),
          'api-token': localStorage.getItem('usutoken'),
        }
      }
    )
    .then( async res => {
      await dispatch(estadoRequestReducer(res.status))
      return res.json()
    })
    .then(data => {
      const estadoRequest = getState().estadoRequest.init_request
      if(estadoRequest === true){
        if(data.respuesta === true){
            objetoArray = data.datos
            dispatch({
              type: OBTENER_PROMOCIONES_EXCEL,
              payload: objetoArray
            })
        }else{
            
        }
      }
    }).catch((error)=> {
        
    });   

    

    console.log(objetoArray)

    // for(let contador = 0; contador < objetoArray.length; contador++ ){
        // const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        // const fileExtension = '.xlsx';

        // const ws = XLSX.utils.json_to_sheet(objetoArray);
        // const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        // const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        // const data = new Blob([excelBuffer], {type: fileType});
        // FileSaver.saveAs(data, 'PROMOCIONES-1'+ fileExtension);
    // }

}

export const abrirCerrarModalInformativoPromociones = (accion) => {
  return {
      type: MOSTRAR_MODAL_INFORMATIVO_PROMOCIONES,
      payload: accion
  }
}

export const guardarImagenPromocionReducer = (
	prpid, 
	prbid, 
	producto, 
	bonificado, 
	posicionCanal, 
	posicionPromocion
) => async (dispatch, getState) => {


	let {canalesPromociones, scaidSeleccionado} = getState().promociones

    canalesPromociones[posicionCanal]['promociones'][posicionPromocion]['cargando'] = true

	dispatch({
        type: ACTUALIZAR_CANALES_DE_PROMOCIONES,
        payload: canalesPromociones
	})
	
  	await fetch(config.api+'promociones/editar/imagenes',
		{
			mode:'cors',
			method: 'POST',
			body: JSON.stringify({
				prpid			 : prpid,
				prbid			 : prbid,
				imagenProducto 	 : producto,
				imagenBonificado : bonificado
			}),
			headers: {
				'Accept' 	   : 'application/json',
				'Content-type' : 'application/json',
				'api_token'	   : localStorage.getItem('usutoken'),
				'api-token'	   : localStorage.getItem('usutoken'),
			}
		}
	)
    .then( async res => {
		await dispatch(estadoRequestReducer(res.status))
		return res.json()
    })
    .then(data => {
		canalesPromociones[posicionCanal]['promociones'][posicionPromocion]['cargando'] = false
		dispatch({
			type: ACTUALIZAR_CANALES_DE_PROMOCIONES,
			payload: canalesPromociones
		})
      	const estadoRequest = getState().estadoRequest.init_request
      	if(estadoRequest === true){
        	if(data.respuesta === true){
				
				message.success(data.mensaje)
				dispatch(seleccionarCategoriaReducer(scaidSeleccionado, false))
        	}else{
				message.error(data.mensaje)
        	}
      	}
    }).catch((error)=> {
		canalesPromociones[posicionCanal]['promociones'][posicionPromocion]['cargando'] = false
		dispatch({
			type: ACTUALIZAR_CANALES_DE_PROMOCIONES,
			payload: canalesPromociones
		})
		console.log(error)
		message.error("Lo sentimos, ocurrio un error del servidor (Frntd)") 
  	});

}

export const GuardarImagenPromocionListaReducer = (
	prpid, 
	prbid, 
	producto, 
	bonificado
) => async (dispatch, getState) => {
	
    let nuevImgBoni = "";
    let nuevaImgPro = "";

  	await fetch(config.api+'promociones/editar/imagenes',
		{
			mode:'cors',
			method: 'POST',
			body: JSON.stringify({
				prpid			 : prpid,
				prbid			 : prbid,
				imagenProducto 	 : producto,
				imagenBonificado : bonificado
			}),
			headers: {
				'Accept' 	   : 'application/json',
				'Content-type' : 'application/json',
				'api_token'	   : localStorage.getItem('usutoken'),
				'api-token'	   : localStorage.getItem('usutoken'),
			}
		}
	)
  .then( async res => {
    await dispatch(estadoRequestReducer(res.status))
    return res.json()
  })
  .then(data => {
      
      const estadoRequest = getState().estadoRequest.init_request
      if(estadoRequest === true){
        if(data.respuesta === true){
          message.success(data.mensaje)
          nuevImgBoni = data.nuevImgBoni;
          nuevaImgPro = data.nuevaImgPro;
        }else{
          message.error(data.mensaje)
        }
      }
  }).catch((error)=> {
    console.log(error)
    message.error("Lo sentimos, ocurrio un error del servidor (Frntd)") 
  });

  return {
    "nuevImgBoni" : nuevImgBoni,
    "nuevaImgPro" : nuevaImgPro,
  }

}

export const ActivarModalDescargas = (estado) => (dispatch) => {

  dispatch({
    type : ACTIVAR_MODAL_DESCARGAS_PROMOCIONES,
    payload: estado
  })

}

export const ObtenerPromocionesDescargaEspecifica = () => async (dispatch, getState) => {

  // alert('descargarinfo')
  const {
      diaFiltroSelec,
      mesFiltroSelec,
      anoFiltroSelec
  } = getState().fechas

  const {
    sucursalesUsuario,
  } = getState().sucursales

  let objetoArray = [];

  dispatch({
    type: "CARGANDO_EXCEL_PROMOCIONES",
    payload: true
  })

  await fetch(config.api+'promociones/descargar/especificos',
    {
      mode:'cors',
      method: 'POST',
      body: JSON.stringify({
          usutoken : localStorage.getItem('usutoken'),
          sucs     : sucursalesUsuario,
          dia      : diaFiltroSelec,
          mes      : mesFiltroSelec,
          ano      : anoFiltroSelec,
      }),
      headers: {
        'Accept' : 'application/json',
        'Content-type' : 'application/json',
        'api_token': localStorage.getItem('usutoken'),
        'api-token': localStorage.getItem('usutoken'),
      }
    }
  )
  .then( async res => {
    await dispatch(estadoRequestReducer(res.status))
    return res.json()
  })
  .then(data => {
    const estadoRequest = getState().estadoRequest.init_request
    if(estadoRequest === true){
      if(data.respuesta === true){
          objetoArray = data.datos
          dispatch({
            type: OBTENER_PROMOCIONES_EXCEL_ESPECIFICO,
            payload: objetoArray
          })
      }else{
          
      }
    }
  }).catch((error)=> {
    console.log(error)    
  });

  dispatch({
    type: "CARGANDO_EXCEL_PROMOCIONES",
    payload: false
  })

  

  // console.log(objetoArray)
}

export const obtenerPromocionesXZonaReducer = (zonid, gsuid, casid) => async (dispatch, getState) => {
    const {
        diaFiltroSelec,
        mesFiltroSelec,
        anoFiltroSelec
    } = getState().fechas

  	await fetch(config.api+'promociones/mostrar/categorias/xzona',
		{
			mode:'cors',
			method: 'POST',
			body: JSON.stringify({
				usutoken : localStorage.getItem('usutoken'),
				zonid    : zonid,
				gsuid    : gsuid,
				casid    : casid,
				dia      : diaFiltroSelec,
				mes      : mesFiltroSelec,
				ano      : anoFiltroSelec,
			}),
			headers: {
				'Accept' : 'application/json',
				'Content-type' : 'application/json',
				'api_token': localStorage.getItem('usutoken'),
				'api-token': localStorage.getItem('usutoken'),
			}
		}
    )
    .then( async res => {
		await dispatch(estadoRequestReducer(res.status))
		return res.json()
    })
    .then(data => {
      	const estadoRequest = getState().estadoRequest.init_request
      	if(estadoRequest === true){
        	if(data.respuesta === true){
				dispatch({
					type    : REINICIAR_PROMOCIONES,
					payload : false
				})
            dispatch({
                type: OBTENER_PROMOCIONES_EXITO,
				payload: {
					"datos" : data.datos,
					"fecha" : data.fechaActualiza
                }
            })
        }else{
            dispatch({
                type: OBTENER_PROMOCIONES_FAIL,
                payload: data.datos
            })
        }
      }
    }).catch((error)=> {
		console.log(error)
        dispatch({
            type: OBTENER_PROMOCIONES_FAIL,
            payload: []
        })
	});
	
  return true

}

export const seleccionarCategoriaXZonaReducer = (scaid, limpiarCanales, catid) => async (dispatch, getState) => {

    if(limpiarCanales == true){
        dispatch({
            type: OBTENER_CANALES_DE_PROMOCIONES_FAIL,
            payload: []
        })
    }

    let {categoriasPromociones, deseleccionarPromocion} = getState().promociones

    let colorSeleccionado = '';

    categoriasPromociones.map((categoria, nuevaposicion) => {
        if(categoria.scaid === scaid){
            categoriasPromociones[nuevaposicion]['seleccionado'] = true
            colorSeleccionado = categoria.catcolor
        }else{
            categoriasPromociones[nuevaposicion]['seleccionado'] = false
        }
    })

    dispatch({
        type: ACTUALIZAR_CATEGORIAS_DE_PROMOCIONES,
        payload: categoriasPromociones
    })

    dispatch({
        type: ACTUALIZAR_COLOR_SELECCIONADO_PROMOCION,
        payload: colorSeleccionado
    })


    // 
    const {
        diaFiltroSelec,
        mesFiltroSelec,
        anoFiltroSelec
    } = getState().fechas

    const {
        zonaidseleccionado,
        gsuidSeleccionado,
        casidSeleccionado
    } = getState().zonas
    // 

    await fetch(config.api+'promociones/mostrar/promociones/xzona',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({
                usutoken  : localStorage.getItem('usutoken'),
                catid   : catid,
                zonid   : zonaidseleccionado,
                gsuid   : gsuidSeleccionado,
                casid   : casidSeleccionado,
                mes     : mesFiltroSelec,
                ano     : anoFiltroSelec,
                dia     : diaFiltroSelec,
            }),
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json',
                'api_token': localStorage.getItem('usutoken'),
                'api-token': localStorage.getItem('usutoken')
            }
        }
    )
    .then( async res => {
        await dispatch(estadoRequestReducer(res.status))
        return res.json()
    })
    .then(data => {
        const estadoRequest = getState().estadoRequest.init_request
        const reiniciandoPromociones = getState().promociones.reiniciandoPromociones

        if(estadoRequest === true){
            if(reiniciandoPromociones == false){
                if(data.respuesta === true){
                    
                    dispatch({
                        type: OBTENER_CANALES_DE_PROMOCIONES_EXITO,
                        payload: {
                            canalesPromociones : data.datos,
                            scaid              : scaid
                        }
                    })
                    
                }else{
                    dispatch({
                        type: editarPromocionReducer,
                        payload: data.datos
                    })
                }
            }else{

                dispatch({
                    type    : REINICIAR_PROMOCIONES,
                    payload : false
                })

            }
        }
    }).catch((error)=> {
        console.log(error)
        dispatch({
            type: OBTENER_CANALES_DE_PROMOCIONES_FAIL,
            payload: []
        })
    });
}

export const ActivarModalReportePagosReducer = (estado) => async (dispatch) => {
  dispatch({
    type : ACTIVAR_MODAL_REPORTES_PAGOS_PROMOCIONES,
    payload: estado
  })
}

export const ObtenerReportesPagosDescargaEspecifica = (fechaInicio, fechaFinal, zonid) => async (dispatch, getState) => {
  dispatch(ObtenerReportesPagosDescargaEspecificaReducer(fechaInicio, fechaFinal, zonid))
//   // alert('descargarinfo')
//   let fueerror = false

//   const {
//       diaFiltroSelec,
//       mesFiltroSelec,
//       anoFiltroSelec
//   } = getState().fechas

//   const {
//     sucursalesUsuario,
//   } = getState().sucursales

//   let objetoArray = [];
//   let objetoArrayrecono = [];
//   let objetoArraypromociones = [];

//   let url = config.api+'promociones/descargar/reporte-pagos'

//   if(fechaInicio != null && fechaFinal != null){
//     url = config.api+'promociones/descargar/reporte-pagos-fecha'
//   }

//   dispatch({
//     type : CARGANDO_REPORTE_PAGOS_PROMOCIONES,
//     payload: true
//   })

//   await fetch(url,
//     {
//       mode:'cors',
//       method: 'POST',
//       body: JSON.stringify({
//           usutoken : localStorage.getItem('usutoken'),
//           sucs     : sucursalesUsuario,
//           dia      : diaFiltroSelec,
//           mes      : mesFiltroSelec,
//           ano      : anoFiltroSelec,
//           fechaInicio : fechaInicio,
//           fechaFinal  : fechaFinal
//       }),
//       headers: {
//         'Accept' : 'application/json',
//         'Content-type' : 'application/json',
//         'api_token': localStorage.getItem('usutoken'),
//         'api-token': localStorage.getItem('usutoken'),
//       }
//     }
//   )
//   .then( async res => {
//     await dispatch(estadoRequestReducer(res.status))
//     return res.json()
//   })
//   .then(async data => {
//     const estadoRequest = getState().estadoRequest.init_request

//     console.log("estatus: ")
//     console.log(estadoRequest)
//     console.log(data.status)

//     if(estadoRequest === true){
//       if(data.respuesta === true){


//           if(zonid != null){
//             const zonaidseleccionado = getState().ventasTpr.zonaidseleccionado
//             if(zonaidseleccionado == zonid){
//               // objetoArray = data.datos
//               // objetoArrayrecono = data.datosReconocimiento

//               objetoArraypromociones = await LimpiarArrayPromocionesLiquidadasReducer(data.datosPromociones)
//               objetoArrayrecono = await LimpiarArrayPromocionesLiquidadasReducer(data.datosReconocimiento)

//               dispatch({
//                 type: OBTENER_REPORTE_PAGOS_EXCEL_ESPECIFICO,
//                 payload: {
//                   reporte : objetoArrayrecono,
//                   reconocimiento : objetoArrayrecono,
//                   promociones : objetoArraypromociones,
//                   actualizacion : data.actualizacion
//                 }
//               })

//             }else{

//             }

//           }else{
//             // objetoArray = data.datos
//             // objetoArrayrecono = data.datosReconocimiento

//             objetoArraypromociones = await LimpiarArrayPromocionesLiquidadasReducer(data.datosPromociones)
//             objetoArrayrecono = await LimpiarArrayPromocionesLiquidadasReducer(data.datosReconocimiento)

//             dispatch({
//               type: OBTENER_REPORTE_PAGOS_EXCEL_ESPECIFICO,
//               payload: {
//                 reporte : objetoArrayrecono,
//                 reconocimiento : objetoArrayrecono,
//                 promociones : objetoArraypromociones,
//                 actualizacion : data.actualizacion
//               }
//             })
//           }
          
//       }else{
          
//       }
//     }else{
//       fueerror = true
//       dispatch(ObtenerReportesPagosDescargaEspecifica(fechaInicio, fechaFinal, zonid))
//     }

//   }).catch((error)=> {
//     console.log(error)    
//     fueerror = true
//   });   

//   if(fueerror == true){
    
//   }else{
//     if(zonid != null){
//       const zonaidseleccionado = getState().ventasTpr.zonaidseleccionado
//       if(zonaidseleccionado == zonid){
//         dispatch({
//           type : CARGANDO_REPORTE_PAGOS_PROMOCIONES,
//           payload: false
//         })
//       }
      
//     }else{
//       dispatch({
//         type : CARGANDO_REPORTE_PAGOS_PROMOCIONES,
//         payload: false
//       })
//     }
//   }

  
//   // console.log(objetoArray)
}






export const ObtenerReportesPagosDescargaEspecificaReducer = (fechaInicio, fechaFinal, zonid) => async (dispatch, getState) => {

  // alert('descargarinfo')
  let fueerror = false

  const {
      diaFiltroSelec,
      mesFiltroSelec,
      anoFiltroSelec
  } = getState().fechas

  const {
    sucursalesUsuario,
  } = getState().sucursales

  let objetoArray = [];
  let objetoArrayrecono = [];
  let objetoArraypromociones = [];

  let url = config.api+'promociones/descargar/reporte-pagos'

  if(fechaInicio != null && fechaFinal != null){
    url = config.api+'promociones/descargar/reporte-pagos-unicamente-fecha'
  }

  dispatch({
    type : CARGANDO_REPORTE_PAGOS_PROMOCIONES,
    payload: true
  })

  await fetch(url,
    {
      mode:'cors',
      method: 'POST',
      body: JSON.stringify({
          usutoken : localStorage.getItem('usutoken'),
          sucs     : sucursalesUsuario,
          dia      : diaFiltroSelec,
          mes      : mesFiltroSelec,
          ano      : anoFiltroSelec,
          fechaInicio : fechaInicio,
          fechaFinal  : fechaFinal
      }),
      headers: {
        'Accept' : 'application/json',
        'Content-type' : 'application/json',
        'api_token': localStorage.getItem('usutoken'),
        'api-token': localStorage.getItem('usutoken'),
      }
    }
  )
  .then( async res => {
    await dispatch(estadoRequestReducer(res.status))
    return res.json()
  })
  .then(async data => {
    const estadoRequest = getState().estadoRequest.init_request

    console.log("estatus: ")
    console.log(estadoRequest)
    console.log(data.status)

    if(estadoRequest === true){
      if(data.respuesta === true){


          if(zonid != null){
            const zonaidseleccionado = getState().ventasTpr.zonaidseleccionado
            if(zonaidseleccionado == zonid){
              
              objetoArrayrecono = await LimpiarArrayPromocionesLiquidadasReducer(data.datosReconocimiento)

              dispatch({
                type: "OBTENER_REPORTE_PAGOS_PROMOCIONES",
                payload: {
                  reporte : objetoArrayrecono,
                  reconocimiento : objetoArrayrecono
                }
              })

            }else{

            }

          }else{

            objetoArrayrecono = await LimpiarArrayPromocionesLiquidadasReducer(data.datosReconocimiento)

            dispatch({
              type: "OBTENER_REPORTE_PAGOS_PROMOCIONES",
              payload: {
                reporte : objetoArrayrecono,
                reconocimiento : objetoArrayrecono
              }
            })
          }

          dispatch(ObtenerPromocionesLiquidadasReducer(fechaInicio, fechaFinal, zonid))

          
      }else{
          
      }
    }else{
      fueerror = true
      dispatch(ObtenerReportesPagosDescargaEspecificaReducer(fechaInicio, fechaFinal, zonid))
    }

  }).catch((error)=> {
    console.log(error)    
    fueerror = true
  });   

  
  console.log(objetoArray)
}



export const ObtenerPromocionesLiquidadasReducer = (fechaInicio, fechaFinal, zonid) => async (dispatch, getState) => {

  // alert('descargarinfo')
  let fueerror = false

  const {
      diaFiltroSelec,
      mesFiltroSelec,
      anoFiltroSelec
  } = getState().fechas

  const {
    sucursalesUsuario,
  } = getState().sucursales

  let objetoArray = [];
  let objetoArrayrecono = [];
  let objetoArraypromociones = [];

  let url = config.api+'promociones/descargar/reporte-promociones-liquidadas-fecha'

  // dispatch({
  //   type : CARGANDO_REPORTE_PAGOS_PROMOCIONES,
  //   payload: true
  // })

  await fetch(url,
    {
      mode:'cors',
      method: 'POST',
      body: JSON.stringify({
          usutoken : localStorage.getItem('usutoken'),
          sucs     : sucursalesUsuario,
          dia      : diaFiltroSelec,
          mes      : mesFiltroSelec,
          ano      : anoFiltroSelec,
          fechaInicio : fechaInicio,
          fechaFinal  : fechaFinal
      }),
      headers: {
        'Accept' : 'application/json',
        'Content-type' : 'application/json',
        'api_token': localStorage.getItem('usutoken'),
        'api-token': localStorage.getItem('usutoken'),
      }
    }
  )
  .then( async res => {
    await dispatch(estadoRequestReducer(res.status))
    return res.json()
  })
  .then(async data => {
    const estadoRequest = getState().estadoRequest.init_request

    console.log("estatus: ")
    console.log(estadoRequest)
    console.log(data.status)

    if(estadoRequest === true){
      if(data.respuesta === true){


          if(zonid != null){
            const zonaidseleccionado = getState().ventasTpr.zonaidseleccionado
            if(zonaidseleccionado == zonid){

              objetoArraypromociones = await LimpiarArrayPromocionesLiquidadasReducer(data.datosPromociones)

              dispatch({
                type: "OBTENER_PROMOCIONES_LIQUIDADAS_PROMOCIONES",
                payload: {
                  promociones : objetoArraypromociones,
                  actualizacion : data.actualizacion
                }
              })

            }else{

            }

          }else{

            objetoArraypromociones = await LimpiarArrayPromocionesLiquidadasReducer(data.datosPromociones)

            dispatch({
              type: "OBTENER_PROMOCIONES_LIQUIDADAS_PROMOCIONES",
              payload: {
                promociones : objetoArraypromociones,
                actualizacion : data.actualizacion
              }
            })
          }
          
      }else{
          
      }
    }else{
      fueerror = true
      dispatch(ObtenerPromocionesLiquidadasReducer(fechaInicio, fechaFinal, zonid))
    }

  }).catch((error)=> {
    console.log(error)    
    fueerror = true
  });   

  if(fueerror == true){
    
  }else{
    if(zonid != null){
      const zonaidseleccionado = getState().ventasTpr.zonaidseleccionado
      if(zonaidseleccionado == zonid){
        dispatch({
          type : CARGANDO_REPORTE_PAGOS_PROMOCIONES,
          payload: false
        })
      }
      
    }else{
      dispatch({
        type : CARGANDO_REPORTE_PAGOS_PROMOCIONES,
        payload: false
      })
    }
  }

  
  // console.log(objetoArray)
}



export const LimpiarArrayPromocionesLiquidadasReducer = async (promocionesliquidadas) => {

  await promocionesliquidadas[0]['data'].map((dato, posicion) => {
    promocionesliquidadas[0]['data'][posicion].map((dat) => {
      dat.value = dat.value == null ?"" :dat.value
    })
  })

  return promocionesliquidadas
}

export const CambiarDisenioPromocionesReducer = () => (dispatch, getState) => {

  const {
    mostrarDisenioPromocionesPrincipal
  } = getState().promociones

  dispatch({
    type: CAMBIAR_DISENIO_PROMOCIONES,
    payload: !mostrarDisenioPromocionesPrincipal
  })
}


export const ObtenerCanlesPDFPromocionesReducer = (posicion, envioCategorias = false, categoriasEnviadas = []) => async (dispatch, getState) => {

  let respuesta = false

  let {categoriasPromociones} = getState().promociones
  
  let categoriasRecibidasEnviadas = []

  if(envioCategorias == true){
    categoriasRecibidasEnviadas = categoriasEnviadas
  }else{
    categoriasRecibidasEnviadas = categoriasPromociones
  }

  let canalesObtenidos = []

  dispatch({
    type: CARGANDO_VER_PDF_PROMOCIONES,
    payload: true
  })

  if(categoriasRecibidasEnviadas.length > 0){
    
    let scaid = categoriasRecibidasEnviadas[posicion]['scaid']

    await fetch(config.api+'promociones/mostrar/promociones',
      {
        mode:'cors',
        method: 'POST',
        body: JSON.stringify({
            usutoken  : localStorage.getItem('usutoken'),
            scaid     : scaid,
        }),
        headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json',
          'api_token': localStorage.getItem('usutoken'),
          'api-token': localStorage.getItem('usutoken')
        }
      }
    )
    .then( async res => {
      await dispatch(estadoRequestReducer(res.status))
      return res.json()
    })
    .then(data => {
      const estadoRequest = getState().estadoRequest.init_request

      if(estadoRequest === true){
        if(data.respuesta === true){
              

          }else{
              
          }

          canalesObtenidos = data.datos
          respuesta = true

          categoriasRecibidasEnviadas[posicion]['canales'] = canalesObtenidos

          if(envioCategorias == true){

          }else{
            dispatch({
              type: ACTUALIZAR_CATEGORIAS_DE_PROMOCIONES,
              payload: categoriasRecibidasEnviadas
            })
          }

          if(posicion < categoriasRecibidasEnviadas.length-1){
            dispatch(ObtenerCanlesPDFPromocionesReducer(posicion+1, true, categoriasRecibidasEnviadas))
          }else{
            dispatch(ObtenerPdfPromocionesReducer(true, categoriasRecibidasEnviadas))
          }

      }
    }).catch((error)=> {
        
    });
  }

  return respuesta

}

export const ObtenerPdfPromocionesReducer = (envioCategorias = false, categoriasEnviadas = []) => async (dispatch, getState) => {

  dispatch({
    type: CARGANDO_VER_PDF_PROMOCIONES,
    payload: TransactionOutlined
  })

  let {categoriasPromociones} = getState().promociones

  let categoriasRecibidasEnviadas = []

  if(envioCategorias == true){
    categoriasRecibidasEnviadas = categoriasEnviadas
  }else{
    categoriasRecibidasEnviadas = categoriasPromociones
  }

  await fetch(config.api+'promociones/mostrar/pdf-generar',
      {
        mode:'cors',
        method: 'POST',
        body: JSON.stringify({
          // categorias : categoriasPromociones
          categorias : categoriasRecibidasEnviadas
        }),
        headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json',
          'api_token': localStorage.getItem('usutoken'),
          'api-token': localStorage.getItem('usutoken')
        }
      }
    )
    .then( async res => {
      await dispatch(estadoRequestReducer(res.status))
      return res.json()
    })
    .then(data => {
      const estadoRequest = getState().estadoRequest.init_request

      if(estadoRequest === true){
        if(data.respuesta === true){
              

          }else{
              
          }

      }
    }).catch((error)=> {
        
    });

  dispatch({
    type: CARGANDO_VER_PDF_PROMOCIONES,
    payload: false
  })

}

export const obtenerPromocionesXGrupoReducer = (gsuid) => async (dispatch, getState) => {

  const {
      diaFiltroSelec,
      mesFiltroSelec,
      anoFiltroSelec
  } = getState().fechas

  let datos = []

  await fetch(config.api+'promociones/mostrar/categorias/xzona',
  {
    mode:'cors',
    method: 'POST',
    body: JSON.stringify({
      usutoken : localStorage.getItem('usutoken'),
      zonid    : 0,
      gsuid    : gsuid,
      casid    : 0,
      dia      : diaFiltroSelec,
      mes      : mesFiltroSelec,
      ano      : anoFiltroSelec,
    }),
    headers: {
      'Accept' : 'application/json',
      'Content-type' : 'application/json',
      'api_token': localStorage.getItem('usutoken'),
      'api-token': localStorage.getItem('usutoken'),
    }
  })
  .then( async res => {
      await dispatch(estadoRequestReducer(res.status))
      return res.json()
  })
  .then(data => {
      const estadoRequest = getState().estadoRequest.init_request
      if(estadoRequest === true){
        if(data.respuesta === true){
          
          dispatch(ObtenerCanalesXGrupoPromocionesReducer(0, data.datos, gsuid))
          datos = data.datos
          
        }else{
            
        }
    }
  }).catch((error)=> {
      console.log(error)
      
});

return datos

}

export const ObtenerCanalesXGrupoPromocionesReducer = (posicion, categoriasEnviadas, gsuidSeleccionado) => async(dispatch, getState) => {

  let categoriasPromociones = categoriasEnviadas

  let catid = categoriasPromociones[posicion]['catid']

  // 
  const {
      diaFiltroSelec,
      mesFiltroSelec,
      anoFiltroSelec
  } = getState().fechas
  // 

  let canalesObtenidos = []
  let respuesta = true
  
  await fetch(config.api+'promociones/mostrar/promociones/xzona',
      {
          mode:'cors',
          method: 'POST',
          body: JSON.stringify({
              usutoken  : localStorage.getItem('usutoken'),
              catid   : catid,
              zonid   : 0,
              gsuid   : gsuidSeleccionado,
              casid   : 0,
              mes     : mesFiltroSelec,
              ano     : anoFiltroSelec,
              dia     : diaFiltroSelec,
          }),
          headers: {
              'Accept' : 'application/json',
              'Content-type' : 'application/json',
              'api_token': localStorage.getItem('usutoken'),
              'api-token': localStorage.getItem('usutoken')
          }
      }
  )
  .then( async res => {
      await dispatch(estadoRequestReducer(res.status))
      return res.json()
  })
  .then(data => {
      const estadoRequest = getState().estadoRequest.init_request
      

      if(estadoRequest === true){
          if(data.respuesta === true){

              canalesObtenidos = data.datos
              respuesta = true

              categoriasPromociones[posicion]['canales'] = canalesObtenidos

              if(posicion < categoriasPromociones.length-1){
                dispatch(ObtenerCanalesXGrupoPromocionesReducer(posicion+1, categoriasPromociones, gsuidSeleccionado))
              }else{
                dispatch(ObtenerPdfPromocionesReducer(true, categoriasPromociones))
              }
              
          }else{
              
          }
      }
  }).catch((error)=> {
      console.log(error)
      
  });

}