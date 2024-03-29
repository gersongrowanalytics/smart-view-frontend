import {
    FILTRO_SELECCIONAR_ZONA_USUARIO
} from "constants/SistemaTypes";

const INIT_STATE = {
    zonaidseleccionado : 0
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case FILTRO_SELECCIONAR_ZONA_USUARIO: {
          return {
              ...state,
              zonaidseleccionado : action.payload
          }
      }
    default:
        return state;
    }
}
  