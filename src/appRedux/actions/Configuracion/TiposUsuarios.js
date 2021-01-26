import React from 'react'
import {message, Input} from "antd"
import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {
    ACTUALIZAR_OBTUVO_TIPOS_USUARIOS,
    ACTUALIZAR_DATA_TIPOS_USUARIOS,
    ACTUALIZAR_COLUMNAS_TABLA_TIPOS_USUARIOS,
    ACTUALIZAR_CARGANDO_TABLA_TIPOS_USUARIOS,
    ACTUALIZAR_DATA_PERMISOS_TIPO_USUARIO,
    ACTUALIZAR_CARGANDO_PERMISOS_TIPO_USUARIO
} from "constants/SistemaTypes"
import config from 'config'
import {Link} from "react-router-dom"

export const ObtenerTiposUsuariosReducer = () => async (dispatch, getState) => {

    await dispatch({
        type    : ACTUALIZAR_OBTUVO_TIPOS_USUARIOS,
        payload : true
    })

    await fetch(config.api+'configuracion/usuarios/mostrar/TiposUsuarios',
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
                    type: ACTUALIZAR_DATA_TIPOS_USUARIOS,
                    payload: data.datos
                })
                dispatch(armarColumnasTablaTiposUsuariosReducer())
            }else{
                dispatch({
                    type: ACTUALIZAR_DATA_TIPOS_USUARIOS,
                    payload: data.datos
                })
            }
        }
    }).catch((error)=> {
        dispatch({
            type: ACTUALIZAR_DATA_TIPOS_USUARIOS,
            payload: []
        })
    });
}

export const armarColumnasTablaTiposUsuariosReducer = () => async (dispatch, getState) => {

    const columnas = [
        {
            title: 'ID',
            dataIndex: 'tpuid',
            key: 'tpuid',
            // width: 150
        },
        {
            title: 'Nombre',
            dataIndex: '',
            key: 'tpunombre',
            // width: 150,
            render: (data) =>
                data.editar == true
                ?<Input 
                    className = "gx-mb-3 gx-w-100"
                    value     = {data.tpunombre}
                    onChange  = {(e) => {
                        data.tpunombre = e.target.value
                        dispatch({type: "",payload: data})
                        dispatch(armarColumnasTablaTiposUsuariosReducer())
                    }}
                />
                : data.tpunombre
        },
        {
            title: 'Acción',
            dataIndex: '',
            key: 'accionTpu',
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
                        onClick = {() => {
                            data.tpunombre  = data.dataGua.tpunombre
                            data.editar     = false
                            dispatch({type: "",payload: data}) 
                            dispatch(armarColumnasTablaTiposUsuariosReducer())
                        }}
                    >
                        Cancelar
                    </span>

                </div>
                :<div>
                    <span 
                        className="gx-link" 
                        onClick={() => { 
                            data.dataGua = {
                                "tpunombre" : data.tpunombre
                            }
                            data.editar  = true
                            dispatch({type: "",payload: data}) 
                            dispatch(armarColumnasTablaTiposUsuariosReducer())
                        }}
                    >
                        Editar
                    </span>
                    {" "} 

                    <Link to="/sistema/configuracion/permisos" >
                        <span 
                            style={{color:'orange'}}
                            className="gx-link" 
                            onClick={async () => { 
                                await dispatch({
                                    type: ACTUALIZAR_DATA_PERMISOS_TIPO_USUARIO,
                                    payload : {
                                        tpuid : data.tpuid,
                                        obtuvoPermisosTipoUsuario : false,
                                        permisosTipoUsuario : [],
                                        nombreTipoUsuario   : '',
                                        nombreTipoUsuario   : data.tpunombre
                                    }
                                })
                                if(data.obtuvoPermisos == true){
                                    
                                    dispatch({
                                        type: ACTUALIZAR_DATA_PERMISOS_TIPO_USUARIO,
                                        payload : {
                                            tpuid                       : data.tpuid,
                                            obtuvoPermisosTipoUsuario   : true,
                                            permisosTipoUsuario         : data.permisos,
                                            nombreTipoUsuario           : data.tpunombre
                                        }
                                    })

                                }else{
                                    await dispatch(ObtenerPermisosTipoUsuarioReducer(data.tpuid, data.tpunombre))
                                    const {permisosTipoUsuarioSeleccionado} = getState().configuracionTiposUsuarios
                                    data.obtuvoPermisos = true
                                    data.permisos       = permisosTipoUsuarioSeleccionado
                                    dispatch({type: "",payload: data}) 
                                    dispatch(armarColumnasTablaTiposUsuariosReducer())
                                }
                            }}
                        >
                            Permisos
                        </span>
                    </Link>   
                </div>
            
        }
    ]

    dispatch({
        type: ACTUALIZAR_COLUMNAS_TABLA_TIPOS_USUARIOS,
        payload : columnas
    })
}

export const editarRebateReducer = (nuevadata) => async (dispatch, getState ) => {
    
    dispatch({
        type    : ACTUALIZAR_CARGANDO_TABLA_TIPOS_USUARIOS,
        payload : true
    })

    await fetch(config.api+'configuracion/editar/tiposUsuarios',
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
                dispatch(ObtenerTiposUsuariosReducer())
            }else{
                message.error(data.mensaje)
                dispatch({
                    type    : ACTUALIZAR_CARGANDO_TABLA_TIPOS_USUARIOS,
                    payload : false
                })
            }
        }else{
            dispatch({
                type    : ACTUALIZAR_CARGANDO_TABLA_TIPOS_USUARIOS,
                payload : false
            })
        }
    }).catch((error)=> {
        message.error('Lo sentimos, ocurrio un error al momento de editar este rebate, intentelo de nuevo mas tarde o actualice la pagina') 
        dispatch({
            type    : ACTUALIZAR_CARGANDO_TABLA_TIPOS_USUARIOS,
            payload : false
        })
    });
}

export const ObtenerPermisosTipoUsuarioReducer = (tpuid, tpunombre) => async (dispatch, getState) => {

    if(tpuid == null){
        tpuid = getState().configuracionTiposUsuarios.tpuidSeleccionado
    }

    if(tpunombre == null){
        tpunombre = getState().configuracionTiposUsuarios.nombreTipoUsuarioSeleccionado
    }

    await dispatch({
        type    : ACTUALIZAR_CARGANDO_PERMISOS_TIPO_USUARIO,
        payload : true
    })

    await fetch(config.api+'configuracion/usuarios/mostrar/permisos/tipoUsuario',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({
                "tpuid" : tpuid
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
                    type: ACTUALIZAR_DATA_PERMISOS_TIPO_USUARIO,
                    payload : {
                        tpuid                       : tpuid,
                        obtuvoPermisosTipoUsuario   : true,
                        permisosTipoUsuario         : data.datos,
                        nombreTipoUsuario           : tpunombre
                    }
                })
                
            }else{
                dispatch({
                    type: ACTUALIZAR_DATA_PERMISOS_TIPO_USUARIO,
                    payload : {
                        tpuid                       : tpuid,
                        obtuvoPermisosTipoUsuario   : true,
                        permisosTipoUsuario         : data.datos,
                        nombreTipoUsuario           : tpunombre
                    }
                })
            }
        }
    }).catch((error)=> {
        dispatch({
            type: ACTUALIZAR_DATA_PERMISOS_TIPO_USUARIO,
            payload : {
                tpuid                       : tpuid,
                obtuvoPermisosTipoUsuario   : true,
                permisosTipoUsuario         : [],
                nombreTipoUsuario           : tpunombre
            }
        })
    });
}

export const GuardarPermisosTipoUsuarioReducer = (tpuid, nuevadata) => async (dispatch, getState ) => {
    
    dispatch({
        type    : ACTUALIZAR_CARGANDO_PERMISOS_TIPO_USUARIO,
        payload : true
    })

    await fetch(config.api+'configuracion/usuarios/editar/permisos/tipoUsuario',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({
                tpuid : tpuid,
                data  : nuevadata
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
    .then(async data => {
        const estadoRequest = getState().estadoRequest.init_request
        if(estadoRequest == true){
            if(data.respuesta == true){
                message.success(data.mensaje)
                await dispatch(ObtenerTiposUsuariosReducer())
                await dispatch(ObtenerPermisosTipoUsuarioReducer(null, null))
            }else{
                message.error(data.mensaje)
                dispatch({
                    type    : ACTUALIZAR_CARGANDO_PERMISOS_TIPO_USUARIO,
                    payload : false
                })
            }
        }else{
            dispatch({
                type    : ACTUALIZAR_CARGANDO_PERMISOS_TIPO_USUARIO,
                payload : false
            })
        }
    }).catch((error)=> {
        message.error('Lo sentimos, ocurrio un error al momento de editar este rebate, intentelo de nuevo mas tarde o actualice la pagina') 
        dispatch({
            type    : ACTUALIZAR_CARGANDO_PERMISOS_TIPO_USUARIO,
            payload : false
        })
    });
}