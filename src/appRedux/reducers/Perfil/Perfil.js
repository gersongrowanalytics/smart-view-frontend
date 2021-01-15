import {
    CAMBIAR_ESTADO_EDICION_PERFIL,
    CAMBIAR_VALOR_INPUT_FORMULARIO_PERFIL,
    CARGANDO_PERFIL,
} from "constants/SistemaTypes";

const INIT_STATE = {
    editarPerfil : false,
    enviandoDatos : false,
    datosFormulario : {
        usuorganizacion     : "",
        perfechanacimiento  : "",
        editarCont          : false,
        usucontrasena       : "",
        usuusuario          : "",
        perdireccion        : "",
        usucorreo           : "",
        percelular          : ""
    }
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CAMBIAR_ESTADO_EDICION_PERFIL: {
            return {
                ...state,
                editarPerfil : action.payload
            }
        }
        case CAMBIAR_VALOR_INPUT_FORMULARIO_PERFIL: {
            return {
                ...state,
                datosFormulario : action.payload
            }
        }
        case CARGANDO_PERFIL: {
            return {
                ...state,
                enviandoDatos : action.payload
            }
        }

        
    default:
        return state;
    }
}