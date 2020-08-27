import {
    OBTENER_VENTAS_TPR_EXITO,
    OBTENER_VENTAS_TPR_FAIL
} from "constants/SistemaTypes";
const INIT_STATE = {
    ventasTpr : [],
    obtuvoVentasTpr : false
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
    default:
        return state;
    }
  }
  