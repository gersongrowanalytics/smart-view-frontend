import {
    OBTENER_VENTAS_TPR_EXITO,
    OBTENER_VENTAS_TPR_FAIL,
    SELECCIONAR_VISTA_VENTAS
} from "constants/SistemaTypes";
const INIT_STATE = {
    ventasTpr : [],
    obtuvoVentasTpr : false,
    vistaVentasSeleccionado  : false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case OBTENER_VENTAS_TPR_EXITO: {
            return {
                ...state,
                ventasTpr: action.payload,
                obtuvoVentasTpr : true
            }
        }
        case OBTENER_VENTAS_TPR_FAIL: {
            return {
                ...state,
                ventasTpr: action.payload,
                obtuvoVentasTpr : true
            }
        }
        case SELECCIONAR_VISTA_VENTAS: {
            return {
                ...state,
                vistaVentasSeleccionado: action.payload,
            }
        }
        default:
            return state;
    }
  }
  