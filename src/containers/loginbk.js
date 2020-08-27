import React, {useEffect} from "react";
import {Button, Input, message,Form} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom"

import {
  hideMessage,
  loginReducer
} from "appRedux/actions/Auth";
import { estadoRequestReducer } from "appRedux/actions/EstadoRequest"
import CircularProgress from "components/CircularProgress/index";

const SignIn =()=> {

  const dispatch = useDispatch();
  const {loader, alertMessage, showMessage,authUser}= useSelector(({auth}) => auth);
  const { init_estadoRequest, init_request } = useSelector(({estadoRequest}) => estadoRequest);
  const [form] = Form.useForm();
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

  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.form.validateFields((err, values) => {
  //     if (!err) {
  //       dispatch(showAuthLoader());
  //       dispatch(userSignIn(values));
  //     }
  //   });
  // };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = async values =>  {
    console.log("finish",values)
    dispatch(loginReducer(values))
    // dispatch(showAuthLoader());
    // await fetch(config.api+'login',
    //   {
    //     mode:'cors',
    //     method: 'POST',
    //     body: JSON.stringify(values),
    //     headers: {
    //       'Accept' : 'application/json',
    //       'Content-type' : 'application/json'
    //     }
    //   }
    // )
    // .then( async res => {
    //   await dispatch(estadoRequestReducer(res.status))
    //   return res.json()
    // })
    // .then(data => {
    //   if(init_request == true){
    //     if(data.respuesta == true){
    //       localStorage.setItem('user_id', data.datos.usuid)
    //       localStorage.setItem('usutoken', data.datos.usutoken)
    //       localStorage.setItem('usuusuario', data.datos.usuusuario)
    //       dispatch(loginCorrecto(data.datos))
    //     }else{
    //       dispatch(showAuthMessage(data.mensajeDetalle))
    //     }
    //   }
    // }).catch((error)=> {
    //   dispatch(showAuthMessage(error))
    // });
  };

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          {/* <div className="gx-app-logo-content">
            <div className="gx-app-logo-content-bg">

              <img src={"https://via.placeholder.com/272x395"} alt='Neature'/>
            </div>
            <div className="gx-app-logo-wid">

              <h1><IntlMessages id="app.userAuth.signIn"/></h1>
              <p><IntlMessages id="app.userAuth.bySigning"/></p>
              <p><IntlMessages id="app.userAuth.getAccount"/></p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src={require("assets/images/logo.png")}/>
            </div>
          </div> */}
          <div className="gx-app-login-content">
            <Form
              initialValues={{ remember: true }}
              name="basic"
              onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  className="gx-signin-form gx-form-row0">

              <Form.Item
                initialValue=""
                rules={[{ required: true, message: 'Es necesario un usuario' }]} name="usuario">
                <Input placeholder="Usuario"/>
              </Form.Item>
              <Form.Item
                initialValue=""
                rules= {[{required: true, message: 'Porfavor escriba una contraseña!'}]}  name="contrasena">
                  <Input type="password" placeholder="Contraseña"/>
              </Form.Item>
              {/* <Form.Item>
                  <Checkbox><IntlMessages id="appModule.iAccept"/></Checkbox>
                <span className="gx-signup-form-forgot gx-link"><IntlMessages
                  id="appModule.termAndCondition"/></span>
              </Form.Item> */}
              <Form.Item>
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                  Ingresar
                </Button>
                {/* <span><IntlMessages id="app.userAuth.or"/></span> <Link to="/signup"><IntlMessages
                id="app.userAuth.signUp"/></Link> */}
              </Form.Item>
              {/* <div className="gx-flex-row gx-justify-content-between">
                <span>or connect with</span>
                <ul className="gx-social-link">
                  <li>
                    <GoogleOutlined onClick={() => {
                      dispatch(showAuthLoader());
                      dispatch(userGoogleSignIn());
                    }}/>
                  </li>
                  <li>
                    <FacebookOutlined  onClick={() => {
                      dispatch(showAuthLoader());
                      dispatch(userFacebookSignIn());
                    }}/>
                  </li>
                  <li>
                    <GithubOutlined onClick={() => {
                      dispatch(showAuthLoader());
                      dispatch(userGithubSignIn());
                    }}/>
                  </li>
                  <li>
                    <TwitterOutlined  onClick={() => {
                      dispatch(showAuthLoader());
                      dispatch(userTwitterSignIn());
                    }}/>
                  </li>
                </ul>
              </div> */}
              {/* <span
                className="gx-text-light gx-fs-sm"> demo user email: 'demo@example.com' and password: 'demo#123'
              </span> */}
            </Form>
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
            // ? message.error("Lo sentimos el usuario es incorrecto.") 
            : null
          }
        </div>
      </div>
    </div>
  );
};

export default SignIn;


import React, {useEffect} from "react";
import {Button, Input, message,Form} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom"

import {
  hideMessage,
  loginReducer
} from "appRedux/actions/Auth";
import CircularProgress from "components/CircularProgress/index";

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
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-login-content">
            <Form
              initialValues={{ remember: true }}
              name="basic"
              onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  className="gx-signin-form gx-form-row0">

              <Form.Item
                initialValue=""
                rules={[{ required: true, message: 'Es necesario un usuario' }]} name="usuario">
                <Input placeholder="Usuario"/>
              </Form.Item>
              <Form.Item
                initialValue=""
                rules= {[{required: true, message: 'Porfavor escriba una contraseña!'}]}  name="contrasena">
                  <Input type="password" placeholder="Contraseña"/>
              </Form.Item>
              <Form.Item>
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                  Ingresar
                </Button>
              </Form.Item>
            </Form>
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
      </div>
    </div>
  );
};

export default SignIn;












// muevo login
import React, {useEffect} from "react";
import {Row, Col, Button, Input, message,Form} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom"
import {
  hideMessage,
  loginReducer
} from "appRedux/actions/Auth";
import CircularProgress from "components/CircularProgress/index";
import './login.css'

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
          <h1 className="tituloIniciarSesion">Iniciar Sesión</h1>
          <span id="textoInputUsuario">Usuario</span>
          <div id="campoInputUsuario">
            <img alt="" src={require("assets/images/iconUsuario.png")} style={{paddingBottom:'7px'}}/>
            <input 
              id="inputDatos"
            />
          </div>

          <span id="textoInputClave">Clave</span>
          <div id="campoInputClave">
            <img alt="" src={require("assets/images/iconCandado.png")} style={{paddingBottom:'7px'}}/>
            <input 
              id="inputDatos"
            />
          </div>  
          <span className="textoFooterLogin">© Lead Smart View 2020</span>
        </div>
      </div>
      <div 
        className="contenedorLoginSlider"
      >

      </div>
    </div>
  );
};

export default SignIn;
