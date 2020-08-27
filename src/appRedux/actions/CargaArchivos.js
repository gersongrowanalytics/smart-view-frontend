import {
    SELECCIONAR_CARGA_DE_ARCHIVOS
} from "constants/SistemaTypes";

export const seleccionarCargaArchivosReducer = (activar) => {
    return {
        type: SELECCIONAR_CARGA_DE_ARCHIVOS,
        payload: activar
    }
}