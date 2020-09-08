import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {
    OBTENER_VENTAS_TPR_EXITO,
    OBTENER_VENTAS_TPR_FAIL,
    SELECCIONAR_VISTA_VENTAS,
    REINICIAR_VENTASTPR
} from "constants/SistemaTypes";
import config from 'config'

export const reiniciarVentasTprReducer = () => {
  return {
    type: REINICIAR_VENTASTPR
  }
}

export const obtenerVentasTprReducer = () =>async (dispatch, getState) => {

    const {
        diaFiltroSelec,
        mesFiltroSelec,
        anoFiltroSelec
    } = getState().fechas

    const {
        idSucursalUsuarioSelec,
    } = getState().sucursales

    await fetch(config.api+'ventas/mostrar',
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
      if(estadoRequest == true){
        if(data.respuesta == true){
            dispatch({
                type: OBTENER_VENTAS_TPR_EXITO,
                payload: data.datos
            })
        }else{
            dispatch({
                type: OBTENER_VENTAS_TPR_FAIL,
                payload: data.datos
            })
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