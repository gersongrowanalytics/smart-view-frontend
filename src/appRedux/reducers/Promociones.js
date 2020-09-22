import {
    OBTENER_PROMOCIONES_EXITO,
    OBTENER_PROMOCIONES_FAIL,
    ACTUALIZAR_CATEGORIAS_DE_PROMOCIONES,
    OBTENER_CANALES_DE_PROMOCIONES_EXITO,
    OBTENER_CANALES_DE_PROMOCIONES_FAIL,
    SELECCIONAR_PROMOCION,
    ACTUALIZAR_COLOR_SELECCIONADO_PROMOCION,
    SELECCIONAR_VISTA_PROMOCION,
    REINICIAR_PROMOCIONES,
    DESELECCIONAR_PROMOCION,
    OBTENER_PROMOCIONES_EXCEL,
    MOSTRAR_MODAL_INFORMATIVO_PROMOCIONES
} from "constants/SistemaTypes";

const INIT_STATE = {
    categoriasPromociones       : [],
    obtuvoPromociones           : false,
    canalesPromociones          : [],
    seleccionoPromocion         : false,
    colorSeleciconadoPromo      : 'transparent',
    vistaPromocionSeleccionado  : false,
    deseleccionarPromocion      : false,
    fechaActualizacionPromocion : "",
    promocionesExcel            : [],
    mostrarModalInformativo     : true
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case OBTENER_PROMOCIONES_EXITO: {
            return {
                ...state,
                categoriasPromociones: action.payload.datos,
                fechaActualizacionPromocion: action.payload.fecha,
                obtuvoPromociones : true,
                canalesPromociones : []
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
                canalesPromociones : [],
            }
        }
        case SELECCIONAR_PROMOCION: {
            return {
                ...state,
                seleccionoPromocion : action.payload,
            }
        }
        case ACTUALIZAR_COLOR_SELECCIONADO_PROMOCION: {
            return {
                ...state,
                colorSeleciconadoPromo : action.payload,
            }
        }
        case SELECCIONAR_VISTA_PROMOCION: {
            return {
                ...state,
                vistaPromocionSeleccionado : action.payload,
            }
        }
        case DESELECCIONAR_PROMOCION : {
            return {
                ...state,
                deseleccionarPromocion : action.payload
            }
        }
        case REINICIAR_PROMOCIONES: {
            return {
                ...state,
                categoriasPromociones       : [],
                obtuvoPromociones           : false,
                canalesPromociones          : [],
                seleccionoPromocion         : false,
                colorSeleciconadoPromo      : 'transparent',
                vistaPromocionSeleccionado  : false
            }
        }
        case OBTENER_PROMOCIONES_EXCEL: {
            return {
                ...state,
                promocionesExcel : action.payload
            }
        }
        case MOSTRAR_MODAL_INFORMATIVO_PROMOCIONES: {
            return {
                ...state,
                mostrarModalInformativo : action.payload
            }
        }
        default:{
            return state;
        }
    }
}
  