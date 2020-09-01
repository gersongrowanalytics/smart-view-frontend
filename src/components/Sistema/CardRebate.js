import React from 'react'
import {Col, Row} from "antd";
import './estilos/CardRebate.css'

const CardRebate = (props) => {

    const {rebateValorizado} = props

    return (
        <div style={{background:'#5A7DD5', width:'100%', padding:'20px', marginBottom:'20px', borderRadius:'20px', boxShadow: '9px 6px 9px -1px rgba(0, 0, 0, 0.2)'}} >
            <Row>
                <Col xl={4} md={8} sm={4} xs={12} >
                    <div style={{width:'100%', height:'100%', backgroundImage: "url('http://gro.gavsistemas.com/Sistema/abs/img/rebate.png')", backgroundSize: 'cover', backgroundPosition:'center'}} />
                </Col>
                <Col xl={20} md={16} sm={20} xs={12}>
                    <Row>
                        <Col xl={24} md={24} sm={24} xs={24}>
                            <h2 className="gx-text-white" id="tituloRebate">Rebate Sell In</h2>
                        </Col>
                        <Col xl={8} md={24} sm={8} xs={24} style={{ borderRightStyle:'solid', borderRightColor:'white', paddingRight:'20px', alignSelf:'center'}}>
                            <h2 className="gx-text-center gx-text-white" id="textoRebate">S/100.0</h2>
                        </Col>
                        <Col xl={16} md={24} sm={16} xs={24}>
                            <p className="gx-text-white" id="textoRebate">El pago de Rebate se ejecutara, de llegar a la cuota establecida</p>
                        </Col>
                    </Row>
                </Col>
            </Row>        
        </div>
    )
}

export default CardRebate
