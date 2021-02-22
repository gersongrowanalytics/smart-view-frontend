import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Layout, Popover, Avatar} from "antd";
import {userSignOut, loginReducer} from "appRedux/actions/Auth";
import CustomScrollbars from "util/CustomScrollbars";
import languageData from "./languageData";
import {switchLanguage, toggleCollapsedSideNav} from "../../appRedux/actions/Setting";
import {useDispatch, useSelector} from "react-redux";
import Filtros from './Filtro/filtros'
import { obtenerSucursalesReducer, filtroSeleccionarSucursalUsuario } from "appRedux/actions/Sucursales"
import { filtroSeleccionarZonaUsuarioReducer } from "appRedux/actions/Zonas"
import {
  obtenerFechasReducer,
  filtroSeleccionarDia,
  filtroSeleccionarMes,
  filtroSeleccionarAno
} from "appRedux/actions/Fechas"
import {obtenerVentasTprReducer} from 'appRedux/actions/VentasTpr'
import {obtenerPromocionesReducer, descargarInformacionPromocionesReducer} from 'appRedux/actions/Promociones'
import './Topbar.css'
import LogoKim from 'assets/images/logoCompletoKim.png';

const {Header} = Layout;

const Topbar = () => {

  const { sucursalesUsuario, obtuvoSucursalesUsuario, zonas, cass, gsus } = useSelector(({sucursales}) => sucursales)
  const { fechasFiltro, obtuvoFechasFiltro } = useSelector(({fechas}) => fechas)
  const { obtuvoVentasTpr}= useSelector(({ventasTpr}) => ventasTpr);
  const { obtuvoPromociones}= useSelector(({promociones}) => promociones);
  const {navCollapsed} = useSelector(({common}) => common);
  const {searchText, setSearchText} = useState('');
  const dispatch = useDispatch();

  // if(obtuvoSucursalesUsuario == false){
  //   dispatch(obtenerSucursalesReducer())
  // }else{
  //   if(obtuvoFechasFiltro == false){
  //     dispatch(obtenerFechasReducer())
  //   }else{
  //     if(obtuvoVentasTpr == false){
  //       dispatch(obtenerVentasTprReducer())
  //     }

  //     if(obtuvoPromociones == false){
  //       dispatch(obtenerPromocionesReducer())
  //       dispatch(descargarInformacionPromocionesReducer())
  //     }
  //   }
  // }

  const languageMenu = () => (
    <CustomScrollbars className="gx-popover-lang-scroll">
      <ul className="gx-sub-popover">
        {languageData.map(language =>
          <li className="gx-media gx-pointer" key={JSON.stringify(language)} onClick={(e) =>
            dispatch(switchLanguage(language))
          }>
            <i className={`flag flag-24 gx-mr-2 flag-${language.icon}`}/>
            <span className="gx-language-text">{language.name}</span>
          </li>
        )}
      </ul>
    </CustomScrollbars>);

  const userMenuOptions = (
    <ul className="gx-user-popover">
      {/* <li>My Account</li>
      <li>Connections</li> */}
      {/* <li style={{fontFamily:'Roboto', fontWeight:'bold'}}>Mi Perfil
      </li> */}
        <li onClick={() => dispatch(userSignOut())} style={{fontFamily:'Roboto', fontWeight:'bold'}}>Salir
        </li>
    </ul>
  );

  useEffect(async () =>  {
    dispatch(loginReducer({
      contrasena: localStorage.getItem('contrasena'),
      usuario: localStorage.getItem('usuario')
    }))
    
    await dispatch(obtenerSucursalesReducer())
    await dispatch(obtenerFechasReducer())
    await dispatch(obtenerVentasTprReducer())
    await dispatch(obtenerPromocionesReducer())
    await dispatch(descargarInformacionPromocionesReducer())

    

  }, [])

  return (
    // <></>
    <Header>
      {/* {navStyle === NAV_STYLE_DRAWER || ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) && width < TAB_SIZE) ?
        <div className="gx-linebar gx-mr-3">
          <i className="gx-icon-btn icon icon-menu"
             onClick={() => {
               dispatch(toggleCollapsedSideNav(!navCollapsed));
             }}
          />
        </div> : null} */}
      <div className="gx-linebar gx-mr-24" >
        <h1>
          <i className=" icon icon-menu"
            id="iconoMenuTopbar"
            style={{cursor:'pointer', }}
            onClick={() => {
              dispatch(toggleCollapsedSideNav(!navCollapsed));
            }}
          />

          <Link to="/sistema/ventas">
            <img alt="logs" src={require("assets/images/logos/logoColor.png")} width="72px" height = '66px' id = "logoTopbar"/>
            {/* <img 
              style   = {{cursor:'pointer'}}
              alt     = 'logokim' 
              // src={require("assets/images/logoCompletoKim.png")} 
              width   = '72px' 
              height  = '66px' 
              id      = "logoTopbar"
            /> */}
          </Link>
          <Filtros
            sucursales          = {sucursalesUsuario}
            fechas              = {fechasFiltro}
            zonas               = {zonas}
            cass                = {cass}
            gsus                = {gsus}
            seleccionarZona     = {(valor, gsuid, casid) => dispatch(filtroSeleccionarZonaUsuarioReducer(valor, gsuid, casid))}
            seleccionarSucursal = {(valor) => dispatch(filtroSeleccionarSucursalUsuario(valor))}
            // seleccionarSucursal = {(valor) => console.log(valor)}
            seleccionarDia      = {(valor) => dispatch(filtroSeleccionarDia(valor))}
            seleccionarMes      = {(valor) => dispatch(filtroSeleccionarMes(valor))}
            seleccionarAno      = {(valor) => dispatch(filtroSeleccionarAno(valor))}
          />
          <span style={{ fontSize:'1px'}}>-</span>
        </h1>
        
      </div>
      <div className="gx-linebar gx-mr-24">
        <Popover placement="bottomRight" content={(<ul className="gx-user-popover">
      {/* <li>My Account</li>
      <li>Connections</li> */}
      <Link to="/sistema/perfil">
        <li style={{fontFamily:'Roboto', fontWeight:'bold'}}>Mi Perfil
        </li>
      </Link>
      <li onClick={() => dispatch(userSignOut())} style={{fontFamily:'Roboto', fontWeight:'bold'}}>Salir
      </li>
    </ul>)} trigger="click">
          <span className="gx-avatar-name" id="nombreUsuarioLogeado">{localStorage.getItem('pernombre')} </span>
          <Avatar src={require('assets/images/iconoUsuario.png')} //150*150
            className="gx-size-35 gx-pointer gx-mr-3" alt=""/>
        </Popover>
      </div>


      {/* <Link to="/" className="gx-d-block gx-d-lg-none gx-pointer">
        <img alt="" src={require("assets/images/w-logo.png")}/></Link> */}
      {/* <SearchBox styleName="gx-d-none gx-d-lg-block gx-lt-icon-search-bar-lg"
                 placeholder="Search in app..."
                 onChange={updateSearchChatUser}
                 value={searchText}/> */}
      {/* <ul className="gx-header-notifications gx-ml-auto">
        <li className="gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none">
          <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={
            <SearchBox styleName="gx-popover-search-bar"
                       placeholder="Search in app..."
                       onChange={updateSearchChatUser}
                       value={searchText}/>
          } trigger="click">
            <span className="gx-pointer gx-d-block"><i className="icon icon-search-new"/></span>
          </Popover>
        </li>
        {width >= TAB_SIZE ? null :
          <Auxiliary>
            <li className="gx-notify">
              <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={<AppNotification/>}
                       trigger="click">
                <span className="gx-pointer gx-d-block"><i className="icon icon-notification"/></span>
              </Popover>
            </li>

            <li className="gx-msg">
              <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight"
                       content={<MailNotification/>} trigger="click">
                  <span className="gx-pointer gx-status-pos gx-d-block">
                    <i className="icon icon-chat-new"/>
                    <span className="gx-status gx-status-rtl gx-small gx-orange"/>
                  </span>
              </Popover>
            </li>
          </Auxiliary>
        }
        <li className="gx-language">
          <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={languageMenu()}
                   trigger="click">
                <span className="gx-pointer gx-flex-row gx-align-items-center">
                  <i className={`flag flag-24 flag-${locale.icon}`}/>
                  <span className="gx-pl-2 gx-language-name">{locale.name}</span>
                  <i className="icon icon-chevron-down gx-pl-2"/>
                </span>
          </Popover>
        </li>
        {width >= TAB_SIZE ? null :
          <Auxiliary>
            <li className="gx-user-nav"><UserInfo/></li>
          </Auxiliary>
        }
      </ul>
     */}
    </Header>
  );
};

export default Topbar;
