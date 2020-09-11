import React from 'react';
import {Menu} from "antd";
import {Link} from "react-router-dom";
import AppsNavigation from "./AppsNavigation";
import './SideberContent.css'

const MenuItemGroup = Menu.ItemGroup;

class SidebarItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItemVentas        : false,
            menuItemPromociones   : false,
            menuItemGuiaGrow      : false,
            menuItemCargaArchivo  : false,
            menuItemUsuarios      : false,

            seleccionoVentas      : false,
            seleccionoPromociones : false,
            seleccionoGuia        : false,
            seleccionoCarga       : false,
            seleccionoUsuarios    : false,
        }
        this.funActivarHover = this.funActivarHover.bind(this)
        this.funSeleccionarMenu = this.funSeleccionarMenu.bind(this)
    }
    
    funActivarHover(nombre){
        this.setState({
            [nombre] : true
        })
    }

    funDesactivarHover(nombre, nombreSelecciono){
        
        if(this['state']['selecciono'+nombreSelecciono] == false){
            this.setState({
                [nombre] : false
            })
        }
    }

    funSeleccionarMenu(nombre, nombreSelecciono){
        this.setState({
            menuItemVentas          : false,
            menuItemPromociones     : false,
            menuItemGuiaGrow        : false,
            menuItemCargaArchivo    : false,
            menuItemUsuarios        : false,

            seleccionoVentas        : false,
            seleccionoPromociones   : false,
            seleccionoGuia          : false,
            seleccionoCarga         : false,
            seleccionoUsuarios      : false
        })

        this.setState({
            [nombre]: true,
            ["selecciono"+nombreSelecciono] : true
        })
    }
  
    render() {
        return (
            <Menu
                defaultOpenKeys={[this.props.defaultOpenKeys]}
                selectedKeys={[this.props.selectedKeys]}
                theme={this.props.themeType === this.props.THEME_TYPE_LITE ? 'lite' : 'dark'}
                mode="inline">
                <MenuItemGroup key="main" className="gx-menu-group" title={null}>
                <Menu.Item key="#">
                    <img alt="" src={require("assets/images/nombreEjecutivo.png")} style={{ marginRight:'15px' }} width="25px" />
                    <span id="txtSidebarItem">{localStorage.getItem('pernombre')}</span>
                </Menu.Item>
                <Menu.Item key="#ejecutivo">
                    <img alt="" src={require("assets/images/nombreEjecutivo.png")} style={{ marginRight:'15px' }} width="25px" />
                    <span id="txtSidebarItem">{localStorage.getItem('ejecutivo')}</span>
                </Menu.Item>
                <Menu.Item key="#Distribuidora">
                    <img alt="" src={require("assets/images/nombreEjecutivo.png")} style={{ marginRight:'15px' }} width="25px" />
                    <span id="txtSidebarItem">{localStorage.getItem('distribuidora')}</span>
                </Menu.Item>
                <Menu.Item key="sistema/ventas">
                    <Link to="/sistema/ventas" 
                        onMouseEnter={() => {this.funActivarHover('menuItemVentas', 'Ventas')}} 
                        onMouseLeave={() => {this.funDesactivarHover('menuItemVentas', 'Ventas')}}
                        onClick={() => {this.funSeleccionarMenu('menuItemVentas', 'Ventas')}}
                    >
                        <img alt="" src={require("assets/images/menuVentas.png")} style={{ marginRight:'15px' }} width="25px" />
                        <span 
                            id={
                                this.state.menuItemVentas == true
                                ? "txtSidebarItemHover"
                                : "txtSidebarItem"
                            }
                        >Ventas</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="sistema/promociones">
                    <Link to="/sistema/promociones" 
                        onMouseEnter={() => {this.funActivarHover('menuItemPromociones', 'Promociones')}} 
                        onMouseLeave={() => {this.funDesactivarHover('menuItemPromociones', 'Promociones')}}
                        onClick={() => {this.funSeleccionarMenu('menuItemPromociones', 'Promociones')}}
                    >
                    <img alt="" src={require("assets/images/menuPromociones.png")} style={{ marginRight:'15px' }} width="25px" />
                    <span 
                        id={
                            this.state.menuItemPromociones == true
                            ? "txtSidebarItemHover"
                            : "txtSidebarItem"
                        }
                    >Promociones</span></Link>
                </Menu.Item>
                <Menu.Item key="sistema/tutorial">
                    <Link to="/sistema/tutorial" 
                        onMouseEnter={() => {this.funActivarHover('menuItemGuiaGrow', 'Guia')}} 
                        onMouseLeave={() => {this.funDesactivarHover('menuItemGuiaGrow', 'Guia')}}
                        onClick={() => {this.funSeleccionarMenu('menuItemGuiaGrow', 'Guia')}}
                    >
                    <img alt="" src={require("assets/images/menuGuia.png")} style={{ marginRight:'15px' }} width="25px" />
                    <span 
                        id={
                            this.state.menuItemGuiaGrow == true
                            ? "txtSidebarItemHover"
                            : "txtSidebarItem"
                        }
                    >Guía Grow Smart View</span></Link>
                </Menu.Item>
                <Menu.Item key="sistema/cargaArchivos/promociones">
                    <Link to="/sistema/cargaArchivos/promociones" 
                        onMouseEnter={() => {this.funActivarHover('menuItemCargaArchivo', 'Carga')}} 
                        onMouseLeave={() => {this.funDesactivarHover('menuItemCargaArchivo', 'Carga')}}
                        onClick={() => {this.funSeleccionarMenu('menuItemCargaArchivo', 'Carga')}}
                    >
                    <img alt="" src={require("assets/images/menuCargaArchivo.png")} style={{ marginRight:'15px' }} width="25px" />
                    <span 
                        id={
                            this.state.menuItemCargaArchivo == true
                            ? "txtSidebarItemHover"
                            : "txtSidebarItem"
                        }
                    >Carga de archivo</span></Link>
                </Menu.Item>
                <Menu.Item key="sistema/configuracion/usuarios">
                    <Link to="/sistema/configuracion/usuarios" 
                        onMouseEnter={() => {this.funActivarHover('menuItemUsuarios', 'Usuarios')}} 
                        onMouseLeave={() => {this.funDesactivarHover('menuItemUsuarios', 'Usuarios')}}
                        onClick={() => {this.funSeleccionarMenu('menuItemUsuarios', 'Usuarios')}}
                    >
                    <i className="icon icon-user-o"/>
                    <span
                        id={
                            this.state.menuItemUsuarios == true
                            ? "txtSidebarItemHover"
                            : "txtSidebarItem"
                        }
                    >Usuarios</span></Link>
                </Menu.Item>
                </MenuItemGroup>
                <AppsNavigation/>
          </Menu>
        )
    }
}
  
export default SidebarItem