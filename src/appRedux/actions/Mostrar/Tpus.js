import {
    ACTUALIZAR_TPUS,
    ACTUALIZAR_SELECCION_TPU
} from "constants/MostrarTypes";
import config from 'config'
import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {message} from "antd"

export const ObtenerTpusReducer = () => async (dispatch, getState) => {
	await fetch(config.api+'mostrar/tpus',
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
                    type: ACTUALIZAR_TPUS,
                    payload: data.datos
                })
            }else{
                message.error(data.mensaje) 
                dispatch({
                    type: ACTUALIZAR_TPUS,
                    payload: data.datos
                })
            }
		}
	}).catch((error)=> {
        console.log(error)
        message.error(error) 
		dispatch({
			type: ACTUALIZAR_TPUS,
			payload: []
		})
	});
}

export const SeleccionarTpuReducer = (id, nombre) => {
    return {
        type : ACTUALIZAR_SELECCION_TPU,
        payload : {
            "id"    : id,
            "nombre": nombre
        }
    }
}