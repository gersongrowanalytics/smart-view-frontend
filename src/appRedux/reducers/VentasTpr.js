import {
    OBTENER_VENTAS_TPR_EXITO,
    OBTENER_VENTAS_TPR_FAIL,
    SELECCIONAR_VISTA_VENTAS,
    REINICIAR_VENTASTPR,
    ACTUALIZAR_ESTADO_CARGA_SUCURSAL_VENTAS,
    ACTUALIZAR_ESTADO_CARGA_ZONA_VENTAS,
    CAMBIAR_TAMANIO_CARDAVANCE_VENTAS,
    ACTIVAR_MODAL_DESCARGAS_VENTAS,
    CARGANDO_DESCARGA_SI,
    CARGANDO_DESCARGA_SO,
    OBTENER_VENTAS_SI_DESCARGA_ESPECIFICA,
    OBTENER_VENTAS_SI_REBATE_BONUS_DESCARGA_ESPECIFICA,
    OBTENER_VENTAS_SO_DESCARGA_ESPECIFICA,
    CAMBIAR_NUMERO_DESCARGA_SI_SO
} from "constants/SistemaTypes";
const INIT_STATE = {
    ventasTpr : [],
    obtuvoVentasTpr : false,
    vistaVentasSeleccionado  : false,
    rebateBonus : {
        "categorias"   : [],
        "objetivo"     : "",
        "real"         : "",
        "cumplimiento" : "",
        "rebate"       : ""
    },
    cargoZona      : true,
    cargoSucursal  : true,
    nombreZonaSel  : "",
    nombreSucuSel  : "",

    tamanioAvanceSI  : 0,
    tamanioAvanceSO  : 0,

    excelEspecificoSi  : [],
    excelEspecificoSiRebateBonus  : [],
    excelEspecificoSo  : [],
    mostrarModalDescargas : false,

    loadingDescargandoSi : false,
    loadingDescargandoSO : false,

    numeroDescargaSiSo : 0
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case OBTENER_VENTAS_TPR_EXITO: {
            return {
                ...state,
                ventasTpr: action.payload.datos,
                rebateBonus : action.payload.rebatebonus,
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
        case REINICIAR_VENTASTPR: {
            return {
                ...state,
                ventasTpr : [],
                obtuvoVentasTpr : false,
                vistaVentasSeleccionado  : false
            }
        }
        case ACTUALIZAR_ESTADO_CARGA_SUCURSAL_VENTAS: {
            return {
                ...state,
                cargoSucursal : action.payload.cargoSucursal,
                cargoZona     : action.payload.cargoZona,
                nombreSucuSel : action.payload.nombreSucuSel,
            }
        }
        case ACTUALIZAR_ESTADO_CARGA_ZONA_VENTAS: {
            return {
                ...state,
                cargoZona     : action.payload.cargoZona,
                nombreZonaSel : action.payload.nombreZonaSel,
                cargoSucursal : action.payload.cargoSucursal,
            }
        }
        case CAMBIAR_TAMANIO_CARDAVANCE_VENTAS: {
            return {
                ...state,
                tamanioAvanceSI : action.payload.tamanioAvanceSI,
                tamanioAvanceSO : action.payload.tamanioAvanceSO
            }
        }
        case ACTIVAR_MODAL_DESCARGAS_VENTAS: {
            return {
                ...state,
                mostrarModalDescargas : action.payload
            }
        }
        case CARGANDO_DESCARGA_SI: {
            return {
                ...state,
                loadingDescargandoSi : action.payload
            }
        }
        case CARGANDO_DESCARGA_SO: {
            return {
                ...state,
                loadingDescargandoSO : action.payload
            }
        }
        case OBTENER_VENTAS_SI_DESCARGA_ESPECIFICA: {
            return {
                ...state,
                excelEspecificoSi : action.payload
            }
        }
        case OBTENER_VENTAS_SI_REBATE_BONUS_DESCARGA_ESPECIFICA: {
            return {
                ...state,
                excelEspecificoSiRebateBonus : action.payload
            }
        }
        case OBTENER_VENTAS_SO_DESCARGA_ESPECIFICA: {
            return {
                ...state,
                excelEspecificoSo : action.payload
            }
        }
        case CAMBIAR_NUMERO_DESCARGA_SI_SO: {
            return {
                ...state,
                numeroDescargaSiSo : action.payload
            }
        }
        default:
            return state;
    }
  }
  