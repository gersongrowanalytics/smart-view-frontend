import React from 'react'
import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {GuardarImagenPromocionListaReducer} from 'appRedux/actions/Promociones'
import {
    OBTENER_CONTROL_PROMOCIONES,
    OBTENER_COLUMNAS_CONTROL_PROMOCIONES,
    CARGANDO_TABLA_CONTROL_PROMOCIONES
} from "constants/SistemaTypes";
import config from 'config'
import {message} from "antd"
import FileImgProducto from 'components/Sistema/actions/controlPromociones/fileImgProducto'
import FileImgBonificado from 'components/Sistema/actions/controlPromociones/fileImgBonificado'

export const ObtenerListaPromociones = (fecha, sucnombre, catsid, codigoPromocion, canid) => async (dispatch, getState) => {

    dispatch({
        type: CARGANDO_TABLA_CONTROL_PROMOCIONES,
        payload: true
    })

	await fetch(config.api+'control/promociones/lista',
		{
			mode:'cors',
			method: 'POST',
			body: JSON.stringify({
                fecha           : fecha,
                codigoPromocion : codigoPromocion,
                sucnombre       : sucnombre,
                catsid          : catsid,
                canid           : canid
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
                    type: OBTENER_COLUMNAS_CONTROL_PROMOCIONES,
                    payload : []
                })
                dispatch(ArmarColumnasTablaPromocionesReducer())
                dispatch({
                    type: OBTENER_CONTROL_PROMOCIONES,
                    payload: data.datos
                })
            }else{
                message.error(data.mensaje) 
                dispatch({
                    type: OBTENER_CONTROL_PROMOCIONES,
                    payload: data.datos
                })
            }
		}
	}).catch((error)=> {
        console.log(error)
        message.error(error) 
		dispatch({
			type: OBTENER_CONTROL_PROMOCIONES,
			payload: []
		})
	});
}

export const ArmarColumnasTablaPromocionesReducer = () => async (dispatch, getState) => {

    const columnas = [
        {
            title: 'ID',
            dataIndex: 'carid',
            key: 'carid',
            width: 50,
        },
        {
            title: 'Categoria',
            dataIndex: 'catnombre',
            key: 'catnombre',
            width: 100,
        },
        {
            title: 'Sucursal',
            dataIndex: 'sucnombre',
            key: 'sucnombre',
            width: 100,
        },
        {
            title: 'Canal',
            dataIndex: 'cannombre',
            key: 'cannombre',
            width: 100,
        },
        {
            title: 'Promoción Codigo',
            dataIndex: 'prmcodigo',
            key: 'prmcodigo',
            width: 100,
        },
        {
            title: 'Imagen Producto',
            dataIndex: '',
            key: 'prpimagen',
            width: 100,
            render: (data) =>

            <FileImgProducto 
                data = {data}
            />
            
        },
        {
            title: 'Imagen Bonificado',
            dataIndex: '',
            key: 'prbimagen',
            width: 100,
            render: (data) =>
                <FileImgBonificado
                    data = {data}
                />
        },

        {
            title: 'Acción',
            dataIndex: '',
            key: 'prbimagen',
            width: 100,
            render: (data) => 
            data.editar == true 
            ?<div>
                <span 
                className="gx-link gx-text-yellow"
                style={{marginRight:'10px'}}
                onClick = {
                    async () => 
                    {
                        var result = await dispatch(GuardarImagenPromocionListaReducer(data.prpid, data.prbid, data.prpimageneditar, data.prbimageneditar))
                        data.editar = false
                        data.prbimagen = result.nuevImgBoni
                        data.prpimagen = result.nuevaImgPro
                        dispatch({type: "",payload: data}) 
                        dispatch(ArmarColumnasTablaPromocionesReducer())
                    }
                }
                >
                Guardar
                </span>
                <span 
                className="gx-link gx-text-red"
                onClick = {
                    () => {
                        data.editar = false
                        dispatch({type: "",payload: data}) 
                        dispatch(ArmarColumnasTablaPromocionesReducer())
                    }
                }
                >
                Cancelar
                </span>
            </div>
            :<span 
                className="gx-link" 
                onClick={() => { 
                data.editar = true
                dispatch({type: "",payload: data}) 
                dispatch(ArmarColumnasTablaPromocionesReducer())
                }}
            >
                Editar
            </span>
        },
        
    ]

    dispatch({
        type: OBTENER_COLUMNAS_CONTROL_PROMOCIONES,
        payload : columnas
    })
}