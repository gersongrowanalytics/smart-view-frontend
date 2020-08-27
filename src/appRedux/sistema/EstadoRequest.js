import {useDispatch, useSelector} from "react-redux";
import config from 'config'

// constantes -> LO CONSUME CUALQUIER COMPONENTE
const dataInicial = {
    respuesta : true,
    estado    : 0 
}
// types
const ESTADO_REQUEST  = 'ESTADO_REQUEST'

// REDUCER -> ENVIAR LA DATA DE FETCH A UNA CONSTANTE O ESTADO
export default function estadoRequestReducer( state = dataInicial, action ){
    switch(action.type){
        case ESTADO_REQUEST:
            return {...state, respuesta: action.payload}
        default:
            return state
    }
}

// ACCIONES -> FETCH, AXIOS (CONSUME APIS) Y CUALQUIER MANIPULACION DE LA DATA  
export const estadoRequestAccion = () => async (dispatch, getState) => {
    try{
        console.log('EJECUTNADO ESTADO REQUEST')
    }catch (error) {
        console.log(error)
    }
}