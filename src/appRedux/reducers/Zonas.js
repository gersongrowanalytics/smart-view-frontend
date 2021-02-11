import {
    FILTRO_SELECCIONAR_ZONA_USUARIO,
    SELECCIONAR_FILTRO_XZONA
} from "constants/SistemaTypes";

const INIT_STATE = {
    zonaidseleccionado : 0,
    gsuidSeleccionado  : 0,
    casidSeleccionado  : 0,
    seleccionarFiltroZona : false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case FILTRO_SELECCIONAR_ZONA_USUARIO: {
          return {
              ...state,
              zonaidseleccionado : action.payload.zonaidseleccionado,
              gsuidSeleccionado : action.payload.gsuidSeleccionado,
              casidSeleccionado : action.payload.casidSeleccionado,
          }
      }
      case SELECCIONAR_FILTRO_XZONA : {
          return {
              ...state,
              seleccionarFiltroZona : action.payload
          }
      }
    default:
        return state;
    }
}
  