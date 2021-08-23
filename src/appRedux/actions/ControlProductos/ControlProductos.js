import React from 'react'
import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {
    CARGANDO_TABLA_CONTROL_PRODUCTOS,
    OBTENER_PRODUCTOS_CONTROL_PRODUCTOS
} from "constants/SistemaTypes";
import config from 'config'
import {message} from "antd"

export const ObtenerProductosReducer = () => async (dispatch, getState) => {

    dispatch({
        type: CARGANDO_TABLA_CONTROL_PRODUCTOS,
        payload: true
    })

	await fetch(config.api+'control-promociones/mostrar-productos',
		{
			mode:'cors',
			method: 'POST',
			body: JSON.stringify({
            }),
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
            dispatch({
                type: OBTENER_PRODUCTOS_CONTROL_PRODUCTOS,
                payload: {
                    prosSinImagenes : data.prosSinImagenes,
                    prosConImagenes : data.prosConImagenes
                }
            })
		}
	}).catch((error)=> {
        console.log(error)
	});

    dispatch({
        type: CARGANDO_TABLA_CONTROL_PRODUCTOS,
        payload: false
    })

}

export const AsignarImagenProductoReducer = (sku, imagen) => async (dispatch, getState) => {

	await fetch(config.api+'control-promociones/asignar-imagen-producto',
		{
			mode:'cors',
			method: 'POST',
			body: JSON.stringify({
				"req_prosku" : sku,
				"req_imagen" : imagen,
            }),
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
            
		}
	}).catch((error)=> {
        console.log(error)
	});

    return true

}