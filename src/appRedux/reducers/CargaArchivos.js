import {
    SELECCIONAR_CARGA_DE_ARCHIVOS
} from "constants/SistemaTypes";
const INIT_STATE = {
    cargaArchivosSeleccionado : false,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SELECCIONAR_CARGA_DE_ARCHIVOS: {
            return {
                ...state,
                cargaArchivosSeleccionado: action.payload,
            }
        }
    default:
        return state;
    }
  }
  