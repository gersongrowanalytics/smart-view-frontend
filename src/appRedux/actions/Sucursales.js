import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {
    OBTENER_SUCURSALES_USUARIO_EXITO,
    OBTENER_SUCURSALES_USUARIO_FAIL,
    FILTRO_SELECCIONAR_SUCURSAL_USUARIO,
    REINICIAR_SUCURSALES_USUARIO
} from "constants/SistemaTypes";
import {obtenerVentasTprReducer} from 'appRedux/actions/VentasTpr'
import {obtenerPromocionesReducer} from 'appRedux/actions/Promociones'
import config from 'config'
import {descargarInformacionPromocionesReducer} from 'appRedux/actions/Promociones'

export const reiniciarSucursalesReducer = () => {
  return {
    type : REINICIAR_SUCURSALES_USUARIO
  }
}

export const obtenerSucursalesReducer = () =>async (dispatch, getState) => {
    await fetch(config.api+'usuario/mostrar/sucursales',
      {
        mode:'cors',
        method: 'POST',
        body: JSON.stringify({}),
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
    .then(async data => {
      const estadoRequest = getState().estadoRequest.init_request
      if(estadoRequest == true){
        if(data.respuesta == true){
            dispatch({
                type: OBTENER_SUCURSALES_USUARIO_EXITO,
                payload: {
                  datos : data.datos,
                  zonas : data.zonas
                }
            })
        }else{
            dispatch({
                type: OBTENER_SUCURSALES_USUARIO_FAIL,
                payload: {
                  datos : data.datos,
                  zonas : data.zonas
                }
            })
        }
      }
    }).catch((error)=> {
        dispatch({
            type: OBTENER_SUCURSALES_USUARIO_FAIL,
            payload: {
              datos : [],
              zonas : []
            }
        })
    });
}

export const filtroSeleccionarSucursalUsuario = (sucid) => async (dispatch, getState) => {
  await dispatch({
    type: FILTRO_SELECCIONAR_SUCURSAL_USUARIO,
    payload: sucid
  })
  await dispatch(obtenerVentasTprReducer())
  await dispatch(obtenerPromocionesReducer())
  await dispatch(descargarInformacionPromocionesReducer())
}