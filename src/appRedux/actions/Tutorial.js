import {
    SELECCIONAR_TUTORIAL
} from "constants/SistemaTypes";

export const seleccionarTutorialReducer = (activar) => {
    return {
        type: SELECCIONAR_TUTORIAL,
        payload: activar
    }
}