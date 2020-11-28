import {
    OBTENER_CONTROL_ARCHIVOS,
    OBTENER_COLUMNAS_CONTROL_ARCHIVOS
} from "constants/SistemaTypes";

const INIT_STATE = {
    listaControlArchivos : [],
    columnasTablaControlArchivo  : [],
    cargandoTablaControlArchivos : false

};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case OBTENER_CONTROL_ARCHIVOS: {
            return {
                ...state,
                listaControlArchivos : action.payload
            }
        }
        case OBTENER_COLUMNAS_CONTROL_ARCHIVOS: {
            return {
                ...state,
                columnasTablaControlArchivo : action.payload
            }
        }
    default:
        return state;
    }
}