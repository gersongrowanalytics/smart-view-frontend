import {
    FILTRO_SELECCIONAR_ZONA_USUARIO
} from "constants/SistemaTypes";
import {obtenerVentasTprXZonaReducer} from 'appRedux/actions/VentasTpr'

export const filtroSeleccionarZonaUsuarioReducer = (zonid, gsuid, casid) => async (dispatch) => {
  
    await dispatch({
        type: FILTRO_SELECCIONAR_ZONA_USUARIO,
        payload: {
            zonaidseleccionado : zonid,
            gsuidSeleccionado  : gsuid,
            casidSeleccionado  : casid,
        }
    })

    await dispatch(obtenerVentasTprXZonaReducer())
}