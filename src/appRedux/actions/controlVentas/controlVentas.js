import {
    OBTENER_ESTADISTICA_XZONA,
    OBTENER_ESTADISTICA_SELECCIONADA,
    OBTENER_REGISTRO_DATA_GRAFICO,
    OBTENER_FIL_CONTROLVENTAS,
    CAMBIAR_SELECCION_CATEOGIRAS_CONTROLVENTAS,
    CAMBIAR_SELECCION_TPR_CONTROLVENTAS,
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

export const SeleccionarTprReducer = (tprid) => async (dispatch) => {
    dispatch({
        type: CAMBIAR_SELECCION_TPR_CONTROLVENTAS,
        payload: tprid
    })
}

export const SeleccionarTodasCategoriasReducer = (todasCategorias) => async (dispatch) => {
    dispatch({
        type: CAMBIAR_SELECCION_CATEOGIRAS_CONTROLVENTAS,
        payload: todasCategorias
    })
}

export const FiltrarPorReducer = (filRegion, filZona, filGrupo, filCategoria) => (dispatch) => {

    dispatch({
        type: OBTENER_FIL_CONTROLVENTAS,
        payload: {
            filRegion : filRegion,
            filZona : filZona,
            filGrupo : filGrupo,
            filCategoria : filCategoria,
        }
    })
}

export const ObtenerEstadisticaXVentasReducer = (tprid, anios, meses, filRegion, regiones, filZona, zonas, filGrupo, grupos, filCategoria, todasCategorias, categorias) => async (dispatch, getState) => {

    let encontroGrafico = false

    const registroDataGraficos = getState().controlVentas.registroDataGraficos

    await registroDataGraficos.map(async (data, posicion) => {
        if(data.tprid == tprid){
            if(anios.length === data.anios.length && await anios.every(function(v,i) { return v === data.anios[i]  } )){
                if(meses.length === data.meses.length && await meses.every(function(v,i) { return v === data.meses[i]  } )){
                    if(data.filRegion == filRegion){
                        if(regiones.length === data.regiones.length && await regiones.every(function(v,i) { return v === data.regiones[i]  } )){
                            if(data.filZona == filZona){
                                if(zonas.length === data.zonas.length && await zonas.every(function(v,i) { return v === data.zonas[i]  } )){
                                    if(data.filGrupo == filGrupo){
                                        if(grupos.length === data.grupos.length && await grupos.every(function(v,i) { return v === data.grupos[i]  } )){
                                            if(data.filCategoria == filCategoria){
                                                if(data.todasCategorias == todasCategorias){
                                                    if(categorias.length === data.categorias.length && await categorias.every(function(v,i) { return v === data.categorias[i]  } )){
                                                        await dispatch({
                                                            type: OBTENER_ESTADISTICA_SELECCIONADA,
                                                            payload: data.estadistica
                                                        })

                                                        encontroGrafico = true
                                                        return encontroGrafico
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }   
            }
        }
    })

    if(encontroGrafico == false){
        dispatch(ObtenerEstadisticaXVentas(tprid, anios, meses, filRegion, regiones, filZona, zonas, filGrupo, grupos, filCategoria, todasCategorias, categorias))
    }


}

export const ObtenerEstadisticaXVentas = (tprid, anios, meses, filRegion, regiones, filZona, zonas, filGrupo, grupos, filCategoria, todasCategorias, categorias) => async (dispatch, getState) => {
    
    let registroDataGraficos = getState().controlVentas.registroDataGraficos

    let nuevaEstadistica = {
        tprid     : tprid,
        anios     : anios,
        meses     : meses,
        filRegion : filRegion,
        regiones  : regiones,
        filZona   : filZona,
        zonas     : zonas,
        filGrupo  : filGrupo,
        grupos    : grupos,
        filCategoria : filCategoria,
        todasCategorias : todasCategorias,
        categorias  : categorias,
        estadistica : {}
    }

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

        "dataProvider": [],
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
        "categoryField": "titulo",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha": 0,
            "tickLength": 0
        },
        "export": {
            "enabled": false
        }
    };

    await fetch(config.api+'controlVentas/estadistica/xgrafico',
		{
			mode:'cors',
			method: 'POST',
			body: JSON.stringify({
                tprid        : tprid,
                anios        : anios,
                meses        : meses,
                filRegion    : filRegion,
                regiones     : regiones,
                filZona      : filZona,
                zonas        : zonas,
                filGrupo     : filGrupo,
                grupos       : grupos,
                filCategoria : filCategoria,
                todasCategorias : todasCategorias,
                categorias  : categorias,
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
                nuevaEstadistica['estadistica'] = dataEstadistica
                registroDataGraficos.push(nuevaEstadistica)

                dispatch({
                    type: OBTENER_ESTADISTICA_SELECCIONADA,
                    payload: dataEstadistica
                })

                dispatch({
                    type: OBTENER_REGISTRO_DATA_GRAFICO,
                    payload: registroDataGraficos
                })

            }else{
                message.error(data.mensaje) 
                dispatch({
                    type: OBTENER_ESTADISTICA_SELECCIONADA,
                    payload: dataEstadistica
                })
            }
		}
	}).catch((error)=> {
        console.log(error)
        message.error(error) 
		dispatch({
			type: OBTENER_ESTADISTICA_SELECCIONADA,
			payload: {}
		})
	});



}