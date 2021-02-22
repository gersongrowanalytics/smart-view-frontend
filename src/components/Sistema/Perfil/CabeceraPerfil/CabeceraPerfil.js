import React from "react";
import {Avatar} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {CambiarEstadoEdicionPerfilReducer, EditarPerfilReducer} from "appRedux/actions/Perfil/Perfil";

const CabeceraPerfil = (props) => {
  const dispatch = useDispatch();
  
  return (
    <div className="gx-profile-banner">
      <div className="gx-profile-container">
        <div className="gx-profile-banner-top">
          <div className="gx-profile-banner-top-left">
            <div className="gx-profile-banner-avatar">
              <Avatar className="gx-size-90" alt="..." src={require('assets/images/iconoUsuario.png')}/>
            </div>
            <div className="gx-profile-banner-avatar-info">
              <h2 className="gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light">{localStorage.getItem('pernombrecompleto')}</h2>
              <p className="gx-mb-0 gx-fs-lg">{localStorage.getItem('tpunombre')}</p>
            </div>
          </div>
          <div className="gx-profile-banner-top-right">
            <ul className="gx-follower-list">
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">S/0.00</span>
                <span className="gx-fs-sm">Rebate Real</span></li>
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">S/0.00</span>
                <span className="gx-fs-sm">Rebate Bonus</span></li>
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">S/</span>
                <span className="gx-fs-sm">Rebate Trimestral</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="gx-profile-banner-bottom">
          {/* <div className="gx-tab-list">
            <ul className="gx-navbar-nav">
              <li>
                <span className="gx-link">Timeline</span>
              </li>
              <li>
                <span className="gx-link">About</span>
              </li>
              <li>
                <span className="gx-link">Photos</span>
              </li>
              <li>
                <span className="gx-link">Friends <span className="gx-fs-xs">287</span></span>
              </li>
              <li>
                <span className="gx-link">More</span>
              </li>
            </ul>
          </div> */}

          {
            props.editarPerfil
            ?<span className="gx-link gx-profile-setting">
              <div onClick={() => {dispatch(EditarPerfilReducer(props.datosFormulario))}}>
                <i className="icon icon-check-circle-o gx-fs-lg gx-mr-2 gx-mr-sm-3 gx-d-inline-flex gx-vertical-align-middle"/>
                <span className="gx-d-inline-flex gx-vertical-align-middle gx-ml-1 gx-ml-sm-0">Guardar</span>
              </div>
              <div style={{marginBottom:'5px'}} />
              <div onClick={() => {dispatch(CambiarEstadoEdicionPerfilReducer(!props.editarPerfil))}}>
                <i className="icon icon-close-circle gx-fs-lg gx-mr-2 gx-mr-sm-3 gx-d-inline-flex gx-vertical-align-middle"/>
                <span className="gx-d-inline-flex gx-vertical-align-middle gx-ml-1 gx-ml-sm-0">Cancelar</span>
              </div>
            </span>

            :<span className="gx-link gx-profile-setting" onClick={() => {dispatch(CambiarEstadoEdicionPerfilReducer(!props.editarPerfil))}}>
              <i className="icon icon-edit gx-fs-lg gx-mr-2 gx-mr-sm-3 gx-d-inline-flex gx-vertical-align-middle"/>
              <span className="gx-d-inline-flex gx-vertical-align-middle gx-ml-1 gx-ml-sm-0">Editar</span>
            </span>
          }
          
        </div>
      
      </div>
    </div>
  )
};

export default CabeceraPerfil;
