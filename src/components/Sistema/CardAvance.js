import React from 'react'
import {Col, Row} from "antd";
import './estilos/CardAvance.css'
import config from 'config'
import NumberFormat from 'react-number-format';
import funFomratoDecimal from '../../funciones/funFormatoDecimal.js'

const CardAvance = (props) => {

    const { objetivoValorizado, realValorizado, togoValorizado, cumplimientoPorcentaje, nombreTipoPromocion } = props

    return (
        <div style={{background:'#30C0D8', width:'100%', paddingRight:'20px', marginBottom:'20px', borderRadius:'20px', boxShadow: '9px 6px 9px -1px rgba(0, 0, 0, 0.2)'}} >
            <Row>
                <Col xl={6} md={8} sm={6} xs={12}>
                    <div style={{width:'127px', height:'120px', backgroundImage: "url('"+config.api+"Sistema/abs/img/avance-de-venta.png')", backgroundSize: 'cover', backgroundPosition:'center'}} />
                </Col>
                <Col xl={18} md={16} sm={18} xs={12}>
                    <Row style={{marginRight:'1px', paddingTop:'20px',}}>
                        <Col xl={24} md={24} sm={24} xs={24}>
                            <h2 className="gx-text-white" id="tituloAvance">Avance de Venta {nombreTipoPromocion}</h2>
                        </Col>
                        <Col xl={6} md={6} sm={6} xs={24} className="gx-text-center gx-text-white" style={{ borderRightStyle:'solid', borderRightColor:'white', paddingRight:'20px', alignSelf:'center'}}>
                            <p id="datosAvance">OBJ<br/>S/. 
                                <NumberFormat value={funFomratoDecimal(objetivoValorizado, 0)} displayType={'text'} thousandSeparator={true} />
                            </p>
                        </Col>
                        <Col xl={6} md={6} sm={6} xs={24} className="gx-text-center gx-text-white" style={{ borderRightStyle:'solid', borderRightColor:'white', paddingRight:'20px', alignSelf:'center'}}>
                            <p id="datosAvance">REAL<br/>S/. 
                                <NumberFormat value={funFomratoDecimal(realValorizado, 0)} displayType={'text'} thousandSeparator={true} />
                            </p>
                        </Col>
                        <Col xl={6} md={6} sm={6} xs={24} className="gx-text-center gx-text-white" style={{ borderRightStyle:'solid', borderRightColor:'white', paddingRight:'20px', alignSelf:'center'}}>
                            <p id="datosAvance">FACTURAR<br/>S/. 
                                {/* <NumberFormat value={funFomratoDecimal(togoValorizado, 0)} displayType={'text'} thousandSeparator={true} /> */}
                                <NumberFormat value={funFomratoDecimal((realValorizado-objetivoValorizado), 0)} displayType={'text'} thousandSeparator={true} />
                            </p>
                        </Col>
                        <Col xl={6} md={6} sm={6} xs={24} className="gx-text-center gx-text-white" >
                            <p id="datosAvance">CUMPLIMIENTO<br/> 
                                <NumberFormat value={funFomratoDecimal( ((100*realValorizado)/objetivoValorizado), 0)} displayType={'text'} thousandSeparator={true} />
                                %
                            </p>
                            {/* <p id="datosAvance">CUMPLIMIENTO<br/>% {funFomratoDecimal(cumplimientoPorcentaje, 0)}</p> */}
                        </Col>
                    </Row>
                </Col>
            </Row> 
        </div>
    )
}

export default CardAvance
