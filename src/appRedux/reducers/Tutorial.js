import {
    SELECCIONAR_TUTORIAL
} from "constants/SistemaTypes";
const INIT_STATE = {
    tutorialSeleccionado : false,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SELECCIONAR_TUTORIAL: {
            return {
                ...state,
                tutorialSeleccionado: action.payload,
            }
        }
    default:
        return state;
    }
  }
  