import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {
    OBTENER_SUCURSALES_USUARIO_EXITO,
    OBTENER_SUCURSALES_USUARIO_FAIL,
    FILTRO_SELECCIONAR_SUCURSAL_USUARIO,
    REINICIAR_SUCURSALES_USUARIO,
    OBTENER_SUCURSALES_USUARIO,
} from "constants/SistemaTypes";
import {obtenerVentasTprReducer, CargandoDescargaSISOReducer} from 'appRedux/actions/VentasTpr'
import {obtenerPromocionesReducer, ObtenerPromocionesDescargaEspecifica} from 'appRedux/actions/Promociones'
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
      if(estadoRequest == true){
        if(data.respuesta == true){
            dispatch({
                type: OBTENER_SUCURSALES_USUARIO_EXITO,
                payload: {
                  datos : data.datos,
                  zonas : data.zonas,
                  cass  : data.cass,
                  gsus  : data.gsus,
                }
            })
        }else{
            dispatch({
                type: OBTENER_SUCURSALES_USUARIO_FAIL,
                payload: {
                  datos : data.datos,
                  zonas : data.zonas,
                  cass  : data.cass,
                  gsus  : data.gsus,
                }
            })
        }
      }
    }).catch((error)=> {
        dispatch({
            type: OBTENER_SUCURSALES_USUARIO_FAIL,
            payload: {
              datos : [],
              zonas : [],
              cass  : [],
              gsus  : []
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

export const SeleccionarSucursalDescargasReducer = (posicionSucursal, estado) => async(dispatch, getState) => {

  let sucursales = getState().sucursales.sucursalesUsuario
  let zonas = getState().sucursales.zonas

  sucursales[posicionSucursal]['sucpromociondescarga'] = estado

  await dispatch({
    type    : OBTENER_SUCURSALES_USUARIO,
    payload : {
      sucursalesUsuario : sucursales,
      zonas : zonas
    }
  })

  dispatch(ObtenerPromocionesDescargaEspecifica())
  dispatch(CargandoDescargaSISOReducer(true, true))
}

export const SeleccionarSucursalesZonaReducerReducer = (zonid, posicionZona, estado) => async(dispatch, getState) => {
  let sucursales = getState().sucursales.sucursalesUsuario
  let zonas = getState().sucursales.zonas
  zonas[posicionZona]['zonpromociondescarga'] = estado

  await sucursales.map((sucursal, posicion) => {
    if(sucursal.zonid == zonid){
      sucursales[posicion]['sucpromociondescarga'] = estado;
    }
  })

  await dispatch({
    type    : OBTENER_SUCURSALES_USUARIO,
    payload : {
      sucursalesUsuario : sucursales,
      zonas : zonas
    }
  })

  dispatch(ObtenerPromocionesDescargaEspecifica())

  dispatch(CargandoDescargaSISOReducer(true, true))
}

export const SeleccionarTodasSucursalesDescargasReducer = (estado) => async(dispatch, getState) => {
  let sucursales = getState().sucursales.sucursalesUsuario
  let zonas = getState().sucursales.zonas

  await sucursales.map((sucursal, posicion) => {
    sucursales[posicion]['sucpromociondescarga'] = estado;
  })

  await zonas.map((zona, posicionZona) => {
    zonas[posicionZona]['zonpromociondescarga'] = estado;
  })



  await dispatch({
    type    : OBTENER_SUCURSALES_USUARIO,
    payload : {
      sucursalesUsuario : sucursales,
      zonas : zonas
    }
  })

  dispatch(ObtenerPromocionesDescargaEspecifica())
  
  dispatch(CargandoDescargaSISOReducer(true, true))
}