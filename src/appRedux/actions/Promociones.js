import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
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
    DESCARGAR_INFORMACION_PROMOCIONES
} from "constants/SistemaTypes";
import config from 'config'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export const reiniciarPromocionesReducer = () => {
    return {
        type: REINICIAR_PROMOCIONES
    }
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
          'api_token': localStorage.getItem('usutoken')
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
                type: OBTENER_PROMOCIONES_EXITO,
                payload: data.datos
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

export const seleccionarCategoriaReducer = (scaid, posicion) => async (dispatch, getState) => {
    dispatch({
        type: OBTENER_CANALES_DE_PROMOCIONES_FAIL,
        payload: []
    })
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
          'api_token': localStorage.getItem('usutoken')
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
                type: OBTENER_CANALES_DE_PROMOCIONES_EXITO,
                payload: data.datos
            })
            
        }else{
            dispatch({
                type: editarPromocionReducer,
                payload: data.datos
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
        type: OBTENER_CANALES_DE_PROMOCIONES_EXITO,
        payload: canalesPromociones
    })    
}

export const aceptarEdicionPromocionReducer = () => async (dispatch, getState) => {
    // let {canalesPromociones} = getState().promociones
    // canalesPromociones[posicionCanal]['promociones'][posicionPromocion]['guardando'] = false
    // dispatch({
    //     type: OBTENER_CANALES_DE_PROMOCIONES_EXITO,
    //     payload: canalesPromociones
    // })

    // await fetch(config.api+'promociones/editar',
    //   {
    //     mode:'cors',
    //     method: 'POST',
    //     body: JSON.stringify({
    //         usutoken  : localStorage.getItem('usutoken'),
    //         scaid     : scaid,
    //     }),
    //     headers: {
    //       'Accept' : 'application/json',
    //       'Content-type' : 'application/json',
    //       'api_token': localStorage.getItem('usutoken')
    //     }
    //   }
    // )
    // .then( async res => {
    //   await dispatch(estadoRequestReducer(res.status))
    //   return res.json()
    // })
    // .then(data => {
    //   const estadoRequest = getState().estadoRequest.init_request
    //   if(estadoRequest === true){
    //     if(data.respuesta === true){
            
    //         dispatch({
    //             type: OBTENER_CANALES_DE_PROMOCIONES_EXITO,
    //             payload: data.datos
    //         })
            
    //     }else{
    //         dispatch({
    //             type: editarPromocionReducer,
    //             payload: data.datos
    //         })
    //     }
    //   }
    // }).catch((error)=> {
    //     dispatch({
    //         type: OBTENER_CANALES_DE_PROMOCIONES_FAIL,
    //         payload: []
    //     })
    // });
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
          'api_token': localStorage.getItem('usutoken')
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
        }else{
            
        }
      }
    }).catch((error)=> {
        
    });   

    

    console.log(objetoArray)

    // for(let contador = 0; contador < objetoArray.length; contador++ ){
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';

        const ws = XLSX.utils.json_to_sheet(objetoArray);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, 'PROMOCIONES-1'+ fileExtension);
    // }

}