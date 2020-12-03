import {message} from "antd"
import config from 'config'
import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {
    ACTUALIZAR_SUCSXZONA
} from "constants/MostrarTypes";

export const ObtenerSucursales = () => async (dispatch, getState) => {
	await fetch(config.api+'mostrar/sucs/xzona',
		{
			mode:'cors',
			method: 'POST',
			body: JSON.stringify({}),
			headers: {
				'Accept' 	   : 'application/json',
				'Content-type' : 'application/json',
				'api_token'	   : localStorage.getItem('usutoken')
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
                
                console.log(data.datos)
                dispatch({
                    type: ACTUALIZAR_SUCSXZONA,
                    payload: data.datos
                })
            }else{
                message.error(data.mensaje)
                dispatch({
                    type: ACTUALIZAR_SUCSXZONA,
                    payload: data.datos
                })
                
            }
		}
	}).catch((error)=> {
        console.log(error)
        message.error(error)
	});
}