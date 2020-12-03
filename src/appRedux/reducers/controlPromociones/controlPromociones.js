import {
    OBTENER_CONTROL_PROMOCIONES,
    OBTENER_COLUMNAS_CONTROL_PROMOCIONES,
    CARGANDO_TABLA_CONTROL_PROMOCIONES
} from "constants/SistemaTypes";

const INIT_STATE = {
    listaControlPromociones : [],
    columnasTablaControlPromociones : [],
    cargandoTablaControlPromociones : false

};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CARGANDO_TABLA_CONTROL_PROMOCIONES: {
            return {
                ...state,
                cargandoTablaControlPromociones : action.payload
            }
        }
        case OBTENER_CONTROL_PROMOCIONES: {
            return {
                ...state,
                listaControlPromociones : action.payload,
                cargandoTablaControlPromociones : false
            }
        }
        case OBTENER_COLUMNAS_CONTROL_PROMOCIONES: {
            return {
                ...state,
                columnasTablaControlPromociones : action.payload
            }
        }
    default:
        return state;
    }
}