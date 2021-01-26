import {
    OBTENER_ESTADISTICA_XZONA
} from "constants/SistemaTypes";
import config from 'config'
import {message} from "antd"
import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"

export const ObtenerEstadisticaXZona = () => async (dispatch, getState) => {

    let dataEstadistica = {
        "type": "serial",
        "addClassNames": true,
        "theme": "light",
        "autoMargins": false,
        "marginLeft": 80,
        "marginRight": 8,
        "marginTop": 10,
        "marginBottom": 26,
        "balloon": {
            "adjustBorderColor": false,
            "horizontalPadding": 10,
            "verticalPadding": 8,
            "color": "#ffffff"
        },

        "dataProvider": [
            {zona: "zona", real: "20", objetivo: "30"}
        ],
        "valueAxes": [{
            "axisAlpha": 0,
            "position": "left"
        }],
        "startDuration": 1,
        "graphs": [{
            "alphaField": "alpha",
            "balloonText": "<span style='font-size:12px;'>REAL:<br/>[[value]]</span>",
            "fillAlphas": 1,
            "title": "REAL",
            "type": "column",
            "valueField": "real",
            "dashLengthField": "dashLengthColumn"
        }, {
            "id": "graph2",
            "balloonText": "<span style='font-size:12px;'>OBJETIVO: <br/>[[value]]</span>",
            "bullet": "round",
            "lineThickness": 3,
            "bulletSize": 7,
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "useLineColorForBulletBorder": true,
            "bulletBorderThickness": 3,
            "fillAlphas": 0,
            "lineAlpha": 1,
            "title": "OBJETIVO",
            "valueField": "objetivo",
            "dashLengthField": "dashLengthLine"
        }],
        "categoryField": "zona",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha": 0,
            "tickLength": 0
        },
        "export": {
            "enabled": false
        }
    };


	await fetch(config.api+'controlVentas/estadistica/xzona',
		{
			mode:'cors',
			method: 'POST',
			body: JSON.stringify({
                // fecha : fecha,
                // tcaid : tcaid
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

                dataEstadistica['dataProvider'] = data.datos

                dispatch({
                    type: OBTENER_ESTADISTICA_XZONA,
                    payload: dataEstadistica
                })
            }else{
                message.error(data.mensaje) 
                dispatch({
                    type: OBTENER_ESTADISTICA_XZONA,
                    payload: dataEstadistica
                })
            }
		}
	}).catch((error)=> {
        console.log(error)
        message.error(error) 
		dispatch({
			type: OBTENER_ESTADISTICA_XZONA,
			payload: {}
		})
	});
}