import {
    MODAL_NUEVO_REBATE,
    AGREGAR_NUEVO_REBATE,
    OBTUVO_LISTA_REBATE
} from "constants/SistemaTypes"

const INIT_STATE = {
    listaRebates        : [],
    modalNuevoRebate    : false,
    cargandoNuevoRebate : false,
    obtuvoRebate        : false
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
                listaRebates : action.payload.datos,
                obtuvoRebate : action.payload.obtuvoRebate
            }
        default: 
            return state
    }
}


