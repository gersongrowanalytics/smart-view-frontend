import {
    SELECCIONAR_TUTORIAL,
    SELECCIONAR_VIDEO_TUTORIAL
} from "constants/SistemaTypes";
const INIT_STATE = {
    tutorialSeleccionado : false,
    videoTutorialSeleccionado : false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SELECCIONAR_TUTORIAL: {
            return {
                ...state,
                tutorialSeleccionado: action.payload,
            }
        }
        case SELECCIONAR_VIDEO_TUTORIAL: {
            return {
                ...state,
                videoTutorialSeleccionado: action.payload,
            }
        }
    default:
        return state;
    }
  }
  