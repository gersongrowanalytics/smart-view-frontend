import {loginReducer} from "appRedux/actions/Auth";
import config from 'config'
import {message} from "antd";
import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {
    CAMBIAR_ESTADO_EDICION_PERFIL,
    CAMBIAR_VALOR_INPUT_FORMULARIO_PERFIL,
    CARGANDO_PERFIL
} from "constants/SistemaTypes"


export const CambiarEstadoEdicionPerfilReducer = (estado) => (dispatch) => {
    dispatch({
        type: CAMBIAR_ESTADO_EDICION_PERFIL,
        payload: estado
    })
}

export const CambiarValorInputReducer = (nombrePropiedad, valor) => (dispatch, getState) => {

    let datosFormulario = getState().perfil.datosFormulario

    datosFormulario[nombrePropiedad] = valor

    if(nombrePropiedad == "usucontrasena"){
        datosFormulario["editarCont"] = true
    }

    dispatch({
        type: CAMBIAR_VALOR_INPUT_FORMULARIO_PERFIL,
        payload: datosFormulario
    })

}

export const EditarPerfilReducer = (datosFormulario) => async (dispatch, getState) => {
    console.log(datosFormulario)

    dispatch({
        type: CARGANDO_PERFIL,
        payload: true
    })

    await fetch(config.api+'perfil/editar/editarPerfil',
      {
        mode:'cors',
        method: 'POST',
        body: JSON.stringify(datosFormulario),
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
                localStorage.setItem('usuario', datosFormulario.usuusuario)
                if(datosFormulario.editarCont == true){
                    localStorage.setItem('contrasena', datosFormulario.usucontrasena)
                }

                dispatch(loginReducer({
                    contrasena: localStorage.getItem('contrasena'),
                    usuario: localStorage.getItem('usuario')
                }))

                dispatch(ReiniciarDataPerfilReducer())

            }else{
                message.success(data.mensaje)
            }
        }else{
            message.error("Lo sentimos ocurrio un error al momento de editar el perfil")
            dispatch({
                type: CARGANDO_PERFIL,
                payload: false
            })
        }
    }).catch((error)=> {
        console.log(error)
        message.error(error)
        dispatch({
            type: CARGANDO_PERFIL,
            payload: false
        })
        dispatch({
            type: CAMBIAR_ESTADO_EDICION_PERFIL,
            payload: false
        })
    });

    dispatch({
        type: CARGANDO_PERFIL,
        payload: false
    })

    dispatch({
        type: CAMBIAR_ESTADO_EDICION_PERFIL,
        payload: false
    })
}

export const ReiniciarDataPerfilReducer = () => async (dispatch) => {
    dispatch({
        type: CAMBIAR_VALOR_INPUT_FORMULARIO_PERFIL,
        payload: {
            usuorganizacion     : "",
            perfechanacimiento  : "",
            editarCont          : false,
            usucontrasena       : "",
            usuusuario          : "",
            perdireccion        : "",
            usucorreo           : "",
            percelular          : ""
        }
    })
}

