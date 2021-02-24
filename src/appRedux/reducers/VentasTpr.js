import {
    OBTENER_VENTAS_TPR_EXITO,
    OBTENER_VENTAS_TPR_FAIL,
    SELECCIONAR_VISTA_VENTAS,
    REINICIAR_VENTASTPR,
    ACTUALIZAR_ESTADO_CARGA_SUCURSAL_VENTAS,
    ACTUALIZAR_ESTADO_CARGA_ZONA_VENTAS,
    CAMBIAR_TAMANIO_CARDAVANCE_VENTAS
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
    tamanioAvanceSO  : 0
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
        default:
            return state;
    }
  }
  