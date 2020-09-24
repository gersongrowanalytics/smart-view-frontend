import {
    FILTRO_SELECCIONAR_ZONA_USUARIO
} from "constants/SistemaTypes";
import {obtenerVentasTprXZonaReducer} from 'appRedux/actions/VentasTpr'

export const filtroSeleccionarZonaUsuarioReducer = (zonid) => async (dispatch) => {
  
    await dispatch({
        type: FILTRO_SELECCIONAR_ZONA_USUARIO,
        payload: zonid
    })

    await dispatch(obtenerVentasTprXZonaReducer())
}