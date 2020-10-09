import {
    ACTUALIZAR_ZONS,
    ACTUALIZAR_SELECCION_ZON
} from "constants/MostrarTypes";

const INIT_STATE = {
    zons : [],
    zonidSeleccionado     : 0,
    zonnombreSeleccionado : null
};

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case ACTUALIZAR_ZONS: {
            return { 
                ...state,
                zons : action.payload
            }
        }
        case ACTUALIZAR_SELECCION_ZON : {
            return {
                ...state,
                zonidSeleccionado     : action.payload.id,
                zonnombreSeleccionado : action.payload.nombre
            }
        }
        default:
            return state;
    }
}