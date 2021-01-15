import React from "react";
import Widget from "components/Widget";

const Contacto = (props) => {
  
  return (
    <Widget title="Contacto" styleName="gx-card-profile-sm">
        <div key={1} className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
            <div className="gx-mr-3">
                <i className={`icon icon-email gx-fs-xxl gx-text-grey`}/>
            </div>
            <div className="gx-media-body">
                <span className="gx-mb-0 gx-text-grey gx-fs-sm">Email</span>
                <p className="gx-mb-0"><span className="gx-link" key={1}>{props.datosUsuario.usucorreo}</span></p>
            </div>
        </div>

        <div key={1} className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
            <div className="gx-mr-3">
                <i className={`icon icon-phone gx-fs-xxl gx-text-grey`}/>
            </div>
            <div className="gx-media-body">
                <span className="gx-mb-0 gx-text-grey gx-fs-sm">Celular</span>
                <p className="gx-mb-0"><span className="gx-link" key={2}>{props.datosUsuario.percelular}</span></p>
            </div>
        </div>
    </Widget>
  )
}

export default Contacto;
