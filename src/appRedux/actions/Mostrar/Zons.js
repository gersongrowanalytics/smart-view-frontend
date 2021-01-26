import {
    ACTUALIZAR_ZONS,
    ACTUALIZAR_SELECCION_ZON
} from "constants/MostrarTypes";
import config from 'config'
import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {message} from "antd"

export const ObtenerZonsReducer = () => async (dispatch, getState) => {
	await fetch(config.api+'mostrar/zons',
		{
			mode:'cors',
			method: 'POST',
			body: JSON.stringify({}),
			headers: {
				'Accept' 	   : 'application/json',
				'Content-type' : 'application/json',
				'api_token'	   : localStorage.getItem('usutoken'),
				'api-token'	   : localStorage.getItem('usutoken'),
			}
		}
	)
	.then( async res => {
		await dispatch(estadoRequestReducer(res.status))
		return res.json()
	})
	.then(data => {
		const estadoRequest = getState().estadoRequest.init_request
		if(estadoRequest == true){
            if(data.respuesta == true){
                dispatch({
                    type: ACTUALIZAR_ZONS,
                    payload: data.datos
                })
            }else{
                message.error(data.mensaje) 
                dispatch({
                    type: ACTUALIZAR_ZONS,
                    payload: data.datos
                })
            }
		}
	}).catch((error)=> {
        console.log(error)
        message.error(error) 
		dispatch({
			type: ACTUALIZAR_ZONS,
			payload: []
		})
	});
}

export const SeleccionarZonReducer = (id, nombre) => {
    return {
        type : ACTUALIZAR_SELECCION_ZON,
        payload : {
            "id"     : id,
            "nombre" : nombre
        }
    }
}