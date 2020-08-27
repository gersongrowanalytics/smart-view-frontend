import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {
    OBTENER_PROMOCIONES_EXITO,
    OBTENER_PROMOCIONES_FAIL,
    ACTUALIZAR_CATEGORIAS_DE_PROMOCIONES,
    OBTENER_CANALES_DE_PROMOCIONES_EXITO,
    OBTENER_CANALES_DE_PROMOCIONES_FAIL
} from "constants/SistemaTypes";
import {obtenerVentasTprReducer} from 'appRedux/actions/VentasTpr'
import config from 'config'

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
      if(estadoRequest == true){
        if(data.respuesta == true){
            data.datos.map(item => {
                data.datos.push(item)
            })
            data.datos.map(item => {
                data.datos.push(item)
            })
            data.datos.map(item => {
                data.datos.push(item)
            })
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
    let {categoriasPromociones} = getState().promociones

    categoriasPromociones.map((categoria, nuevaposicion) => {
        if(categoria.scaid == scaid){
            categoriasPromociones[nuevaposicion]['seleccionado'] = true
        }else{
            categoriasPromociones[nuevaposicion]['seleccionado'] = false
        }
    })

    dispatch({
        type: ACTUALIZAR_CATEGORIAS_DE_PROMOCIONES,
        payload: categoriasPromociones
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
      if(estadoRequest == true){
        if(data.respuesta == true){
            dispatch({
                type: OBTENER_CANALES_DE_PROMOCIONES_EXITO,
                payload: data.datos
            })
        }else{
            dispatch({
                type: OBTENER_CANALES_DE_PROMOCIONES_FAIL,
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