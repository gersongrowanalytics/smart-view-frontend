import React from 'react'
import {Col, Row} from "antd";
import './estilos/CardAvance.css'
import config from 'config'

const CardAvance = (props) => {

    const { objetivoValorizado, realValorizado, togoValorizado, cumplimientoPorcentaje, nombreTipoPromocion } = props

    return (
        <div style={{background:'#30C0D8', width:'100%', paddingRight:'55px', marginBottom:'20px', borderRadius:'20px', boxShadow: '9px 6px 9px -1px rgba(0, 0, 0, 0.2)'}} >
            <Row>
                <Col xl={6} md={8} sm={6} xs={12}>
                    <div style={{width:'127px', height:'120px', backgroundImage: "url('"+config.api+"Sistema/abs/img/avance-de-venta.png')", backgroundSize: 'cover', backgroundPosition:'center'}} />
                </Col>
                <Col xl={18} md={16} sm={18} xs={12}>
                    <Row style={{marginRight:'10px', paddingTop:'20px',}}>
                        <Col xl={24} md={24} sm={24} xs={24}>
                            <h2 className="gx-text-white" id="tituloAvance">Avance de Venta {nombreTipoPromocion}</h2>
                        </Col>
                        <Col xl={6} md={12} sm={6} xs={24} className="gx-text-center gx-text-white" style={{ borderRightStyle:'solid', borderRightColor:'white', paddingRight:'20px', alignSelf:'center'}}>
                            <p id="datosAvance">OBJ<br/>S/. {objetivoValorizado}</p>
                        </Col>
                        <Col xl={6} md={12} sm={6} xs={24} className="gx-text-center gx-text-white" style={{ borderRightStyle:'solid', borderRightColor:'white', paddingRight:'20px', alignSelf:'center'}}>
                            <p id="datosAvance">REAL<br/>S/. {realValorizado}</p>
                        </Col>
                        <Col xl={6} md={12} sm={6} xs={24} className="gx-text-center gx-text-white" style={{ borderRightStyle:'solid', borderRightColor:'white', paddingRight:'20px', alignSelf:'center'}}>
                            <p id="datosAvance">TO GO<br/>S/. {togoValorizado}</p>
                        </Col>
                        <Col xl={6} md={12} sm={6} xs={24} className="gx-text-center gx-text-white" >
                            <p id="datosAvance">CUMPLIMIENTO<br/>% {cumplimientoPorcentaje}</p>
                        </Col>
                    </Row>
                </Col>
            </Row> 
        </div>
    )
}

export default CardAvance
