import {
    OBTENER_FECHAS_FILTRO_EXITO,
    OBTENER_FECHAS_FILTRO_FAIL,
    FILTRO_SELECCIONAR_FECHA_DIA,
    FILTRO_SELECCIONAR_FECHA_MES,
    FILTRO_SELECCIONAR_FECHA_ANO,
    REINICIAR_FECHAS
} from "constants/SistemaTypes";

const INIT_STATE = {
    fechasFiltro       : {"dias": [], "meses": [], "anos": []},
    obtuvoFechasFiltro : false,
    diaFiltroSelec : '',
    mesFiltroSelec : '',
    anoFiltroSelec : ''
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case OBTENER_FECHAS_FILTRO_EXITO: {
        return {
            ...state,
            fechasFiltro: action.payload,
            obtuvoFechasFiltro : true,
            diaFiltroSelec  : action.payload.dias[0],
            mesFiltroSelec  : action.payload.meses[0],
            anoFiltroSelec  : action.payload.anos[0]
        }
      }
    case OBTENER_FECHAS_FILTRO_FAIL: {
        return {
            ...state,
            fechasFiltro: action.payload,
            obtuvoFechasFiltro : true
        }
    }
    case FILTRO_SELECCIONAR_FECHA_DIA: {
        return {
            ...state,
            diaFiltroSelec: action.payload
        }
    }
    case FILTRO_SELECCIONAR_FECHA_MES: {
        return {
            ...state,
            mesFiltroSelec: action.payload
        }
    }
    case FILTRO_SELECCIONAR_FECHA_ANO: {
        return {
            ...state,
            anoFiltroSelec: action.payload
        }
    }
    case REINICIAR_FECHAS: {
        return {
            ...state,
            fechasFiltro       : {"dias": [], "meses": [], "anos": []},
            obtuvoFechasFiltro : false,
            diaFiltroSelec : '',
            mesFiltroSelec : '',
            anoFiltroSelec : ''
        }
    }
    default:
        return state;
    }
  }
  