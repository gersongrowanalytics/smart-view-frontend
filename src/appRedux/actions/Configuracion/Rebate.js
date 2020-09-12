import {message} from "antd"
import config from 'config'
import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {
    MODAL_NUEVO_REBATE,
    AGREGAR_NUEVO_REBATE,
    OBTUVO_LISTA_REBATE
} from "constants/SistemaTypes"

export const ModalNuevoRebateReducer = (estadoModal) => {
    return {
        type    : MODAL_NUEVO_REBATE,
        payload : estadoModal
    }
}

export const agregarNuevoRebateReducer = (fecha, tipoPromocion, porcentajeDesde, porcentajeHasta, porcentajeRebate) => async (dispatch, getState) => {

    // VALIDACION DE CAMPOS
    if(fecha === '' || fecha === undefined){
        message.error('Lo sentimos, es necesario seleccionar una fecha') 
    }else if(tipoPromocion === 0 || tipoPromocion === undefined || tipoPromocion === ''){
        message.error('Lo sentimos, es necesario seleccionar un tipo de promoción') 
    }else if(porcentajeDesde === 0 || porcentajeDesde === undefined || porcentajeDesde === ''){
        message.error('Lo sentimos, es necesario colocar un porcentaje desde') 
    }else if(porcentajeHasta === 0 || porcentajeHasta === undefined || porcentajeHasta === ''){
        message.error('Lo sentimos, es necesario colocar un porcentaje hasta') 
    }else if(porcentajeRebate === 0 || porcentajeRebate === undefined || porcentajeRebate === ''){
        message.error('Lo sentimos, es necesario colocar un porcentaje rebate') 
    }else{

        dispatch({
            type    : AGREGAR_NUEVO_REBATE,
            payload : {
                cargandoNuevoRebate : true
            }
        })

        await fetch(config.api+'configuracion/rebate/crearRebate',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({
                fecha            : fecha,
                tipoPromocion    : tipoPromocion,
                porcentajeDesde  : porcentajeDesde,
                porcentajeHasta  : porcentajeHasta,
                porcentajeRebate : porcentajeRebate
            }),
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json',
                'api_token': localStorage.getItem('usutoken')
            }
        }).then( async res => {
            await dispatch(estadoRequestReducer(res.status))
            return res.json()
        }).then(data => {
            dispatch({
                type    : AGREGAR_NUEVO_REBATE,
                payload : {
                    cargandoNuevoRebate : false
                }
            })
            const estadoRequest = getState().estadoRequest.init_request
            if(estadoRequest == true){
                if(data.respuesta == true){
                    message.success(data.mensaje)
                    dispatch(obtenerRebateReducer())
                }else{
                    message.error(data.mensaje)
                }
            }
        }).catch((error)=> {
            console.log(error)
            message.error('Lo sentimos, ocurrio un error al momento de guardar el nuevo rebate') 
            dispatch({
                type    : AGREGAR_NUEVO_REBATE,
                payload : {
                    cargandoNuevoRebate : false
                }
            })
        });
    }
    
    return {
        type : ''
    }
}

export const obtenerRebateReducer = () => async (dispatch, getState) => {

    await fetch(config.api+'configuracion/rebate/mostrarRebate',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({}),
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json',
                'api_token': localStorage.getItem('usutoken')
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
            // dispatch(armarColumnasTablaReducer())
            if(data.respuesta == true){
                dispatch({
                    type: OBTUVO_LISTA_REBATE,
                    payload: {
                        datos    : data.datos,
                        obtuvoRebate : true
                    }
                })
            }else{
                dispatch({
                    type: OBTUVO_LISTA_REBATE,
                    payload: {
                        datos    : data.datos,
                        obtuvoRebate : true
                    }
                })
            }
        }
    }).catch((error)=> {
        dispatch({
            type: OBTUVO_LISTA_REBATE,
            payload: {
                datos    : [],
                obtuvoRebate : true
            }
        })
    });
}