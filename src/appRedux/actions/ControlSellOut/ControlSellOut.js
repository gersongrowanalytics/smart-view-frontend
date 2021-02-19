import {
    OBTENER_NUMEROS_MES,
    OBTENER_ANIO_SELECCIONADO,
    OBTENER_MES_SELECCIONADO,
    OBTENER_TODO_MES,
    CAPTURAR_MENSAJE_CONTROLSELLOUT,
    DESCARGAR_SELLOUT_MES_ACTUAL
} from "constants/SistemaTypes"
import { estadoRequestConsecuenciaReducer } from "appRedux/actions/EstadoRequest"
import config from 'config'
import {message} from "antd"

export const ObtenerNumerosMesReducer = (anio, mes) => async (dispatch, getState) => {

    var meses = getState().controlSellOut.meses

    var diasMes = new Date(anio, mes, 0).getDate();
    var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    var numerosMes = [];

    var diaActual = (new Date()).getDate();
    var anioActual = (new Date()).getFullYear();
    var mesActual = (new Date()).getMonth()+1;

    let esDiaActual = false;


    for (var dia = 1; dia <= diasMes; dia++) {
        // Ojo, hay que restarle 1 para obtener el mes correcto
        if(diaActual == dia && anioActual == anio && mesActual == mes){
            esDiaActual = true
        }else{
            esDiaActual = false
        }

        var indice = new Date(anio, mes - 1, dia).getDay();
        numerosMes.push({
            numero : dia, 
            dia: diasSemana[indice], 
            diaActual : esDiaActual, 
            completado: false,
            cargando : false
        })
        // console.log(`El día número ${dia} del mes ${mes} del año ${anio} es ${diasSemana[indice]}`);
    }

    let agregarNuevo = true

    meses.map((mesSe, posicion) => {
        if(mesSe.anio == anio && mesSe.mes == mes ){
            if(mesSe.dias.length == 0){
                meses[posicion]['dias'] = numerosMes
            }
            meses[posicion]['seleccionado'] = true
            agregarNuevo = false
        }else{
            meses[posicion]['seleccionado'] = false
        }
        
        if(agregarNuevo == true){
            if(posicion+1 == meses.length){
                meses.push({
                    "seleccionado" : true,
                    "anio" : anio,
                    "mes"  : mes,
                    "dias" : numerosMes,
                })
            }
        }
    })

    dispatch({
        type: OBTENER_NUMEROS_MES,
        payload: meses
    })

}

export const ObtenerMesSeleccionadoReducer = (mes) => (dispatch) => {
    dispatch ({
        type: OBTENER_MES_SELECCIONADO,
        payload: mes
    })
}

export const ObtenerAnioSeleccionadoReducer = (anio) => (dispatch) => {
    dispatch ({
        type: OBTENER_ANIO_SELECCIONADO,
        payload: anio
    })
}

export const ObtenerSellOutDiaReducer = (anio, mes, dia, conMensaje) => async (dispatch, getState) => {

    var meses = getState().controlSellOut.meses
    var mensajes = getState().controlSellOut.mensajes

    let posicionMese = 0;
    let posicionDia = 0;
    let nombreDia = ""

    await meses.map((data, posicionMeses) => {
        if(data.anio == anio && data.mes == mes){
            data.dias.map((datDia, posicionDias) => {
                if(datDia.numero == dia){
                    nombreDia = datDia.dia
                    meses[posicionMeses]['dias'][posicionDias]['cargando'] = true
                    posicionMese = posicionMeses
                    posicionDia = posicionDias
                }
            })
        }
    })

    await dispatch({
        type: OBTENER_NUMEROS_MES,
        payload: meses
    })


    await fetch(config.api+'obtenerSellOutEspecificoWeb/'+anio+'/'+mes+'/'+dia,
		{
			mode:'cors',
			method: 'GET',
			headers: {
				'Accept' 	   : 'application/json',
				'Content-type' : 'application/json',
				'api_token'	   : localStorage.getItem('usutoken'),
				'api-token'	   : localStorage.getItem('usutoken'),
			}
		}
	)
	.then( async res => {
		await dispatch(estadoRequestConsecuenciaReducer(res.status, ()=>{
            
        }))
		return res.json()
	})
	.then(data => {
		const estadoRequest = getState().estadoRequest.init_request
		if(estadoRequest == true){
            if(data.respuesta == true){
                if(conMensaje == true){
                    message.success(data.mensaje)
                    mensajes.push({
                        "tipo"        : "success",
                        "message"     : "Carga Correcta",
                        "description" : "El día "+nombreDia+"("+dia+") se cargo correctamente",
                    })
                }

                meses[posicionMese]['dias'][posicionDia]['completado'] = true
                meses[posicionMese]['dias'][posicionDia]['error'] = false

            }else{
                if(conMensaje == true){
                    message.error(data.mensaje)
                    mensajes.push({
                        "tipo"        : "error",
                        "message"     : "Carga Incorrecta",
                        "description" : "El día "+nombreDia+"("+dia+") no se pudo cargar",
                    })
                }
                meses[posicionMese]['dias'][posicionDia]['error'] = true
                meses[posicionMese]['dias'][posicionDia]['completado'] = false
            }
		}else{
            meses[posicionMese]['dias'][posicionDia]['error'] = true
            meses[posicionMese]['dias'][posicionDia]['completado'] = false

            if(conMensaje == true){
                message.error("Lo sentimos, no se pudo cargar el Sell Out de este día porfavor vuelva a intentar")
                mensajes.push({
                    "tipo"        : "error",
                    "message"     : "Carga Incorrecta",
                    "description" : "El día "+nombreDia+"("+dia+") no se pudo cargar",
                })
            }
        }

	}).catch((error)=> {
        meses[posicionMese]['dias'][posicionDia]['error'] = true
        meses[posicionMese]['dias'][posicionDia]['completado'] = false
        console.log(error)
        if(conMensaje == true){
            message.error(error)
            mensajes.push({
                "tipo"        : "error",
                "message"     : "Carga Incorrecta",
                "description" : "El día "+nombreDia+"("+dia+") no se pudo cargar",
            })
        }
    });

    meses[posicionMese]['dias'][posicionDia]['cargando'] = false
    
    await dispatch({
        type: OBTENER_NUMEROS_MES,
        payload: meses
    })

    await dispatch({
        type: CAPTURAR_MENSAJE_CONTROLSELLOUT,
        payload: mensajes
    })

    return true
}

export const ObtenerSellOutMensualReducer = (anio, mes) => async (dispatch, getState) => {

    await dispatch({
        type: OBTENER_TODO_MES,
        payload: true
    })

    var meses = getState().controlSellOut.meses
    var mensajes = getState().controlSellOut.mensajes

    await meses.map(async (data) => {
        if(data.anio == anio && data.mes == mes){
            await data.dias.map(async (dia) => {
                await dispatch(ObtenerSellOutDiaReducer(anio, mes, dia.numero, false))
            })
        }
    })

    mensajes.push({
        "tipo"        : "success",
        "message"     : "Carga Correcta",
        "description" : "El mes: "+mes+" del año:"+anio+" se cargo correctamente!",
    })

    await dispatch({
        type: CAPTURAR_MENSAJE_CONTROLSELLOUT,
        payload: mensajes
    })

    await dispatch({
        type: OBTENER_TODO_MES,
        payload: false
    })
}

export const DescargarMesActualReducer = () => async (dispatch, getState) => {

    await dispatch({
        type: DESCARGAR_SELLOUT_MES_ACTUAL,
        payload: {
            cargandoDescargaMesAcutal : true,
            dataMesActualExcel : [],
        }
    })

    await fetch(config.api+'obtenerSellOutExcelMesAcutal',
		{
			mode:'cors',
			method: 'POST',
			headers: {
				'Accept' 	   : 'application/json',
				'Content-type' : 'application/json',
				'api_token'	   : localStorage.getItem('usutoken'),
				'api-token'	   : localStorage.getItem('usutoken'),
			}
		}
	)
	.then( async res => {
		await dispatch(estadoRequestConsecuenciaReducer(res.status, ()=>{
            
        }))
		return res.json()
	})
	.then(async data =>  {

		const estadoRequest = getState().estadoRequest.init_request

		if(estadoRequest == true){
            if(data.respuesta == true){
                
                await dispatch({
                    type: DESCARGAR_SELLOUT_MES_ACTUAL,
                    payload: {
                        cargandoDescargaMesAcutal : false,
                        dataMesActualExcel : data.datos,
                    }
                })

            }else{
                message.error(data.mensaje)
                await dispatch({
                    type: DESCARGAR_SELLOUT_MES_ACTUAL,
                    payload: {
                        cargandoDescargaMesAcutal : false,
                        dataMesActualExcel : [],
                    }
                })
            }
		}else{
            await dispatch({
                type: DESCARGAR_SELLOUT_MES_ACTUAL,
                payload: {
                    cargandoDescargaMesAcutal : false,
                    dataMesActualExcel : [],
                }
            })
            message.error("Lo sentimos, no se pudo cargar el Sell Out del mes especifico, vuelva a intentarlo", 5)
        }

	}).catch((error)=> {
        message.error("Error en el servidor")
        console.log(error)
        dispatch({
            type: DESCARGAR_SELLOUT_MES_ACTUAL,
            payload: {
                cargandoDescargaMesAcutal : false,
                dataMesActualExcel : [],
            }
        })
    });



}