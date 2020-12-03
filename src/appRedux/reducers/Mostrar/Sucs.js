import {
    ACTUALIZAR_SUCSXZONA
} from "constants/MostrarTypes";

const INIT_STATE = {
    sucsxzona : [],
};

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case ACTUALIZAR_SUCSXZONA: {
            return { 
                ...state,
                sucsxzona : action.payload
            }
        }
        default:
            return state;
    }
}