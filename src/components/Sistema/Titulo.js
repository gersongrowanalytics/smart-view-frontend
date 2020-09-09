import React from 'react'
import {Col, Row} from "antd";
import './estilos/Titulo.css'
import config from 'config'
import {descargarInformacionPromocionesReducer} from 'appRedux/actions/Promociones'
import {useDispatch, useSelector} from "react-redux";

const Titulo = (props) => {
    const dispatch = useDispatch();
    const {tieneFecha, tieneTitulo, tieneBotonDescargar, tieneIcono, titulo, tprid} = props;

    const descargarPromociones = async () =>  {
        await dispatch(descargarInformacionPromocionesReducer())
    }

    return (
        <Row>
            {
                tieneIcono
                ?<img src={config.api+'/Sistema/tiposPromociones/img/iconos/carrito.png'} 
                    className="iconoTipoPromocion"/>
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
                        ?<button 
                            type="button" 
                            class="ant-btn ant-btn-lg btnDescargar"
                            onClick={() => {descargarPromociones()}}
                            
                        >
                            <span>Descargar</span> <img alt="" src={require("assets/images/iconoDescargar.png")} style={{marginLeft:'10px'}} width="28px" height="26px"/>
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
                        ?<div id="contenedorActualizacion" className="gx-fs-md gx-ml-auto" style={tieneIcono==true?{marginRight:'-35px'}:{}}>
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
