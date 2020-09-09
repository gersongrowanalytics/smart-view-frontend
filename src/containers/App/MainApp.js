import React from "react";
import {Layout, Row, Col, Button} from "antd";

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
import {seleccionarVideoTutorialReducer} from "appRedux/actions/Tutorial"
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
import { CloseOutlined } from '@ant-design/icons';

const {Content, Footer} = Layout;

const MainApp = () => {

  const {width, navStyle} = useSelector(({settings}) => settings);
  const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
  const {tutorialSeleccionado, videoTutorialSeleccionado} = useSelector(({tutorial}) => tutorial);
  const {vistaPromocionSeleccionado} = useSelector(({promociones}) => promociones);
  const {vistaVentasSeleccionado}= useSelector(({ventasTpr}) => ventasTpr);

  const dispatch = useDispatch();
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
    videoTutorialSeleccionado == true
      ?<div style={{width:'100%', height:'100%'}}>
        <div style={{float:'right', marginRight:'10px'}}>
            <Button
              style={{background:'#F93258', border:'none', marginTop:'10px', marginRight:'5px'}}
              shape="circle" 
              icon={<CloseOutlined style={{"color" : 'white'}} />} 
              onClick={() => dispatch(seleccionarVideoTutorialReducer(false))}
            >
            </Button>
        </div>
        <div style={{height:'90%'}}>
          <iframe width="100%" height="100%" src="http://www.youtube.com/embed/XGSy3_Czz8k?autoplay=1">
          </iframe>
        </div>
      </div>
      :<Layout className="gx-app-layout" style={{background:'white'}}  >
        {getSidebar(navStyle, width)}
        <Layout>
          {getNavStyles(navStyle)}
          <Content className={`gx-layout-content ${getContainerClass(navStyle)} ` } 
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
                :{
                  background:'white'
                }
            }
          >
            {
              vistaPromocionSeleccionado == true
              ?<div style={{background:'transparent', width:'100%', marginBottom:'20px'}} className="gx-text-center" >
                <img alt="" src={require("assets/images/bannerPromociones.png")} width="100%" height="100%"/>
              </div>
              :vistaVentasSeleccionado == true
                ?<div style={{background:'transparent', width:'100%', marginBottom:'20px'}} className="gx-text-center" >
                  <img alt="" src={require("assets/images/bannerVentas.png")} width="100%" height="100%"/>
                </div>
                :null
            }
            <App match={match} />
            <Footer style={{background:'transparent', marginLeft:'50px', marginRight:'50px', marginTop:'20px'}}>
              <div className="gx-layout-footer-content">
                {/* {footerText} */}
                <Row className="gx-text-center" style={{alignItems:'center'}}>
                  <Col xl={4} 
                    style={{ 
                      marginTop:'5px',
                      fontFamily:'Roboto',
                      fontSize:'12px',
                      fontStyle:'normal',
                      lineHeight:'18px',
                      fontWeight:'bold'
                    }}
                  >
                    © Lead Smart View 2020
                  </Col>
                  <Col xl={16} >
                    <img alt="" width="103px" height="50px" src={require("assets/images/logofooter.png")} />
                  </Col>
                  <Col 
                    xl={4} 
                    style={{ 
                      marginTop:'5px',
                      fontFamily:'Roboto',
                      fontSize:'12px',
                      fontStyle:'normal',
                      lineHeight:'18px',
                      fontWeight:'bold'
                    }}
                  >
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

