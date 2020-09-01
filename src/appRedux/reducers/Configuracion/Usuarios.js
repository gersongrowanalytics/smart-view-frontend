import {
    OBTENER_USUARIOS_EXITO,
    OBTENER_USUARIOS_FAIL,
    ACTUALIZAR_COLUMNAS_TABLA_USUARIOS,
    EDITAR_USUARIO_EXITO,
    EDITAR_USUARIO_FAIL
} from "constants/SistemaTypes";

const INIT_STATE = {
    listaUsuario   : [],
    obtuvoUsuarios : false,
    columnasTabla  : [],
    mostrarMsjErr  : false,
    mostrarMsjExi  : false,
    msjErr         : '',
    msjExi         : ''
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case OBTENER_USUARIOS_EXITO: {
            return {
                ...state,
                listaUsuario    : action.payload,
                obtuvoUsuarios  : true,
            }
        }
        case OBTENER_USUARIOS_FAIL: {
            return {
                ...state,
                listaUsuario    : action.payload,
                obtuvoUsuarios  : true
            }
        }
        case ACTUALIZAR_COLUMNAS_TABLA_USUARIOS: {
            return {
                ...state,
                columnasTabla : action.payload
            }
        }
        default:
            return state;
    }
}
  