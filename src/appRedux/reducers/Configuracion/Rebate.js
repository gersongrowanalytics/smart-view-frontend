import {
    MODAL_NUEVO_REBATE,
    AGREGAR_NUEVO_REBATE,
    OBTUVO_LISTA_REBATE,
    ACTUALIZAR_COLUMNAS_TABLA_REBATE,
    ACTUALIZAR_OBTUVO_REBATE,
    ACTUALIZAR_CARGANDO_TABLA_REBATE
} from "constants/SistemaTypes"

const INIT_STATE = {
    listaRebates        : [],
    modalNuevoRebate    : false,
    cargandoNuevoRebate : false,
    obtuvoRebate        : false,
    cargandoTablaRebate : true,
    columnasTablaRebate : []
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case MODAL_NUEVO_REBATE: 
            return {
                ...state,
                modalNuevoRebate : action.payload
            }
        case AGREGAR_NUEVO_REBATE:
            return {
                ...state,
                cargandoNuevoRebate : action.payload.cargandoNuevoRebate
            }
        case OBTUVO_LISTA_REBATE :
            return {
                ...state,
                listaRebates        : action.payload.datos,
                obtuvoRebate        : action.payload.obtuvoRebate,
                cargandoTablaRebate : action.payload.cargandoTablaRebate
            }
        case ACTUALIZAR_COLUMNAS_TABLA_REBATE:
            return {
                ...state,
                columnasTablaRebate : action.payload
            }
        case ACTUALIZAR_OBTUVO_REBATE:
            return {
                ...state,
                obtuvoRebate : action.payload
            }
        case ACTUALIZAR_CARGANDO_TABLA_REBATE:
            return {
                ...state,
                cargandoTablaRebate : action.payload
            }
        default: 
            return state
    }
}



