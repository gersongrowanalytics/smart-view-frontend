import React, {useEffect} from "react";
import {message,Form} from "antd";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom"
import {
  hideMessage,
  loginReducer,
  mostrarFormReducer
} from "appRedux/actions/Auth";
import CircularProgress from "components/CircularProgress/index";
import './login.css'
import Login from './Login'

const SignIn =()=> {

  const dispatch = useDispatch();
  const {loader, alertMessage, showMessage,authUser, mostrarForm}= useSelector(({auth}) => auth);
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

  setTimeout(() => {
    dispatch(mostrarFormReducer(true));
  }, 9000);

  // if(mostrarForm == true){
  //   dispatch(mostrarFormReducer(false));
  // }

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
        className = {
          mostrarForm == true
          ?"contenedorFormularioLoginActivado"
          :"contenedorFormularioLogin"
        }
        id="contenedorLoginForm"
      >
        <div style={{width : '100%', height : '100%', alignItems: 'center', display:'flex',}} 
          id={
            mostrarForm == true
            ?"contenidoFormActivado"
            :"contenidoForm"
          }
        >
          <img src={require('assets/images/kimberly.png')} alt=''  id="imagenLogo" />
          <h1 className="tituloIniciarSesionLogin">Iniciar Sesión</h1>
          <br/>
          <Form
            initialValues={{ remember: true }}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            // className="gx-signin-form gx-form-row0"
            id="formulariologin"
            >
              
              <p id="textoInputUsuarios">Usuario</p>
              <div id="campoInputUsuarios">
                <img id="iconoContrasena"  alt="" src={require("assets/images/iconUsuario.png")}/>
                <Form.Item
                  initialValue=""
                  // rules={[{ required: true, message: 'Es necesario un usuario'}]}
                  name="usuario">
                  <input 
                    name="usuario"
                    id="inputDatos"
                    autoComplete={"off"}
                  />
                </Form.Item>
              </div>

              <span id="textoInputClave">Clave</span>
              <div id="campoInputClave">
                <img id="iconoContrasena" alt="" src={require("assets/images/iconCandado.png")} /> 
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
                <span id="textoOlvidasteContrasenas">¿Olvidaste tu contraseña? </span>
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
          <span className="textoFooterLogin">© Lead Smart View 2021</span>
        </div>
      </div>
      <div 
        className={
          mostrarForm == true
          ?"contenedorLoginSlidersCarousel"
          :"contenedorLoginSliders"
        }
        // style={
        //   mostrarForm == true
        //   ? { backgroundImage: config.api+"" }
        //   : {}
        // }
      >
        {
          mostrarForm == true
          ?<Login  />
          :<div id="contenedorImagenesCentro">
            <img src={require('assets/images/logoLeadBlanco.png')} alt='' id="logoCarousel" />
            <img src={require('assets/images/logokkc.png')} alt='' id="logoKimberly" />
          </div>
        }
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
