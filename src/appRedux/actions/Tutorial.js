import {
    SELECCIONAR_TUTORIAL,
    SELECCIONAR_VIDEO_TUTORIAL
} from "constants/SistemaTypes";

export const seleccionarTutorialReducer = (activar) => {
    return {
        type: SELECCIONAR_TUTORIAL,
        payload: activar
    }
}

export const seleccionarVideoTutorialReducer = (activar) => {
    return {
        type: SELECCIONAR_VIDEO_TUTORIAL,
        payload: activar
    }
}