import React from 'react'
import {Col, Row} from "antd";
import './estilos/CardRebate.css'
import config from 'config'
import NumberFormat from 'react-number-format';
import funFomratoDecimal from '../../funciones/funFormatoDecimal.js'

const CardRebate = (props) => {

    const {nombreTipoPromocion, rebateValorizado} = props

    return (
        <div style={{background:'#5A7DD5', width:'100%', marginBottom:'20px', paddingRight:'15px', borderRadius:'20px', boxShadow: '9px 6px 9px -1px rgba(0, 0, 0, 0.2)'}} >
            <Row>
                <Col xl={6} md={8} sm={6} xs={12} >
                    <div style={{width:'127px', height:'120px', backgroundImage: "url('"+config.api+"Sistema/abs/img/rebate.png')", backgroundSize: 'cover', backgroundPosition:'center', }} />
                </Col>
                <Col xl={18} md={16} sm={18} xs={12}>
                    <Row style={{paddingTop:'20px',}}>
                        <Col xl={24} md={24} sm={24} xs={24}>
                            <h2 className="gx-text-white" id="tituloRebate">Rebate {nombreTipoPromocion}</h2>
                        </Col>
                        <Col xl={8} md={8} sm={8} xs={24} style={{ borderRightStyle:'solid', borderRightColor:'white', paddingRight:'1px', alignSelf:'center', textAlignLast: 'left', height:'43px', paddingTop:'10px'}}>
                            <span className="gx-text-center gx-text-white" id="textoRebate">
                                S/.<NumberFormat value={funFomratoDecimal(rebateValorizado, 0)} displayType={'text'} thousandSeparator={true} />
                            </span>
                        </Col>
                        <Col xl={16} md={16} sm={16} xs={24}>
                            <span className="gx-text-white" id="textoRebate">El pago de Rebate se ejecutará, de llegar a la cuota establecida</span>
                        </Col>
                    </Row>
                </Col>
            </Row>        
        </div>
    )
}

export default CardRebate
