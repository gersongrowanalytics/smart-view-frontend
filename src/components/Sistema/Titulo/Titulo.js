import React from 'react'
import {Col, Row} from "antd"
import './Estilos/Titulo.css'
import config from 'config'
import BotonDescargar from './BotonDescargar'

const Titulo = (props) => {
    
    const {tieneFecha, tieneTitulo, tieneBotonDescargar, tieneIcono, titulo, tprid, fechaActual} = props;

    

    return (
        <Row>
            {
                tieneIcono
                ?<img src={config.api+'/Sistema/tiposPromociones/img/iconos/carrito.png'} 
                    className={tprid == 1 ? "iconoTipoPromocionSellIn" : "iconoTipoPromocion"}/>
                :null
            }
            <Col xl={tieneIcono == true ?22 :24} md={tieneIcono == true ?22 :24} sm={tieneIcono == true ?22 :24} xs={tieneIcono == true ?22 :24}>
                <span className={
                    tieneTitulo 
                    ?tprid == 1
                        ?`titulo-subrayado gx-flex-row` 
                        :`titulo-subrayado gx-flex-row subrayado-verde` 
                    :`gx-flex-row`
                }>                    
                    {
                        tieneBotonDescargar == true
                        ?<BotonDescargar />
                        :null
                    }
                    {
                        tieneTitulo
                        ?<div id={ tprid == 1 ?"tituloModuloVentasSellIn" :"tituloModuloVentas"}> {titulo}</div>
                        :null
                    }
                    {
                        tieneFecha == true
                        ?<div id="contenedorActualizacion" className="gx-fs-md gx-ml-auto" style={tieneIcono==true?{marginRight:'-35px'}:{}}>
                            <p className="ultimaActualizacion">Actualización {fechaActual}</p>
                        </div>
                        :null
                    }
                </span>
            </Col>
        </Row>
    )
}

export default Titulo
