import React from "react";
import {Menu, Avatar, Divider} from "antd";
import {Link} from "react-router-dom";
import SidebarItem from './SidebarItem'
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
  const {permisos} = useSelector(({auth}) => auth);

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
          <SidebarItem 
            defaultOpenKeys = {defaultOpenKeys}
            selectedKeys    = {selectedKeys}
            themeType       = {themeType}
            THEME_TYPE_LITE = {THEME_TYPE_LITE}
            permisos        = {permisos}
          />
        </div>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;