import {
    OBTENER_NUMEROS_MES,
    OBTENER_ANIO_SELECCIONADO,
    OBTENER_MES_SELECCIONADO,
    OBTENER_TODO_MES,
    CAPTURAR_MENSAJE_CONTROLSELLOUT
} from "constants/SistemaTypes"

const INIT_STATE = {
    meses : [
        {
            "seleccionado" : true,
            "anio" : (new Date()).getFullYear(),
            "mes"  : (new Date()).getMonth()+1,
            "dias" : []
        }
    ],
    mesSeleccionado : (new Date()).getMonth()+1,
    anioSeleccionado : (new Date()).getFullYear(),
    cargandoTodoMes : false,
    mensajes : []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case OBTENER_NUMEROS_MES: {
            return {
                ...state,
                meses : action.payload
            }
        }
        case OBTENER_MES_SELECCIONADO: {
            return {
                ...state,
                mesSeleccionado : action.payload
            }
        }
        case OBTENER_ANIO_SELECCIONADO: {
            return {
                ...state,
                anioSeleccionado : action.payload
            }
        }
        case OBTENER_TODO_MES: {
            return {
                ...state,
                cargandoTodoMes : action.payload
            }
        }

        case CAPTURAR_MENSAJE_CONTROLSELLOUT:{
            return {
                ...state,
                mensajes : action.payload
            }
        }
        
    default:
        return state;
    }
}