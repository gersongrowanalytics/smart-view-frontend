import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {
    OBTENER_FECHAS_FILTRO_EXITO,
    OBTENER_FECHAS_FILTRO_FAIL,
    FILTRO_SELECCIONAR_FECHA_DIA,
    FILTRO_SELECCIONAR_FECHA_MES,
    FILTRO_SELECCIONAR_FECHA_ANO,
    REINICIAR_FECHAS
} from "constants/SistemaTypes";
import {obtenerVentasTprReducer} from 'appRedux/actions/VentasTpr'
import {obtenerPromocionesReducer} from 'appRedux/actions/Promociones'
import config from 'config'

export const reiniciarFechasReducer = () => {
  return {
    type : REINICIAR_FECHAS
  }
}

export const obtenerFechasReducer = () =>async (dispatch, getState) => {
    await fetch(config.api+'fechas/mostrar/fechas',
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
    .then(data => {
      const estadoRequest = getState().estadoRequest.init_request
      if(estadoRequest == true){
        if(data.respuesta == true){
            dispatch({
                type: OBTENER_FECHAS_FILTRO_EXITO,
                payload: data.datos
            })
        }else{
            dispatch({
                type: OBTENER_FECHAS_FILTRO_FAIL,
                payload: data.datos
            })
        }
      }
    }).catch((error)=> {
        dispatch({
            type: OBTENER_FECHAS_FILTRO_FAIL,
            payload: []
        })
    });
}

export const filtroSeleccionarDia = (dia) => async (dispatch, getState) => {
  await dispatch({
    type: FILTRO_SELECCIONAR_FECHA_DIA,
    payload: dia
  })
  await dispatch(obtenerVentasTprReducer())
  await dispatch(obtenerPromocionesReducer())
}

export const filtroSeleccionarMes = (mes) => async (dispatch, getState) => {
  await dispatch({
    type: FILTRO_SELECCIONAR_FECHA_MES,
    payload: mes
  })
  await dispatch(obtenerVentasTprReducer())
  await dispatch(obtenerPromocionesReducer())
}

export const filtroSeleccionarAno = (ano) => async (dispatch, getState) => {
  await dispatch({
    type: FILTRO_SELECCIONAR_FECHA_ANO,
    payload: ano
  })
  await dispatch(obtenerVentasTprReducer())
  await dispatch(obtenerPromocionesReducer())
}