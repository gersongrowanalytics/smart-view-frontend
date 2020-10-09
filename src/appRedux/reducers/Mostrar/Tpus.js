import {
    ACTUALIZAR_TPUS,
    ACTUALIZAR_SELECCION_TPU
} from "constants/MostrarTypes";

const INIT_STATE = {
    tpus : [],
    tpuidSeleccionado     : 0,
    tpunombreSeleccionado : null
};

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case ACTUALIZAR_TPUS: {
            return { 
                ...state,
                tpus : action.payload
            }
        }
        case ACTUALIZAR_SELECCION_TPU : {
            return {
                ...state,
                tpuidSeleccionado     : action.payload.id,
                tpunombreSeleccionado : action.payload.nombre
            }
        }
        default:
            return state;
    }
}