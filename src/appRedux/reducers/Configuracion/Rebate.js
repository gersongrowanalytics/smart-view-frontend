import {
    MODAL_NUEVO_REBATE,
    AGREGAR_NUEVO_REBATE,
    OBTUVO_LISTA_REBATE,
    ACTUALIZAR_COLUMNAS_TABLA_REBATE,
    ACTUALIZAR_OBTUVO_REBATE,
    ACTUALIZAR_CARGANDO_TABLA_REBATE,
    MODAL_NUEVO_GRUPO_REBATE,
    AGREGAR_NUEVO_GRUPO_REBATE,
    OBTENER_LISTA_GRUPOS_REBATE,
    ACTUALIZAR_OBTUVO_GRUPO_REBATE
} from "constants/SistemaTypes"

const INIT_STATE = {
    listaRebates             : [],
    listaGruposRebates       : [],
    modalNuevoRebate         : false,
    modalNuevoGrupoRebate    : false,
    cargandoNuevoRebate      : false,
    cargandoNuevoGrupoRebate : false,
    obtuvoRebate             : false,
    obtuvoGrupoRebate        : false,
    cargandoTablaRebate      : true,
    columnasTablaRebate      : []
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case MODAL_NUEVO_REBATE: 
            return {
                ...state,
                modalNuevoRebate : action.payload
            }
        case MODAL_NUEVO_GRUPO_REBATE:
            return {
                ...state,
                modalNuevoGrupoRebate : action.payload
            }
        case AGREGAR_NUEVO_REBATE:
            return {
                ...state,
                cargandoNuevoRebate : action.payload.cargandoNuevoRebate
            }
        case AGREGAR_NUEVO_GRUPO_REBATE:
            return {
                ...state,
                cargandoNuevoGrupoRebate : action.payload.cargandoNuevoGrupoRebate
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
        case ACTUALIZAR_OBTUVO_GRUPO_REBATE:
            return {
                ...state,
                obtuvoGrupoRebate : action.payload
            }
        case OBTENER_LISTA_GRUPOS_REBATE:
            return {
                ...state,
                listaGruposRebates : action.payload.datos,
                obtuvoGrupoRebate  : action.payload.obtuvoGrupoRebate,
            }
        default: 
            return state
    }
}



