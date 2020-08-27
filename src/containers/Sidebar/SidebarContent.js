import React from "react";
import {Menu, Avatar} from "antd";
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
      <div className="gx-sidebar-content">
        {/* <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile/>  
          <AppsNavigation/>
        </div> */}
        
        <CustomScrollbars className="gx-layout-sider-scrollbar">
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
                  <i className="icon icon-user-o"/>
                  <span>{localStorage.getItem('usuusuario')}</span>
              </Menu.Item>
              <Menu.Item key="#">
                  <i className="icon icon-user-o"/>
                  <span>Nombre de Ejecutivo</span>
              </Menu.Item>
              <Menu.Item key="#">
                  <i className="icon icon-user-o"/>
                  <span>Nombre de Distribuidora</span>
              </Menu.Item>


              <Menu.Item key="sistema/ventas">
                <Link to="/sistema/ventas"><i className="icon icon-shopping-cart"/>
                  <span>VENTAS</span></Link>
              </Menu.Item>
              <Menu.Item key="sistema/promociones">
                <Link to="/sistema/promociones"><i className="icon icon-navigation"/>
                  <span>PROMOCIONES</span></Link>
              </Menu.Item>
              <Menu.Item key="sistema/tutorial">
                <Link to="/sistema/tutorial"><i className="icon icon-data-display"/>
                  <span>Guía Grow Smart View</span></Link>
              </Menu.Item>
              <Menu.Item key="sistema/cargaArchivos/promociones">
                <Link to="/sistema/cargaArchivos/promociones"><i className="icon icon-files"/>
                  <span>Carga de archivo</span></Link>
              </Menu.Item>
              <Menu.Item key="sistema/widgets">
                <Link to="/sistema/widgets"><i className="icon icon-setting"/>
                  <span>Configuración</span></Link>
              </Menu.Item>

            </MenuItemGroup>
            <AppsNavigation/>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;

