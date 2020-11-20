import {
    OBTENER_USUARIOS_EXITO,
    OBTENER_USUARIOS_FAIL,
    ACTUALIZAR_COLUMNAS_TABLA_USUARIOS,
    ACTUALIZAR_LISTA_EJECUTIVOS,
    ACTUALIZAR_COLUMNAS_TABLA_EJECUTIVOS,
    CARGANDO_NUEVO_USUARIO
} from "constants/SistemaTypes";

const INIT_STATE = {
    listaUsuario    : [],
    listaEjecutivos : [],
    obtuvoUsuarios  : false,
    columnasTabla   : [],
    columnasTablaEj : [],
    mostrarMsjErr   : false,
    mostrarMsjExi   : false,
    msjErr          : '',
    msjExi          : '',
    cargandoCrearUsuario : false
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
        case ACTUALIZAR_LISTA_EJECUTIVOS: {
            return {
                ...state,
                listaEjecutivos : action.payload
            }
        }
        case ACTUALIZAR_COLUMNAS_TABLA_EJECUTIVOS: {
            return {
                ...state,
                columnasTablaEj : action.payload
            }
        }
        case CARGANDO_NUEVO_USUARIO: {
            return {
                ...state,
                cargandoCrearUsuario : action.payload
            }
        }
        default:
            return state;
    }
}
  