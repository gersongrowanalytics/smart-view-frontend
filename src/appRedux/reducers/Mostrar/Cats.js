import {
    ACTUALIZAR_CATS
} from "constants/MostrarTypes";

const INIT_STATE = {
    cats : [],
};

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case ACTUALIZAR_CATS: {
            return { 
                ...state,
                cats : action.payload
            }
        }
        default:
            return state;
    }
}