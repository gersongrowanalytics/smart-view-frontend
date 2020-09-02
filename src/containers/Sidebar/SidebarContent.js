import React from "react";
import {Menu, Avatar, Divider} from "antd";
import {Link} from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";
import {useSelector} from "react-redux";
import './SideberContent.css'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const SidebarContent = () => {

  let {pathname} = useSelector(({common}) => common);
  let {navStyle, themeType} = useSelector(({settings}) => settings);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  const getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (
    <>
      <SidebarLogo/>
      <div className="gx-sidebar-content" >
        {/* <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile/>  
          <AppsNavigation/>
        </div> */}
        
        <div className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">
            <MenuItemGroup key="main" className="gx-menu-group" title={null}>
              {/* <Menu.Item key="#">
                  <i className="icon icon-user-o"/>
                  <span>VENTAS</span>
              </Menu.Item> */}
              <Menu.Item key="#">
                  {/* <i className="icon icon-user-o"/> */}
                  <img alt="" src={require("assets/images/nombreEjecutivo.png")} style={{ marginRight:'15px' }} width="25px" />
                  <span id="txtSidebarItem">{localStorage.getItem('usuusuario')}</span>
              </Menu.Item>
              <Menu.Item key="#">
                  {/* <i className="icon icon-user-o"/> */}
                  <img alt="" src={require("assets/images/nombreEjecutivo.png")} style={{ marginRight:'15px' }} width="25px" />
                  <span id="txtSidebarItem">Nombre de Ejecutivo</span>
              </Menu.Item>
              <Menu.Item key="#">
                  {/* <i className="icon icon-user-o"/> */}
                  <img alt="" src={require("assets/images/nombreEjecutivo.png")} style={{ marginRight:'15px' }} width="25px" />
                  <span id="txtSidebarItem">Nombre de Distribuidora</span>
              </Menu.Item>
              <Menu.Item key="sistema/ventas">
                <Link to="/sistema/ventas">
                  {/* <i className="icon icon-shopping-cart"/> */}
                  <img alt="" src={require("assets/images/menuVentas.png")} style={{ marginRight:'15px' }} width="25px" />
                  <span id="txtSidebarItem">Ventas</span></Link>
              </Menu.Item>
              <Menu.Item key="sistema/promociones">
                <Link to="/sistema/promociones">
                  <img alt="" src={require("assets/images/menuPromociones.png")} style={{ marginRight:'15px' }} width="25px" />
                  <span id="txtSidebarItem">Promociones</span></Link>
              </Menu.Item>
              <Menu.Item key="sistema/tutorial">
                <Link to="/sistema/tutorial">
                  <img alt="" src={require("assets/images/menuGuia.png")} style={{ marginRight:'15px' }} width="25px" />
                  <span id="txtSidebarItem">Guía Grow Smart View</span></Link>
              </Menu.Item>
              <Menu.Item key="sistema/cargaArchivos/promociones">
                <Link to="/sistema/cargaArchivos/promociones">
                  <img alt="" src={require("assets/images/menuCargaArchivo.png")} style={{ marginRight:'15px' }} width="25px" />
                  <span id="txtSidebarItem">Carga de archivo</span></Link>
              </Menu.Item>
              {/* <Divider /> */}
              <Menu.Item key="sistema/cargaArchivos/promociones">
                <Link to="/sistema/cargaArchivos/promociones">
                <i className="icon icon-user-o"/>
                  <span id="txtSidebarItem">Usuarios</span></Link>
              </Menu.Item>
              {/* <SubMenu key="Configuracion" popupClassName={getNavStyleSubMenuClass(navStyle)}
                       title={<span> <img alt="" src={require("assets/images/menuConfiguracion.png")} style={{ marginRight:'13px', }} width="30px" />
                         <p className="txtSideberSubItem" id="txtSidebarItem">Configuración</p></span>}>
                <Menu.Item key="sistema/configuracion/usuarios">
                  <Link to="/sistema/configuracion/usuarios">
                    <img alt="" src={require("assets/images/menuConfiguracion.png")} style={{ marginLeft:'-25px', marginRight:'5px' }} width="20px" />
                    <span id="txtSidebarItem">Usuarios</span>
                  </Link>
                </Menu.Item>
              </SubMenu> */}

              {/* <Menu.Item key="sistema/widgets">
                <Link to="/sistema/widgets">
                  <img alt="" src={require("assets/images/menuConfiguracion.png")} style={{ marginRight:'15px' }} width="25px" />
                  <span>Configuración</span></Link>
              </Menu.Item>
              <Menu.Item key="sistema/usuarios">
                <Link to="/sistema/usuarios">
                  <img alt="" src={require("assets/images/menuConfiguracion.png")} style={{ marginRight:'15px' }} width="25px" />
                  <span>Usuarios</span></Link>
              </Menu.Item> */}
            </MenuItemGroup>
            <AppsNavigation/>
          </Menu>
        </div>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;