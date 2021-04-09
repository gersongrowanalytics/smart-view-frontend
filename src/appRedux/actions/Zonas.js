import {
    FILTRO_SELECCIONAR_ZONA_USUARIO,
    SELECCIONAR_FILTRO_XZONA
} from "constants/SistemaTypes";
import {obtenerVentasTprXZonaReducer, CargandoDescargaSISOReducer} from 'appRedux/actions/VentasTpr'
import {obtenerPromocionesXZonaReducer} from 'appRedux/actions/Promociones'

export const filtroSeleccionarZonaUsuarioReducer = (zonid, gsuid, casid) => async (dispatch) => {
    
    

    dispatch({
        type    : SELECCIONAR_FILTRO_XZONA,
        payload : true
    })
    
    await dispatch({
        type: FILTRO_SELECCIONAR_ZONA_USUARIO,
        payload: {
            zonaidseleccionado : zonid,
            gsuidSeleccionado  : gsuid,
            casidSeleccionado  : casid,
        }
    })
    dispatch(obtenerPromocionesXZonaReducer(zonid, gsuid, casid))
    await dispatch(obtenerVentasTprXZonaReducer())
    await dispatch(CargandoDescargaSISOReducer(true, true))
    
}