import config from 'config'
import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {
  HIDE_MESSAGE,
  INIT_URL,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  SIGNIN_FACEBOOK_USER,
  SIGNIN_FACEBOOK_USER_SUCCESS,
  SIGNIN_GITHUB_USER,
  SIGNIN_GITHUB_USER_SUCCESS,
  SIGNIN_GOOGLE_USER,
  SIGNIN_GOOGLE_USER_SUCCESS,
  SIGNIN_TWITTER_USER,
  SIGNIN_TWITTER_USER_SUCCESS,
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER,
  SIGNOUT_USER_SUCCESS,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  MOSTRAR_FORMULARIO_LOGIN
} from "constants/ActionTypes";
import {reiniciarSucursalesReducer} from 'appRedux/actions/Sucursales'
import {reiniciarFechasReducer} from 'appRedux/actions/Fechas'
import {reiniciarVentasTprReducer} from 'appRedux/actions/VentasTpr'
import {reiniciarPromocionesReducer} from 'appRedux/actions/Promociones'

export const userSignUp = (user) => {
  return {
    type: SIGNUP_USER,
    payload: user
  };
};
export const userSignIn = (user) => {
  return {
    type: SIGNIN_USER,
    payload: user
  };
};

export const loginCorrecto = (user) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: user
  };
};

export const guardarVentasTpr = (ventastpr) => {
  return {
    type: 'GUARDAR_VENTASTPR',
    payload: ventastpr
  };
};

export const userSignOut = () => async (dispatch) => {

  await dispatch({
    type: SIGNOUT_USER
  })
  await dispatch(reiniciarSucursalesReducer())
};
export const userSignUpSuccess = (authUser) => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: authUser
  };
};

export const userSignInSuccess = (authUser) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: authUser
  }
};
export const userSignOutSuccess = () => {
  return {
    type: SIGNOUT_USER_SUCCESS,
  }
};

export const showAuthMessage = (message) => {
  return {
    type: SHOW_MESSAGE,
    payload: message
  };
};


export const userGoogleSignIn = () => {
  return {
    type: SIGNIN_GOOGLE_USER
  };
};
export const userGoogleSignInSuccess = (authUser) => {
  return {
    type: SIGNIN_GOOGLE_USER_SUCCESS,
    payload: authUser
  };
};
export const userFacebookSignIn = () => {
  return {
    type: SIGNIN_FACEBOOK_USER
  };
};
export const userFacebookSignInSuccess = (authUser) => {
  return {
    type: SIGNIN_FACEBOOK_USER_SUCCESS,
    payload: authUser
  };
};
export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};
export const userTwitterSignIn = () => {
  return {
    type: SIGNIN_TWITTER_USER
  };
};
export const userTwitterSignInSuccess = (authUser) => {
  return {
    type: SIGNIN_TWITTER_USER_SUCCESS,
    payload: authUser
  };
};
export const userGithubSignIn = () => {
  return {
    type: SIGNIN_GITHUB_USER
  };
};
export const userGithubSignInSuccess = (authUser) => {
  return {
    type: SIGNIN_GITHUB_USER_SUCCESS,
    payload: authUser
  };
};
export const showAuthLoader = () => {
  return {
    type: ON_SHOW_LOADER,
  };
};

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE,
  };
};
export const hideAuthLoader = () => {
  return {
    type: ON_HIDE_LOADER,
  };
};

export const loginReducer = (usuario) => async ( dispatch, getState) => {
  await dispatch(reiniciarSucursalesReducer())
  await dispatch(reiniciarFechasReducer())
  await dispatch(reiniciarVentasTprReducer())
  await dispatch(reiniciarPromocionesReducer())

  dispatch(showAuthLoader());
  await fetch(config.api+'login',
      {
        mode:'cors',
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json'
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
          localStorage.setItem('user_id', data.datos.usuid)
          localStorage.setItem('usutoken', data.datos.usutoken)
          localStorage.setItem('usuusuario', data.datos.usuusuario)
          localStorage.setItem('pernombre', data.datos.pernombre)
          localStorage.setItem('ejecutivo', data.datos.ejecutivo)          
          localStorage.setItem('distribuidora', data.datos.pernombrecompleto)

          dispatch(loginCorrecto(data.datos))
        }else{
          dispatch(showAuthMessage(data.mensajeDetalle))
        }
      }
    }).catch((error)=> {
      dispatch(showAuthMessage(error))
    });
}

export const mostrarFormReducer = (accion) => {
  return {
    type: MOSTRAR_FORMULARIO_LOGIN,
    payload: accion
  }
}