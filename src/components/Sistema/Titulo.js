import React from 'react'
import {Col, Row} from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import './estilos/Titulo.css'
import config from 'config'

const Titulo = (props) => {

    const {tieneFecha, tieneTitulo, tieneBotonDescargar, tieneIcono, titulo} = props;

    return (
        <Row>
            {
                tieneIcono
                ?<Col xl={1} md={1} sm={1} xs={1}>
                    {/* <i className="icon icon-shopping-cart gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"/> */}
                    <img src={config.api+'/Sistema/tiposPromociones/img/iconos/carrito.png'} className="gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"/>
                </Col>
                :null
            }
            <Col xl={23} md={23} sm={23} xs={23}>
                <h2 className={tieneTitulo ?`titulo-subrayado gx-flex-row` :`gx-flex-row`}>
                    {
                        tieneBotonDescargar == true
                        ?<button type="button" class="ant-btn ant-btn-lg btnDescargar">
                            <span>Download</span> <DownloadOutlined /> 
                        </button>
                        :null
                    }
                    {
                        tieneTitulo
                        ?<span id="tituloModuloVentas"> {titulo}</span>
                        :null
                    }
                    {
                        tieneFecha == true
                        ?<span className="gx-text-black gx-fs-md gx-ml-auto  gx-d-sm-block">
                            <span className="ultimaActualizacion">Actualización 10 de Agosto del 2020</span>
                        </span>
                        :null
                    }
                </h2>
            </Col>
        </Row>
    )
}

export default Titulo
