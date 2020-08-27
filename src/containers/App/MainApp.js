import React from "react";
import {Layout, Row, Col} from "antd";

import Sidebar from "../Sidebar/index";
import HorizontalDefault from "../Topbar/HorizontalDefault/index";
import HorizontalDark from "../Topbar/HorizontalDark/index";
import InsideHeader from "../Topbar/InsideHeader/index";
import AboveHeader from "../Topbar/AboveHeader/index";
import BelowHeader from "../Topbar/BelowHeader/index";
import config from 'config'
import Topbar from "../Topbar/index";
import {footerText} from "util/config";
import App from "routes/index";
import {useSelector, useDispatch} from "react-redux";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE
} from "../../constants/ThemeSetting";
import NoHeaderNotification from "../Topbar/NoHeaderNotification/index";
import {useRouteMatch} from "react-router-dom";
import Customizer from "../Customizer";


const {Content, Footer} = Layout;

const MainApp = () => {

  const {width, navStyle} = useSelector(({settings}) => settings);
  const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
  const {tutorialSeleccionado} = useSelector(({tutorial}) => tutorial);
  

  // const dispatch = useDispatch();
  // if(cargaArchivosSeleccionado == false){
  //   dispatch(seleccionarCargaArchivosReducer())
  // }

  const match = useRouteMatch();

  const getContainerClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DARK_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-container-wrap";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-container-wrap";
      default:
        return '';
    }
  };
  const getNavStyles = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL :
        return <HorizontalDefault/>;
      case NAV_STYLE_DARK_HORIZONTAL :
        return <HorizontalDark/>;
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL :
        return <InsideHeader/>;
      case NAV_STYLE_ABOVE_HEADER :
        return <AboveHeader/>;
      case NAV_STYLE_BELOW_HEADER :
        return <BelowHeader/>;
      case NAV_STYLE_FIXED :
        return <Topbar/>;
      case NAV_STYLE_DRAWER :
        return <Topbar/>;
      case NAV_STYLE_MINI_SIDEBAR :
        return <Topbar/>;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR :
        return <NoHeaderNotification/>;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR :
        return <NoHeaderNotification/>;
      default :
        return null;
    }
  };

  const getSidebar = (navStyle, width) => {
    if (width < TAB_SIZE) {
      return <Sidebar/>;
    }
    switch (navStyle) {
      case NAV_STYLE_FIXED :
        return <Sidebar/>;
      case NAV_STYLE_DRAWER :
        return <Sidebar/>;
      case NAV_STYLE_MINI_SIDEBAR :
        return <Sidebar/>;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR :
        return <Sidebar/>;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR:
        return <Sidebar/>;
      default :
        return null;
    }
  };


  return (
    <Layout className="gx-app-layout">
      {getSidebar(navStyle, width)}
      <Layout>
        {getNavStyles(navStyle)}
        <Content className={`gx-layout-content ${getContainerClass(navStyle)} `} 
          style={ 
            cargaArchivosSeleccionado == true 
            ?{
              width:'100%', height:'100%', 
              backgroundImage: `url(${config.api}Sistema/abs/img/fondoCargaArchivo.png)`, 
              backgroundSize: '100% 100%', backgroundRepeat:'no-repeat'
            } 
            : tutorialSeleccionado == true
              ?{
                width:'100%', height:'100%', 
                backgroundImage: `url(${config.api}Sistema/abs/img/fondoTutorial1.png)`, 
                backgroundSize: '100% 100%', backgroundRepeat:'no-repeat'
              } 
              :null
          }
        >
          <App match={match}/>
          <Footer style={{background:'transparent', marginLeft:'50px', marginRight:'50px'}}>
            <div className="gx-layout-footer-content">
              {/* {footerText} */}
              <Row>
                <Col xl={10} style={{ marginTop:'30px'}}>
                  © Lead Smart View 2020
                </Col>
                <Col xl={10}>
                  <img alt="" src={require("assets/images/logoSmart.png")} />
                </Col>
                <Col xl={4} style={{marginTop:'30px'}}>
                  Políticas de privacidad
                </Col>
              </Row>
            </div>
          </Footer>
        </Content>
        <Customizer/>
      </Layout>
    </Layout>
  )
};
export default MainApp;

