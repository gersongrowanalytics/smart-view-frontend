import {
    ACTUALIZAR_TDIS,
    ACTUALIZAR_SELECCION_TDI
} from "constants/MostrarTypes";

const INIT_STATE = {
    tdis : [],
    tdiidSeleccionado           : 0,
    tdiabreviacionSeleccionado  : null
};

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case ACTUALIZAR_TDIS: {
            return { 
                ...state,
                tdis : action.payload
            }
        }
        case ACTUALIZAR_SELECCION_TDI : {
            return {
                ...state,
                tdiidSeleccionado   : action.payload.tdiid,
                tdiabreviacionSeleccionado  : action.payload.tdiabreviacion
            }
        }
        default:
            return state;
    }
}