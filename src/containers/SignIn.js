import React, {useEffect} from "react";
import {message,Form} from "antd";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom"
import {
  hideMessage,
  loginReducer
} from "appRedux/actions/Auth";
import CircularProgress from "components/CircularProgress/index";
import './login.css'
import Login from './Login'

const SignIn =()=> {

  const dispatch = useDispatch();
  const {loader, alertMessage, showMessage,authUser}= useSelector(({auth}) => auth);
  const history = useHistory();

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
       dispatch(hideMessage());
      }, 100);
    }
    if (authUser !== null) {
      history.push('/');
    }
  });

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = async values =>  {
    console.log("finish",values)
    dispatch(loginReducer(values))
  };

  return (
    <div 
      style={{width : '100%', height : '100%'}}
    >
      <div
        className = "contenedorFormularioLogin"
      >
        <div style={{width : '100%', height : '100%', alignItems: 'center', display:'flex'}}>
          <img src={require('assets/images/kimberly.png')} alt=''  id="imagenLogo" />
          <h1 className="tituloIniciarSesion">Iniciar Sesión</h1>
          <Form
            initialValues={{ remember: true }}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="gx-signin-form gx-form-row0">
              <span id="textoInputUsuario">Usuario</span>
              <div id="campoInputUsuario">
                <img className="iconoContrasena"  alt="" src={require("assets/images/iconUsuario.png")} style={{paddingBottom:'7px'}}/>
                <Form.Item
                  initialValue=""
                  // rules={[{ required: true, message: 'Es necesario un usuario'}]}
                  name="usuario">
                  <input 
                    name="usuario"
                    id="inputDatos"
                  />
                </Form.Item>
              </div>

              <span id="textoInputClave">Clave</span>
              <div id="campoInputClave">
                <img className="iconoContrasena" alt="" src={require("assets/images/iconCandado.png")} style={{paddingBottom:'7px'}}/> 
                <Form.Item
                  initialValue=""
                  rules= {[{required: true}]}
                  name="contrasena">
                    
                    <input 
                      type="password"
                      name="contrasena"
                      id="inputDatos"
                    />
                    
                </Form.Item>
              </div>
              <Link to="/recuperar">
                <span id="textoOlvidasteContrasena">¿Olvidaste tu contraseña? </span>
              </Link>
              <button
                className="btnIniciar"
              >
                Ingresar
              </button>
              {/* <div 
                className="btnIniciar"
                onClick={onFinish}
                // onClick = {() => alert('asd')}
              >
                <p className="txtBtnIniciar">asd</p>
              </div> */}
                {/* <Form.Item className="btnIniciar">
                  
                </Form.Item> */}
              
          </Form>
          <span className="textoFooterLogin">© Lead Smart View 2020</span>
        </div>
      </div>
      <div 
        className="contenedorLoginSlider"
      >
        <Login  />
      </div>
      {
        loader 
        ? <div className="gx-loader-view">
            <CircularProgress/>
          </div> 
        : null
      }
      {
        showMessage 
        ? message.error(alertMessage.toString()) 
        : null
      }
    </div>
  );
};

export default SignIn;
