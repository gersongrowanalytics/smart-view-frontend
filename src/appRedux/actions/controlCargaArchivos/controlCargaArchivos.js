import React from 'react'
import config from 'config'
import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {message} from "antd"
import {
    OBTENER_CONTROL_ARCHIVOS,
    OBTENER_COLUMNAS_CONTROL_ARCHIVOS
} from "constants/SistemaTypes";
import Moment from 'moment';

export const ObtenerArchivosSubidos = (fecha, tcaid) => async (dispatch, getState) => {
	await fetch(config.api+'mostrar/controlArchivos',
		{
			mode:'cors',
			method: 'POST',
			body: JSON.stringify({
                fecha : fecha,
                tcaid : tcaid
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
            if(data.respuesta == true){
                dispatch({
                    type: OBTENER_CONTROL_ARCHIVOS,
                    payload: data.datos
                })
            }else{
                message.error(data.mensaje) 
                dispatch({
                    type: OBTENER_CONTROL_ARCHIVOS,
                    payload: data.datos
                })
            }
		}
	}).catch((error)=> {
        console.log(error)
        message.error(error) 
		dispatch({
			type: OBTENER_CONTROL_ARCHIVOS,
			payload: []
		})
	});
}

export const armarColumnasTablaArchivosSubidosReducer = () => async (dispatch, getState) => {
    Moment.locale('es');

    const columnas = [
        {
            title: 'ID',
            dataIndex: 'carid',
            key: 'carid',
            width: 50,
        },
        {
            title: 'Tipo de Archivo',
            dataIndex: 'tcanombre',
            key: 'tcanombre',
            width: 100,

        },
        {
            title: 'Usuario',
            dataIndex: 'usuusuario',
            key: 'usuusuario',
            width: 100,

        },
        {
            title: 'Archivo',
            dataIndex: '',
            key: 'carnombrearchivo',
            width: 100,
            render: (data) =>
                <a href={data.carurl} download>
                   {data.carnombrearchivo} 
                </a>

        },
        // {
        //     title: 'Ubicación',
        //     width: 50,
        //     dataIndex: 'carubicacion',
        //     key: 'carubicacion',
        // },
        {
            title: 'Estado',
            dataIndex: '',
            key: 'carexito',
            width: 100,
            render: (data) =>
                data.carexito == 1
                ?<div>Cargado</div>
                :<div>Revisión</div>

        },
        {
            title: 'Fecha y Hora',
            dataIndex: '',
            key: 'created_at',
            width: 100,
            render: (data) =>
                <div>
                    {
                        Moment(data.created_at).format('D MMM Y')
                    }
                </div>
        },

        {
            title: 'Acción',
            dataIndex: '',
            key: 'accionTpu',
            width: 100,

        }
    ]

    dispatch({
        type: OBTENER_COLUMNAS_CONTROL_ARCHIVOS,
        payload : columnas
    })
}