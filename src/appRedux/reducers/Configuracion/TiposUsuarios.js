import {
    ACTUALIZAR_OBTUVO_TIPOS_USUARIOS,
    ACTUALIZAR_DATA_TIPOS_USUARIOS,
    ACTUALIZAR_COLUMNAS_TABLA_TIPOS_USUARIOS,
    ACTUALIZAR_CARGANDO_TABLA_TIPOS_USUARIOS,
    ACTUALIZAR_DATA_PERMISOS_TIPO_USUARIO,
    ACTUALIZAR_CARGANDO_PERMISOS_TIPO_USUARIO
} from "constants/SistemaTypes"

const INIT_STATE = {
    obtuvoTiposUsuarios         : false,
    dataTiposUsuarios           : [],
    columnasTablaTiposUsuarios  : [],
    cargandoTablaTiposUsuarios  : true,
    tpuidSeleccionado           : 0,
    obtuvoPermisosTipoUsuarioSeleccionado   : false,
    permisosTipoUsuarioSeleccionado : [],
    cargandoPermisosTipoUsuarioSeleccionado : false,
    nombreTipoUsuarioSeleccionado : ''
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case ACTUALIZAR_OBTUVO_TIPOS_USUARIOS: 
            return {
                ...state,
                obtuvoTiposUsuarios : action.payload
            }
        case ACTUALIZAR_DATA_TIPOS_USUARIOS: 
            return {
                ...state,
                dataTiposUsuarios           : action.payload,
                obtuvoTiposUsuarios         : true,
                cargandoTablaTiposUsuarios  : false
            }
        case ACTUALIZAR_COLUMNAS_TABLA_TIPOS_USUARIOS:
            return {
                ...state,
                columnasTablaTiposUsuarios : action.payload
            }
        case ACTUALIZAR_CARGANDO_TABLA_TIPOS_USUARIOS:
            return {
                ...state,
                cargandoTablaTiposUsuarios : action.payload
            }
        case ACTUALIZAR_CARGANDO_PERMISOS_TIPO_USUARIO:
            return {
                ...state,
                cargandoPermisosTipoUsuarioSeleccionado : action.payload
            }
        case ACTUALIZAR_DATA_PERMISOS_TIPO_USUARIO:
            return {
                ...state,
                tpuidSeleccionado                       : action.payload.tpuid,
                obtuvoPermisosTipoUsuarioSeleccionado   : action.payload.obtuvoPermisosTipoUsuario,
                permisosTipoUsuarioSeleccionado         : action.payload.permisosTipoUsuario,
                cargandoPermisosTipoUsuarioSeleccionado : false,
                nombreTipoUsuarioSeleccionado           : action.payload.nombreTipoUsuario
            }
        default: 
            return state
    }
}



