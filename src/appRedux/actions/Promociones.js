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
  } from "constants/SistemaTypes";
  import config from 'config'

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

export const seleccionarCategoriaReducer = (scaid, limpiarCanales) => async (dispatch, getState) => {

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
          
        }else{
          message.error(data.mensaje)
        }
      }
  }).catch((error)=> {
    console.log(error)
    message.error("Lo sentimos, ocurrio un error del servidor (Frntd)") 
  });

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

  

  // console.log(objetoArray)
}