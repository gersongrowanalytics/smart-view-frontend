import React from "react";
import {Col, Row, Form, Input} from "antd";
import Widget from "components/Widget";
import AcercaDeItem from "./AcercaDeItem";

const AcercaDe = (props) => {
    
    return (
      <Widget title="Acerca de" styleName="gx-card-tabs gx-card-tabs-right gx-card-profile">
        <div className="gx-mb-2">
          <Row>
            <Col key={1} xl={8} lg={12} md={12} sm={12} xs={24}>
              {
                <AcercaDeItem 
                  data = {{
                          id: 1,
                          title: 'Compañia',
                          icon: 'company',
                          userList: '',
                          desc: [props.datosUsuario.usuorganizacion],
                          editarPerfil : props.editarPerfil,
                          name : "usuorganizacion",
                        }}
                />
              }
            </Col>

            <Col key={2} xl={8} lg={12} md={12} sm={12} xs={24}>
              <AcercaDeItem 
                data = {{                   
                      id: 2,
                      title: 'Fecha de Nacimiento',
                      icon: 'birthday-new',
                      userList: '',
                      desc: [props.datosUsuario.perfechanacimiento],
                      editarPerfil : props.editarPerfil,
                      name : "perfechanacimiento",
                    }}
              />
            </Col>
            
            <Col key={4} xl={8} lg={12} md={12} sm={12} xs={24}>
              <AcercaDeItem 
                data = {{
                        id: 4,
                        title: 'Dirección',
                        icon: 'home',
                        userList: '',
                        desc: [props.datosUsuario.perdireccion],
                        editarPerfil : props.editarPerfil,
                        name : "perdireccion",
                      }}
              />
            </Col>

            <Col key={3} xl={8} lg={12} md={12} sm={12} xs={24}>
              <AcercaDeItem 
                data = {{
                        id: 3,
                        title: 'Usuario',
                        icon: 'user',
                        userList: '',
                        desc: [props.datosUsuario.usuusuario],
                        editarPerfil : props.editarPerfil,
                        name : "usuusuario",
                      }}
              />
            </Col>

            

            <Col key={5} xl={8} lg={12} md={12} sm={12} xs={24}>
              <AcercaDeItem 
                data = {{
                        id: 5,
                        title: 'Contraseña',
                        icon: 'forgot-password',
                        desc: ['**********'],
                        editarPerfil : props.editarPerfil,
                        name : "usucontrasena",
                      }}
              />
            </Col>
          </Row>
        </div>
      </Widget>
    );
}


export default AcercaDe;
