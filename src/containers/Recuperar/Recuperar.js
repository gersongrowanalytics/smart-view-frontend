import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {message,Form} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom"
import {
  hideMessage,
  recuperarContrasenaReducer
} from "appRedux/actions/Auth";
import CircularProgress from "components/CircularProgress/index";
import './recuperar.css'
import Login from '../Login'

const Recuperar =()=> {

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
    dispatch(recuperarContrasenaReducer(values))
  };

  return (
    <div 
      style={{width : '100%', height : '100%'}}
    >
      <div
        className = "contenedorFormularioRecuperar"
      >
        <div style={{width : '100%', height : '100%', alignItems: 'center', display:'flex'}}>
          <img src={require('assets/images/kimberlyrojo.png')} alt=''  id="imagenLogo" />
          <h1 className="tituloIniciarSesion">Restablecer<br/>Contraseña</h1>
          <span id="textoContrasena">Si no conoces tu contraseña actual,</span>
          <span id="textoContrasenaDos">puedes cambiarla.</span>
          <Form
            initialValues={{ remember: true }}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="gx-Recuperar-form gx-form-row0">
              <span id="txtInputCorreo">Correo electrónico</span>
              <div id="campoInputCorreo">
                <Form.Item
                  initialValue=""
                  rules= {[{required: true}]}
                  name="correoElectronico">
                    
                    <input 
                      type="text"
                      name="correoElectronico"
                      id="inputDatosRecuperar"
                    />
                    
                </Form.Item>
              </div>
              <Link to="/Sign">
                <span id="regresarLogin">
                  Iniciar sesión
                </span>
              </Link>
              <button
                className="btnEnviar"
              >
                Enviar
              </button>
              
          </Form>
          <span className="textoFooterRecuperar">© Lead Smart View 2021</span>
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

export default Recuperar;
