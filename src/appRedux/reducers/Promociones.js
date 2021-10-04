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
    OBTENER_PROMOCIONES_EXCEL_ESPECIFICO,
    OBTENER_REPORTE_PAGOS_EXCEL_ESPECIFICO,
    MOSTRAR_MODAL_INFORMATIVO_PROMOCIONES,
    ACTUALIZAR_CANALES_DE_PROMOCIONES,
    ACTIVAR_MODAL_DESCARGAS_PROMOCIONES,

    ACTIVAR_MODAL_REPORTES_PAGOS_PROMOCIONES,
    CARGANDO_REPORTE_PAGOS_PROMOCIONES,
    CAMBIAR_DISENIO_PROMOCIONES
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
    promocionesExcelEspecifico  : [],
    
    reportePagosExcelEspecifico : [],
    reconocimientoExcelEspecifico : [],
    promocionesliquidacionesExcelEspecifico : [],
    fechaActualizacionReportePago : "",
    cargandoReportePagos : false,

    mostrarModalInformativo     : true,
    scaidSeleccionado           : 0,
    mostrarModalDescargas       : false,
    reiniciandoPromociones      : false,

    mostrarModalReportePagos    : false,
    mostrarDisenioPromocionesPrincipal : true
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
                canalesPromociones : action.payload.canalesPromociones,
                scaidSeleccionado  : action.payload.scaid
            }
        }
        case ACTUALIZAR_CANALES_DE_PROMOCIONES: {
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
                // categoriasPromociones       : [],
                obtuvoPromociones           : false,
                canalesPromociones          : [],
                seleccionoPromocion         : false,
                colorSeleciconadoPromo      : 'transparent',
                vistaPromocionSeleccionado  : false,
                deseleccionarPromocion      : false,
                fechaActualizacionPromocion : "",
                promocionesExcel            : [],
                promocionesExcelEspecifico  : [],
                scaidSeleccionado           : 0,

                reiniciandoPromociones      : action.payload //OJO
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
        case ACTIVAR_MODAL_DESCARGAS_PROMOCIONES :{
            return {
                ...state,
                mostrarModalDescargas : action.payload
            }
        }
        case OBTENER_PROMOCIONES_EXCEL_ESPECIFICO : {
            return {
                ...state,
                promocionesExcelEspecifico : action.payload
            }
        }
        case OBTENER_REPORTE_PAGOS_EXCEL_ESPECIFICO : {
            return {
                ...state,
                reportePagosExcelEspecifico : action.payload.reporte,
                reconocimientoExcelEspecifico : action.payload.reconocimiento,
                promocionesliquidacionesExcelEspecifico : action.payload.promociones,
                fechaActualizacionReportePago : action.payload.actualizacion
            }
        }
        case ACTIVAR_MODAL_REPORTES_PAGOS_PROMOCIONES: {
            return {
                ...state,
                mostrarModalReportePagos : action.payload
            }
        }
        case CARGANDO_REPORTE_PAGOS_PROMOCIONES: {
            return {
                ...state,
                cargandoReportePagos : action.payload
            }
        }
        case CAMBIAR_DISENIO_PROMOCIONES: {
            return {
                ...state,
                mostrarDisenioPromocionesPrincipal : action.payload
            }
        }
        default:{
            return state;
        }
    }
}
  