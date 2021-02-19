import React from 'react'
import {message, InputNumber} from "antd"
import config from 'config'
import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {
    MODAL_NUEVO_REBATE,
    AGREGAR_NUEVO_REBATE,
    OBTUVO_LISTA_REBATE,
    ACTUALIZAR_COLUMNAS_TABLA_REBATE,
    ACTUALIZAR_OBTUVO_REBATE,
    ACTUALIZAR_CARGANDO_TABLA_REBATE,
    MODAL_NUEVO_GRUPO_REBATE,
    AGREGAR_NUEVO_GRUPO_REBATE,
    OBTENER_LISTA_GRUPOS_REBATE,
    ACTUALIZAR_OBTUVO_GRUPO_REBATE
} from "constants/SistemaTypes"

export const ModalNuevoRebateReducer = (estadoModal) => {
    return {
        type    : MODAL_NUEVO_REBATE,
        payload : estadoModal
    }
}

export const ModalNuevoGrupoRebateReducer = (estadoModal) => {
    return {
        type    : MODAL_NUEVO_GRUPO_REBATE,
        payload : estadoModal
    }
}

export const agregarNuevoRebateReducer = (
    fecha, 
    tipoPromocion, 
    porcentajeDesde, 
    porcentajeHasta, 
    porcentajeRebate, 
    categorias,
    grupoRebate
) => async (dispatch, getState) => {

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
    }else if(categorias === 0 || categorias === undefined || categorias === ""){
        message.error('Lo sentimos, es necesario seleccionar una categoria') 
    }else if(grupoRebate === 0 || grupoRebate === undefined || grupoRebate === ""){
        message.error('Lo sentimos, es necesario seleccionar un grupo rebate') 
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
                porcentajeRebate : porcentajeRebate,
                catsid           : categorias,
                tresid           : grupoRebate
            }),
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json',
                'api_token': localStorage.getItem('usutoken'),
                'api-token': localStorage.getItem('usutoken'),
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
                    dispatch(ActualiazrRebateReducer(data.fecid))
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

export const ActualiazrRebateReducer = (fecid) => async (dispatch, getState) => {
    await fetch(config.api+'configuracion/rebate/actualizar/rebate',
    {
        mode:'cors',
        method: 'POST',
        body: JSON.stringify({
            fecha : fecid
        }),
        headers: {
            'Accept' : 'application/json',
            'Content-type' : 'application/json',
            'api_token': localStorage.getItem('usutoken'),
            'api-token': localStorage.getItem('usutoken'),
        }
    }).then( async res => {
        await dispatch(estadoRequestReducer(res.status))
        return res.json()
    }).then(data => {
        const estadoRequest = getState().estadoRequest.init_request
        if(estadoRequest == true){
            if(data.respuesta == true){
                
            }else{
                message.error(data.mensaje)
            }
        }
    }).catch((error)=> {
        console.log(error)
        message.error('Lo sentimos, ocurrio un error al momento de actualirzar el rebate') 
    });
}

export const agregarNuevoGrupoRebateReducer = (nombreGrupoRebate) => async (dispatch, getState) => {

    // VALIDACION DE CAMPOS
    if(nombreGrupoRebate === '' || nombreGrupoRebate === undefined){
        message.error('Lo sentimos, es necesario un nombre de grupo') 
    }else{

        dispatch({
            type    : AGREGAR_NUEVO_GRUPO_REBATE,
            payload : {
                cargandoNuevoGrupoRebate : true
            }
        })

        await fetch(config.api+'configuracion/rebate/crear/GrupoRebate',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({
                "nombreGrupoRebate" : nombreGrupoRebate
            }),
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json',
                'api_token': localStorage.getItem('usutoken'),
                'api-token': localStorage.getItem('usutoken'),
            }
        }).then( async res => {
            await dispatch(estadoRequestReducer(res.status))
            return res.json()
        }).then(data => {
            dispatch({
                type    : AGREGAR_NUEVO_GRUPO_REBATE,
                payload : {
                    cargandoNuevoGrupoRebate : false
                }
            })
            const estadoRequest = getState().estadoRequest.init_request
            if(estadoRequest == true){
                if(data.respuesta == true){
                    message.success(data.mensaje)
                    dispatch(obtenerGrupoRebateReducer())
                }else{
                    message.error(data.mensaje)
                }
            }
        }).catch((error)=> {
            console.log(error)
            message.error('Lo sentimos, ocurrio un error al momento de guardar el nuevo rebate') 
            dispatch({
                type    : AGREGAR_NUEVO_GRUPO_REBATE,
                payload : {
                    cargandoNuevoGrupoRebate : false
                }
            })
        });
    }
}

export const obtenerRebateReducer = (fecha) => async (dispatch, getState) => {

    await dispatch({
        type    : ACTUALIZAR_OBTUVO_REBATE,
        payload : true
    })

    await fetch(config.api+'configuracion/rebate/mostrarRebate',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({
                "fecha" : fecha
            }),
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json',
                'api_token': localStorage.getItem('usutoken'),
                'api-token': localStorage.getItem('usutoken'),
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
                    type: OBTUVO_LISTA_REBATE,
                    payload: {
                        datos               : data.datos,
                        obtuvoRebate        : true,
                        cargandoTablaRebate : false
                    }
                })
                dispatch(armarColumnasTablaRebateReducer())
            }else{
                dispatch({
                    type: OBTUVO_LISTA_REBATE,
                    payload: {
                        datos               : data.datos,
                        obtuvoRebate        : true,
                        cargandoTablaRebate : false
                    }
                })
            }
        }
    }).catch((error)=> {
        dispatch({
            type: OBTUVO_LISTA_REBATE,
            payload: {
                datos               : [],
                obtuvoRebate        : true,
                cargandoTablaRebate : false
            }
        })
    });
}

export const obtenerGrupoRebateReducer = () => async (dispatch, getState) => {
    await dispatch({
        type    : ACTUALIZAR_OBTUVO_GRUPO_REBATE,
        payload : true
    })

    await fetch(config.api+'configuracion/rebate/mostrar/GrupoRebate',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({}),
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json',
                'api_token': localStorage.getItem('usutoken'),
                'api-token': localStorage.getItem('usutoken'),
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
                    type: OBTENER_LISTA_GRUPOS_REBATE,
                    payload: {
                        datos               : data.datos,
                        obtuvoGrupoRebate   : true
                    }
                })
            }else{
                dispatch({
                    type: OBTENER_LISTA_GRUPOS_REBATE,
                    payload: {
                        datos               : data.datos,
                        obtuvoGrupoRebate   : true
                    }
                })
            }
        }
    }).catch((error)=> {
        dispatch({
            type: OBTENER_LISTA_GRUPOS_REBATE,
            payload: {
                datos               : [],
                obtuvoGrupoRebate   : true
            }
        })
    });
}

export const armarColumnasTablaRebateReducer = () => async (dispatch) => {

    const columnas = [
        // {
        //     title: 'Año',
        //     dataIndex: 'fecano',
        //     key: 'fecano',
        //     // width: 150
        // },
        // {
        //     title: 'Fecha',
        //     dataIndex: 'fecmes',
        //     key: 'fecmes',
        //     // width: 150,
        // }, 
        {
            title: 'Tipo de Promoción',
            dataIndex: 'tprnombre',
            key: 'tprnombre',
            width: 100,
            // render: (data) => {
            //     return {
            //         children: <span>{data.tprnombre}</span>,
            //         props: {
            //             rowSpan : 3
            //         }
            //     }
            // }
        },
        {
            title: 'Grupos Rebate',
            dataIndex: '',
            key: 'trenombre',
            width: 100,
            render: (data) => {
                return (
                    data.tres.map((dat, posicion) => {
                        return(
                            <>
                                <span className="gx-link">{dat}</span>
                                <span> - </span>
                            </>
                        )
                    })
                )
            }
        }, 
        {
            title: 'Categorias',
            dataIndex: '',
            key: 'catnombre',
            width: 250,
            render: (data) => {
                return (
                    data.cats.map((dat, posicion) => {
                        return(
                            <>
                                <span className="gx-link">{dat}</span>
                                <span> - </span>
                            </>
                        )
                    })
                )
            }
        },
        {
            title: 'Desde',
            dataIndex: '',
            key: 'rtpporcentajedesde',
            // width: 150,
            render: (data) => 
                data.editar == true
                    ?<InputNumber 
                        className = "gx-mb-3 gx-w-100"
                        min       = {0}
                        max       = {100}
                        formatter = {value => `${value}%`}
                        parser    = {value => value.replace('%', '')}
                        value     = {data.rtpporcentajedesde}
                        onChange  = {(e) => {
                            data.rtpporcentajedesde = e
                            dispatch({type: "",payload: data})
                            dispatch(armarColumnasTablaRebateReducer())
                        }}
                    />
                    :data.rtpporcentajedesde+'%'
        }, 
        {
            title     : 'Hasta',
            dataIndex : '',
            key       : 'rtpporcentajehasta',
            // width     : 150,
            render    : (data) => 
                data.editar == true
                    ? <InputNumber 
                        className = "gx-mb-3 gx-w-100"
                        min       = {0}
                        max       = {100}
                        formatter = {value => `${value}%`}
                        parser    = {value => value.replace('%', '')}
                        value     = {data.rtpporcentajehasta}
                        onChange  = {(e) => {
                            data.rtpporcentajehasta = e
                            dispatch({type: "",payload: data})
                            dispatch(armarColumnasTablaRebateReducer())
                        }}
                    />
                    : data.rtpporcentajehasta+'%'
        },
        {
            title: 'Rebate',
            dataIndex: '',
            key: 'rtpporcentajerebate',
            // width: 150,
            render: (data) =>
                data.editar == true
                ?<InputNumber 
                    className = "gx-mb-3 gx-w-100"
                    min       = {0}
                    max       = {100}
                    formatter = {value => `${value}%`}
                    parser    = {value => value.replace('%', '')}
                    value     = {data.rtpporcentajerebate}
                    onChange  = {(e) => {
                        data.rtpporcentajerebate = e
                        dispatch({type: "",payload: data})
                        dispatch(armarColumnasTablaRebateReducer())
                    }}
                />
                : data.rtpporcentajerebate+'%'
        },
        {
            title: 'Acción',
            dataIndex: '',
            key: 'accionRebate',
            render: (data) => 
                data.editar == true
                ?<div>
                    <span 
                        className="gx-link gx-text-yellow"
                        style={{marginRight:'10px'}}
                        onClick = {() => {
                            dispatch(editarRebateReducer(data))
                        }}
                    >
                        Guardar
                    </span>

                    <span 
                        className="gx-link gx-text-red"
                        onClick = {
                        () => {
                            data.fecano              = data.dataGua.anio
                            data.fecmes              = data.dataGua.mes
                            data.trenombre           = data.dataGua.grupo
                            data.tprnombre           = data.dataGua.tprnom
                            data.rtpporcentajedesde  = data.dataGua.desde
                            data.rtpporcentajehasta  = data.dataGua.hasta
                            data.rtpporcentajerebate = data.dataGua.rebate
                            data.editar = false
                            dispatch({type: "",payload: data}) 
                            dispatch(armarColumnasTablaRebateReducer())
                        }
                        }
                    >
                        Cancelar
                    </span>

                </div>
                :<span 
                    className="gx-link" 
                    onClick={() => { 
                        data.dataGua = {
                            "anio"   : data.fecano,
                            "mes"    : data.fecmes,
                            "grupo"  : data.trenombre,
                            "tprnom" : data.tprnombre,
                            "desde"  : data.rtpporcentajedesde,
                            "hasta"  : data.rtpporcentajehasta,
                            "rebate" : data.rtpporcentajerebate
                        }
                        data.editar  = !data.editar
                        dispatch({type: "",payload: data}) 
                        dispatch(armarColumnasTablaRebateReducer())
                    }}
                >
                    Editar
                </span>
            
        }
    ]

    dispatch({
        type: ACTUALIZAR_COLUMNAS_TABLA_REBATE,
        payload : columnas
    })
}

export const editarRebateReducer = (nuevadata) => async (dispatch, getState ) => {
    
    dispatch({
        type    : ACTUALIZAR_CARGANDO_TABLA_REBATE,
        payload : true
    })

    await fetch(config.api+'configuracion/rebate/editar/Rebate',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify(nuevadata),
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json',
                'api_token': localStorage.getItem('usutoken'),
                'api-token': localStorage.getItem('usutoken'),
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
                message.success(data.mensaje)
                dispatch(obtenerRebateReducer())
            }else{
                message.error(data.mensaje)
                dispatch({
                    type    : ACTUALIZAR_CARGANDO_TABLA_REBATE,
                    payload : false
                })
            }
        }else{
            dispatch({
                type    : ACTUALIZAR_CARGANDO_TABLA_REBATE,
                payload : false
            })
        }
    }).catch((error)=> {
        message.error('Lo sentimos, ocurrio un error al momento de editar este rebate, intentelo de nuevo mas tarde o actualice la pagina') 
        dispatch({
            type    : ACTUALIZAR_CARGANDO_TABLA_REBATE,
            payload : false
        })
    });
}