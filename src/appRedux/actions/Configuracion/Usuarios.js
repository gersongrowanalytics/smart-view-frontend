import React from 'react'
import {message, Input} from "antd";
import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import {
    OBTENER_USUARIOS_EXITO,
    OBTENER_USUARIOS_FAIL,
	ACTUALIZAR_COLUMNAS_TABLA_USUARIOS,
	ACTUALIZAR_LISTA_EJECUTIVOS,
  ACTUALIZAR_COLUMNAS_TABLA_EJECUTIVOS,
  CARGANDO_NUEVO_USUARIO,
  OBTENER_SUCURSALES_X_ZONA
} from "constants/SistemaTypes";
import config from 'config'


export const obtenerUsuariosReducer = () => async (dispatch, getState) => {
  
  await fetch(config.api+'configuracion/usuarios/mostrarUsuarios',
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
      dispatch(armarColumnasTablaReducer())
      if(data.respuesta == true){
          dispatch({
              type: OBTENER_USUARIOS_EXITO,
              payload: data.datos
          })
      }else{
          dispatch({
              type: OBTENER_USUARIOS_FAIL,
              payload: data.datos
          })
      }
    }
  }).catch((error)=> {
      dispatch({
          type: OBTENER_USUARIOS_FAIL,
          payload: []
      })
  });
}

export const armarColumnasTablaReducer = () =>async (dispatch, getState) => {
  dispatch ({
    type: ACTUALIZAR_COLUMNAS_TABLA_USUARIOS,
    payload : [
      {
          title: 'Tipo de Usuario',
          dataIndex: 'tpunombre',
          width: 150,
      },
      {
          title: 'Nombre Completo',
          dataIndex: 'pernombrecompleto',
          width: 150,
      },
      {
          title: 'Usuario',
          dataIndex: '',
          width: 150,
          render: (data) => 
          data.editar == true 
          ?<Input 
            onChange={(e) => {
              data.usuusuario = e.target.value
              dispatch({type: "",payload: data}) 
              dispatch(armarColumnasTablaReducer())
            }}
            placeholder="Username" 
            value={data.usuusuario} 
          />
          :<span>{data.usuusuario}</span>
      },
      {
          title: 'Correo',
          width: 150,
          dataIndex: '',
          render: (data) => 
          data.editar == true 
          ?<Input 
            onChange={(e) => {
              data.usucorreo = e.target.value
              dispatch({type: "",payload: data}) 
              dispatch(armarColumnasTablaReducer())
            }}
            placeholder="Correo" 
            value={data.usucorreo} 
          />
          :<span>{data.usucorreo}</span>
      },
      {
        title: 'Contraseña',
        dataIndex: '',
        width: 150,
        render: (data) => 
        data.editar == true 
        ?<Input 
          type="password" 
          placeholder="Nueva Contraseña" 
          value={data.nuevaContrasena} 
          onChange={(e) => {
            data.editarContrasena = true
            data.nuevaContrasena = e.target.value
            dispatch({type: "",payload: data}) 
            dispatch(armarColumnasTablaReducer())
          }}
        />
        :<span>*********</span>
      },
      {
          title: 'Acción',
          width: 150,
          dataIndex: '',
          key: 'x',
          render: (data) => 
          data.editar == true 
          ?<div>
            <span 
              className="gx-link gx-text-yellow"
              style={{marginRight:'10px'}}
              onClick = {
                () => 
                dispatch(editarUsuarioReducer(data.tpuid, data.usuid, data.usuusuario, data.usucorreo, data.editarContrasena, data.nuevaContrasena))
              }
            >
              Guardar
            </span>
            <span 
              className="gx-link gx-text-red"
              onClick = {
                () => {
                  data.editar = false
                  data.editarContrasena = false
                  data.nuevaContrasena  = null
                  dispatch({type: "",payload: data}) 
                  dispatch(armarColumnasTablaReducer())
                }
              }
            >
              Cancelar
            </span>
          </div>
          :<span 
            className="gx-link" 
            onClick={() => { 
              data.editar = !data.editar
              dispatch({type: "",payload: data}) 
              dispatch(armarColumnasTablaReducer())
            }}
          >
            Editar
          </span>
      }
    ]
  })
}

export const editarUsuarioReducer = (nuevTpuid, usuid, nuevUsua, nuevCorr, editarCont, nuevCont) => async (dispatch, getState) => {
  await fetch(config.api+'configuracion/usuarios/editarUsuario',
    {
      mode:'cors',
      method: 'POST',
      body: JSON.stringify({
        nuevTpuid   : nuevTpuid,
        usuid       : usuid,
        nuevUsua    : nuevUsua,
        nuevCorr    : nuevCorr,
        editarCont  : editarCont,
        nuevCont    : nuevCont,
      }),
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
      if(data.respuesta == true){
          dispatch(obtenerUsuariosReducer())
      }else{
          
      }
    }
  }).catch((error)=> {
      
  });
}

export const obtenerEjecutivosReducer = () => async (dispatch, getState) => {
  	await fetch(config.api+'configuracion/usuarios/mostrar/ejecutivos',
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
			dispatch(armarColumnasTablaReducer())
			if(data.respuesta == true){
				dispatch({
					type: ACTUALIZAR_LISTA_EJECUTIVOS,
					payload: data.datos
				})
			}else{
				dispatch({
					type: ACTUALIZAR_LISTA_EJECUTIVOS,
					payload: data.datos
				})
			}
		}
  	}).catch((error)=> {
		console.log(error)
		dispatch({
			type: ACTUALIZAR_LISTA_EJECUTIVOS,
			payload: []
      	})
  	});
}

export const armarColumnasTablaEjecutivoReducer = () => async (dispatch) => {
	dispatch ({
		type: ACTUALIZAR_COLUMNAS_TABLA_EJECUTIVOS,
		payload : [
			{
				title: 'Tipo de Usuario',
				dataIndex: 'tpunombre',
				width: 150,
			},
			{
				title: 'Nombre Completo',
				dataIndex: 'pernombrecompleto',
				width: 150,
			},
			{
				title: 'Usuario',
				dataIndex: '',
				width: 150,
				render: (data) => 
				data.editar == true 
				?<Input 
					onChange={(e) => {
					data.usuusuario = e.target.value
					dispatch({type: "",payload: data}) 
					dispatch(armarColumnasTablaReducer())
					}}
					placeholder="Username" 
					value={data.usuusuario} 
				/>
				:<span>{data.usuusuario}</span>
			},
			{
				title: 'Correo',
				width: 150,
				dataIndex: '',
				render: (data) => 
				data.editar == true 
				?<Input 
					onChange={(e) => {
					data.usucorreo = e.target.value
					dispatch({type: "",payload: data}) 
					dispatch(armarColumnasTablaReducer())
					}}
					placeholder="Correo" 
					value={data.usucorreo} 
				/>
				:<span>{data.usucorreo}</span>
			},
			{
				title: 'Contraseña',
				dataIndex: '',
				width: 150,
				render: (data) => 
				data.editar == true 
				?<Input 
				type="password" 
				placeholder="Nueva Contraseña" 
				value={data.nuevaContrasena} 
				onChange={(e) => {
					data.editarContrasena = true
					data.nuevaContrasena = e.target.value
					dispatch({type: "",payload: data}) 
					dispatch(armarColumnasTablaReducer())
				}}
				/>
				:<span>*********</span>
			},
			{
				title: 'Acción',
				width: 150,
				dataIndex: '',
				key: 'x',
				render: (data) => 
				data.editar == true 
				?<div>
					<span 
					className="gx-link gx-text-yellow"
					style={{marginRight:'10px'}}
					onClick = {
						() => 
						dispatch(editarUsuarioReducer(data.tpuid, data.usuid, data.usuusuario, data.usucorreo, data.editarContrasena, data.nuevaContrasena))
					}
					>
					Guardar
					</span>
					<span 
					className="gx-link gx-text-red"
					onClick = {
						() => {
						data.editar = false
						data.editarContrasena = false
						data.nuevaContrasena  = null
						dispatch({type: "",payload: data}) 
						dispatch(armarColumnasTablaReducer())
						}
					}
					>
					Cancelar
					</span>
				</div>
				:<span 
					className="gx-link" 
					onClick={() => { 
					data.editar = !data.editar
					dispatch({type: "",payload: data}) 
					dispatch(armarColumnasTablaReducer())
					}}
				>
					Editar
				</span>
			}
		]
	})
}

export const crearUsuarioReducer = (data) => async (dispatch, getState) => {
  // console.log(data)
  dispatch({type: "CARGANDO_NUEVO_USUARIO",payload: true}) 
  await fetch(config.api+'configuracion/usuarios/crear/usuario',
    {
      mode:'cors',
      method: 'POST',
      body: JSON.stringify(data),
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
      if(data.respuesta == true){
        message.success(data.mensaje)
        dispatch({type: "CARGANDO_NUEVO_USUARIO",payload: false}) 
        dispatch(obtenerUsuariosReducer()) 
      }else{
        message.error(data.mensaje)
        dispatch({type: "CARGANDO_NUEVO_USUARIO",payload: false}) 
      }
    }
  }).catch((error)=> {
    console.log(error)
    message.error("Lo sentimos ocurrio un error en el servidor")
    dispatch({type: "CARGANDO_NUEVO_USUARIO",payload: false}) 
  });
}

export const ObtenerSucursalesXZonaReducer = () => async (dispatch, getState) => {
  await fetch(config.api+'configuracion/usuarios/mostrar/sucursales',
    {
      mode:'cors',
      method: 'POST',
      body: JSON.stringify(),
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
      if(data.respuesta == true){
        dispatch({
          type: OBTENER_SUCURSALES_X_ZONA,
          payload: data.datos
        })
      }else{

      }
    }
  }).catch((error)=> {
    console.log(error)
    message.error("Lo sentimos ocurrio un error en el servidor")
  });
}

export const SeleccionaSucursalesReducer = (posicionZona, posicionSuc, valor) => async (dispatch, getState) => {
  var sucursales = getState().configuracionUsuario.sucursalesXZona

  sucursales[posicionZona]['sucs'][posicionSuc]['seleccionado'] = valor;

  dispatch({
    type: OBTENER_SUCURSALES_X_ZONA,
    payload: sucursales
  })

}