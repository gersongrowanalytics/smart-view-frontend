import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {
    OBTENER_VENTAS_TPR_EXITO,
    OBTENER_VENTAS_TPR_FAIL,
    SELECCIONAR_VISTA_VENTAS,
    REINICIAR_VENTASTPR,
    ACTUALIZAR_ESTADO_CARGA_SUCURSAL_VENTAS,
    ACTUALIZAR_ESTADO_CARGA_ZONA_VENTAS
} from "constants/SistemaTypes";
import config from 'config'

export const reiniciarVentasTprReducer = () => {
  return {
    type: REINICIAR_VENTASTPR
  }
}

export const obtenerVentasTprReducer = (nombreSucursal) =>async (dispatch, getState) => {
    
    const {
        diaFiltroSelec,
        mesFiltroSelec,
        anoFiltroSelec
    } = getState().fechas

    const {
        idSucursalUsuarioSelec,
    } = getState().sucursales


    dispatch({
        type: ACTUALIZAR_ESTADO_CARGA_SUCURSAL_VENTAS,
        payload: {
            "cargoSucursal" : false,
            "cargoZona"     : true,
            "nombreSucuSel" : nombreSucursal
        }
    })

    await fetch(config.api+'ventas/mostrar',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({
                usutoken : localStorage.getItem('usutoken'),
                sucid    : idSucursalUsuarioSelec,
                // dia      : diaFiltroSelec,
                dia      : "01",
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
        const {cargoSucursal, cargoZona} = getState().ventasTpr
        if(estadoRequest == true){
            const idSucursalSeleccionado = getState().sucursales.idSucursalUsuarioSelec
            if(idSucursalSeleccionado == idSucursalUsuarioSelec){
                if(cargoSucursal == false){
                    dispatch({
                        type: ACTUALIZAR_ESTADO_CARGA_SUCURSAL_VENTAS,
                        payload: {
                            "cargoSucursal" : true,
                            "cargoZona"     : cargoZona,
                            "nombreSucuSel" : nombreSucursal
                        }
                    })
    
                    if(data.respuesta == true){
                        dispatch({
                            type: OBTENER_VENTAS_TPR_EXITO,
                            payload: {
                            "datos" : data.datos,
                            "rebatebonus" : data.rebatebonus
                            }
                        })
                    }else{
                        dispatch({
                            type: OBTENER_VENTAS_TPR_FAIL,
                            payload: data.datos
                        })
                    }
                }else{
                    dispatch({
                        type: ACTUALIZAR_ESTADO_CARGA_SUCURSAL_VENTAS,
                        payload: {
                            "cargoSucursal" : true,
                            "cargoZona"     : cargoZona,
                            "nombreSucuSel" : nombreSucursal
                        }
                    })
                }
            }
      }
    }).catch((error)=> {
        dispatch({
            type: OBTENER_VENTAS_TPR_FAIL,
            payload: []
        })
    });
}

export const seleccionarVistaVentasReducer = (accion) => {
  return {
      type: SELECCIONAR_VISTA_VENTAS,
      payload: accion
  }
}

export const obtenerVentasTprXZonaReducer = (nombreZonaSel) => async (dispatch, getState) => {
    const {
        diaFiltroSelec,
        mesFiltroSelec,
        anoFiltroSelec
    } = getState().fechas

    const {
        zonaidseleccionado,
        gsuidSeleccionado
    } = getState().zonas

    dispatch({
        type: ACTUALIZAR_ESTADO_CARGA_ZONA_VENTAS,
        payload: {
            "cargoZona"     : false,
            "nombreZonaSel" : nombreZonaSel,
            "cargoSucursal" : true
        }
    })

    await fetch(config.api+'ventas/mostrar/porzona',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({
                usutoken : localStorage.getItem('usutoken'),
                zonid    : zonaidseleccionado,
                gsuid    : gsuidSeleccionado,
                dia      : "01",
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
        const {
            cargoSucursal,
            cargoZona
        } = getState().ventasTpr

        const idZonaActual = getState().zonas.zonaidseleccionado

        if(estadoRequest == true){
            if(idZonaActual == zonaidseleccionado){
                if(cargoZona == false){
                    dispatch({
                        type: ACTUALIZAR_ESTADO_CARGA_ZONA_VENTAS,
                        payload: {
                            "cargoZona"     : true,
                            "nombreZonaSel" : nombreZonaSel,
                            "cargoSucursal" : cargoSucursal
                        }
                    })
                    if(data.respuesta == true){
                        dispatch({
                            type: OBTENER_VENTAS_TPR_EXITO,
                            payload: {
                                "datos" : data.datos,
                                "rebatebonus" : data.rebatebonus
                            }
                        })
                    }else{
                        // dispatch({
                        //     type: OBTENER_VENTAS_TPR_FAIL,
                        //     payload: data.datos
                        // })
                    }
                }else{
                    dispatch({
                        type: ACTUALIZAR_ESTADO_CARGA_ZONA_VENTAS,
                        payload: {
                            "cargoZona"     : true,
                            "nombreZonaSel" : nombreZonaSel,
                            "cargoSucursal" : cargoSucursal
                        }
                    })
                }
            }
        }

    }).catch((error)=> {
            dispatch({
                type: OBTENER_VENTAS_TPR_FAIL,
                payload: []
            })
    });
}

