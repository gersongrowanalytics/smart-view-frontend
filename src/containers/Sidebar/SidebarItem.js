import React from 'react';
import {Menu} from "antd";
import {Link} from "react-router-dom";
import AppsNavigation from "./AppsNavigation";
import './SideberContent.css'
import {funPermisosObtenidos} from 'funciones/funPermiso.js'
import {
    PERMISO_MODULO_VENTAS,
    PERMISO_MODULO_PROMOCIONES,
    PERMISO_MODULO_GUIA,
    PERMISO_MODULO_CARGA_ARCHIVOS,
    PERMISO_MODULO_CONTROL_ARCHIVOS,
    PERMISO_MODULO_USUARIOS,
    PERMISO_MODULO_REBATE,
    PERMISO_MODULO_TIPO_USUARIOS,
    PERMISO_MODULO_CONTROL_VENTAS
} from "constants/PermisosTypes"

const MenuItemGroup = Menu.ItemGroup;

class SidebarItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItemVentas           : false,
            menuItemPromociones      : false,
            menuItemGuiaGrow         : false,
            menuItemCargaArchivo     : false,
            menuItemControlArchivos  : false,
            menuItemControlVentas    : false,
            menuItemUsuarios         : false,
            menuItemRebate           : false,
            menuItemTiposUsuarios    : false,

            seleccionoVentas         : false,
            seleccionoPromociones    : false,
            seleccionoGuia           : false,
            seleccionoCarga          : false,
            seleccionoControlArchivo : false,
            seleccionoControlVentas  : false,
            seleccionoUsuarios       : false,
            seleccionoRebate         : false,
            seleccionoTiposUsuarios  : false,
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
            menuItemVentas           : false,
            menuItemPromociones      : false,
            menuItemGuiaGrow         : false,
            menuItemCargaArchivo     : false,
            menuItemControlArchivos  : false,
            menuItemControlVentas    : false,
            menuItemUsuarios         : false,
            menuItemRebate           : false,
            menuItemTiposUsuarios    : false,

            seleccionoVentas         : false,
            seleccionoPromociones    : false,
            seleccionoGuia           : false,
            seleccionoCarga          : false,
            seleccionoControlArchivo : false,
            seleccionoUsuarios       : false,
            seleccionoRebate         : false,
            seleccionoTiposUsuarios  : false,
            seleccionoControlVentas  : false,
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
                    <img alt="" src={require("assets/images/nombreEjecutivo.png")} style={{ marginRight:'15px' }} width="26px" />
                    <span id="txtSidebarItem">{localStorage.getItem('pernombre')}</span>
                </Menu.Item>
                <Menu.Item key="#ejecutivo" id="menuItemSidebar">
                    <img alt="" src={require("assets/images/nombreEjecutivo.png")} style={{ marginRight:'15px' }} width="26px" />
                    <span id="txtSidebarItem">{localStorage.getItem('ejecutivo')}</span>
                </Menu.Item>
                <Menu.Item key="#Distribuidora" id="menuItemSidebar">
                    <img alt="" src={require("assets/images/nombreEjecutivo.png")} style={{ marginRight:'15px' }} width="26px" />
                    <span id="txtSidebarItem">{localStorage.getItem('distribuidora')}</span>
                </Menu.Item>

                {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_VENTAS,
                        <Menu.Item key="sistema/ventas" id="menuItemSidebar">
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
                    )
                }
                {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_PROMOCIONES,
                        <Menu.Item key="sistema/promociones" id="menuItemSidebar">
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
                    )
                }

                {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_GUIA,
                        <Menu.Item key="sistema/tutorial" id="menuItemSidebar">
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
                    )
                }
                {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_CARGA_ARCHIVOS,
                        <Menu.Item key="sistema/cargaArchivos/promociones" id="menuItemSidebar">
                            <Link to="/sistema/cargaArchivos/promociones" 
                                onMouseEnter={() => {this.funActivarHover('menuItemCargaArchivo', 'Carga')}} 
                                onMouseLeave={() => {this.funDesactivarHover('menuItemCargaArchivo', 'Carga')}}
                                onClick={() => {
                                    this.funSeleccionarMenu('menuItemCargaArchivo', 'Carga')
                                }}>

                                    <img alt="" src={require("assets/images/menuCargaArchivo.png")} style={{ marginRight:'15px' }} width="25px" />
                                    <span 
                                        id={
                                            this.state.menuItemCargaArchivo == true
                                            ? "txtSidebarItemHover"
                                            : "txtSidebarItem"
                                        }
                                    >Carga de archivo</span>
                            </Link>
                        </Menu.Item>
                    )
                }


                

                {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_CONTROL_ARCHIVOS,
                        <Menu.Item key="sistema/cargaArchivos/control" id="menuItemSidebar">
                            <Link to="/sistema/cargaArchivos/control" 
                                onMouseEnter={() => {this.funActivarHover('menuItemControlArchivos', 'ControlArchivo')}} 
                                onMouseLeave={() => {this.funDesactivarHover('menuItemControlArchivos', 'ControlArchivo')}}
                                onClick={() => {
                                    this.funSeleccionarMenu('menuItemControlArchivos', 'ControlArchivo')
                                }}>

                                    <img alt="" src={require("assets/images/menuCargaArchivo.png")} style={{ marginRight:'15px' }} width="25px" />
                                    <span 
                                        id={
                                            this.state.menuItemControlArchivos == true
                                            ? "txtSidebarItemHover"
                                            : "txtSidebarItem"
                                        }
                                    >Control de Archivos</span>
                            </Link>
                        </Menu.Item>
                    )
                }


                {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_CONTROL_VENTAS,
                        <Menu.Item key="sistema/controlVentas" id="menuItemSidebar">
                            <Link to="/sistema/controlVentas" 
                                onMouseEnter={() => {this.funActivarHover('menuItemControlVentas', 'ControlVentas')}} 
                                onMouseLeave={() => {this.funDesactivarHover('menuItemControlVentas', 'ControlVentas')}}
                                onClick={() => {
                                    this.funSeleccionarMenu('menuItemControlVentas', 'ControlVentas')
                                }}>

                                    <img alt="" src={require("assets/images/menuCargaArchivo.png")} style={{ marginRight:'15px' }} width="25px" />
                                    <span 
                                        id={
                                            this.state.menuItemControlVentas == true
                                            ? "txtSidebarItemHover"
                                            : "txtSidebarItem"
                                        }
                                    >Control de Ventas</span>
                            </Link>
                        </Menu.Item>
                    )
                }




                {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_USUARIOS,
                        <Menu.Item key="sistema/configuracion/usuarios/lista" id="menuItemSidebar">
                            <Link to="/sistema/configuracion/usuarios/lista"
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
                    )
                }
                {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_REBATE,
                        <Menu.Item key="sistema/configuracion/rebate" id="menuItemSidebar">
                            <Link to="/sistema/configuracion/rebate" 
                                onMouseEnter={() => {this.funActivarHover('menuItemRebate', 'Rebate')}} 
                                onMouseLeave={() => {this.funDesactivarHover('menuItemRebate', 'Rebate')}}
                                onClick={() => {this.funSeleccionarMenu('menuItemRebate', 'Rebate')}}
                            >
                            <img alt="" src={require("assets/images/menuRebate.png")} style={{ marginRight:'15px' }} width="25px" />
                            <span
                                id={
                                    this.state.menuItemRebate == true
                                    ? "txtSidebarItemHover"
                                    : "txtSidebarItem"
                                }
                            >Rebate</span></Link>
                        </Menu.Item>
                    )
                }
                {
                    funPermisosObtenidos(
                        this.props.permisos,
                        PERMISO_MODULO_TIPO_USUARIOS,
                        <Menu.Item key="sistema/configuracion/tiposUsuarios" id="menuItemSidebar">
                            <Link to="/sistema/configuracion/tiposUsuarios" 
                                onMouseEnter={() => {this.funActivarHover('menuItemTiposUsuarios', 'TiposUsuarios')}} 
                                onMouseLeave={() => {this.funDesactivarHover('menuItemTiposUsuarios', 'TiposUsuarios')}}
                                onClick={() => {this.funSeleccionarMenu('menuItemTiposUsuarios', 'TiposUsuarios')}}
                            >
                            <img alt="" src={require("assets/images/menuRebate.png")} style={{ marginRight:'15px' }} width="25px" />
                            <span
                                id={
                                    this.state.menuItemTiposUsuarios == true
                                    ? "txtSidebarItemHover"
                                    : "txtSidebarItem"
                                }
                            >Tipos de Usuarios</span></Link>
                        </Menu.Item>
                    )
                }
                </MenuItemGroup>
                <AppsNavigation/>
          </Menu>
        )
    }
}
  
export default SidebarItem