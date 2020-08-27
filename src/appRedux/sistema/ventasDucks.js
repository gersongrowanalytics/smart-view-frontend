import axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import config from 'config'

// constantes -> LO CONSUME CUALQUIER COMPONENTE
const dataInicial = {
    array               : [],
    sucursalesUsuario   : []
}

// types
const OBTENER_VENTAS_EXITO      = 'OBTENER_VENTAS_EXITO'
const OBTENER_SUCURSALES_EXITO  = 'OBTENER_SUCURSALES_EXITO'

// REDUCER -> ENVIAR LA DATA DE FETCH A UNA CONSTANTE O ESTADO
export default function ventasReducer( state = dataInicial, action ){
    switch(action.type){
        case OBTENER_VENTAS_EXITO:
            return {...state, array: action.payload}
        case OBTENER_SUCURSALES_EXITO:
            return {...state, sucursalesUsuario: action.payload}
        default:
            return state
    }
}


// ACCIONES -> FETCH, AXIOS (CONSUME APIS) Y CUALQUIER MANIPULACION DE LA DATA  
export const obtenerVentasAccion = () => async (dispatch, getState) => {
    try{
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        dispatch({
            type : OBTENER_VENTAS_EXITO,
            payload: res.data.results
        })
    }catch (error) {
        console.log(error)
    }
}

export const obtenerSucursales = () => async (dispatch, getState) => {
    try{
        await fetch(config.api+'usuario/mostrar/sucursales',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({}),
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json',
                'api_token': localStorage.getItem('usutoken')
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.respuesta == true){
                // await useDispatch(guardarVentasTpr(data.datos))
                this.setState({
                    ventas : useSelector(({auth}) => auth)
                })

                dispatch({
                    type : OBTENER_VENTAS_EXITO,
                    payload: data.data.results
                })
            }else{
                
            }
        }).catch((error)=> {

        });
        
    }catch (error) {
        console.log(error)
    }
}
