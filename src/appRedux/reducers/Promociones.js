import {
    OBTENER_PROMOCIONES_EXITO,
    OBTENER_PROMOCIONES_FAIL,
    ACTUALIZAR_CATEGORIAS_DE_PROMOCIONES,
    OBTENER_CANALES_DE_PROMOCIONES_EXITO,
    OBTENER_CANALES_DE_PROMOCIONES_FAIL
} from "constants/SistemaTypes";

const INIT_STATE = {
    categoriasPromociones : [],
    obtuvoPromociones     : false,
    canalesPromociones    : []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case OBTENER_PROMOCIONES_EXITO: {
            return {
                ...state,
                categoriasPromociones: action.payload,
                obtuvoPromociones : true
            }
        }
        case OBTENER_PROMOCIONES_FAIL: {
            return {
                ...state,
                categoriasPromociones : action.payload,
                obtuvoPromociones : true
            }
        }
        case ACTUALIZAR_CATEGORIAS_DE_PROMOCIONES: {
            return {
                ...state,
                categoriasPromociones : action.payload,
            }
        }
        case OBTENER_CANALES_DE_PROMOCIONES_EXITO: {
            return {
                ...state,
                canalesPromociones : action.payload,
            }
        }
        case OBTENER_CANALES_DE_PROMOCIONES_FAIL: {
            return {
                ...state,
                canalesPromociones : action.payload,
            }
        }
        default:{
            return state;
        }
    }
  }
  