import React from 'react'
import {Col, Row} from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import './estilos/Titulo.css'
import config from 'config'

const Titulo = (props) => {

    const {tieneFecha, tieneTitulo, tieneBotonDescargar, tieneIcono, titulo, tprid} = props;

    return (
        <Row>
            {
                tieneIcono
                ?<img src={config.api+'/Sistema/tiposPromociones/img/iconos/carrito.png'} 
                    className="iconoTipoPromocion"/>
                :null
            }
            <Col xl={22} md={22} sm={22} xs={22}>
                <span className={
                    tieneTitulo 
                    ?tprid == 1
                        ?`titulo-subrayado gx-flex-row` 
                        :`titulo-subrayado gx-flex-row subrayado-verde` 
                    :`gx-flex-row`
                }>                    
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
                        ?<div id="contenedorActualizacion" className="gx-fs-md gx-ml-auto">
                            <p className="ultimaActualizacion">Actualización 10 de Agosto del 2020</p>
                        </div>
                        :null
                    }
                </span>
            </Col>
        </Row>
    )
}

export default Titulo
