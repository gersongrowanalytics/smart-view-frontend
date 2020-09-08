import {
    OBTENER_SUCURSALES_USUARIO_EXITO,
    OBTENER_SUCURSALES_USUARIO_FAIL,
    FILTRO_SELECCIONAR_SUCURSAL_USUARIO,
    REINICIAR_SUCURSALES_USUARIO
} from "constants/SistemaTypes";

const INIT_STATE = {
    sucursalesUsuario       : [],
    obtuvoSucursalesUsuario : false,
    idSucursalUsuarioSelec  : 0
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case OBTENER_SUCURSALES_USUARIO_EXITO: {
          return {
              ...state,
              sucursalesUsuario: action.payload,
              obtuvoSucursalesUsuario : true,
              idSucursalUsuarioSelec : action.payload[0]['sucid']
          }
      }
    case OBTENER_SUCURSALES_USUARIO_FAIL: {
        return {
            ...state,
            sucursalesUsuario: action.payload,
            obtuvoSucursalesUsuario : true
        }
    }
    case FILTRO_SELECCIONAR_SUCURSAL_USUARIO: {
        return {
            ...state,
            idSucursalUsuarioSelec : action.payload
        }
    }
    case REINICIAR_SUCURSALES_USUARIO: {
        return {
            ...state,
            sucursalesUsuario       : [],
            obtuvoSucursalesUsuario : false,
            idSucursalUsuarioSelec  : 0
        }
    }
    default:
        return state;
    }
}
  