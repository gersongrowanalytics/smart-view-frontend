import React from 'react'
import {Col, Row} from "antd";
import NumberFormat from 'react-number-format';
import funFomratoDecimal from 'funciones/funFormatoDecimal.js'
import 'styles/Sistema/Ventas/RebateBonus/CardResultadoRebateBonus.css'

const CardResultadoRebateBonus = (props) => {



    return (
        <div style={{
            background:'#FDA019', 
            width:'100%',
            height:'145px', 
            marginBottom:'20px', 
            paddingRight:'15px', 
            borderRadius:'12px', 
            boxShadow: '9px 6px 9px -1px rgba(0, 0, 0, 0.2)',
            paddingLeft: '31px',
            paddingTop:'18px'
        }} >
            <Row>
                <Col 
                    xl={24} 
                    md={24} 
                    sm={24} 
                    xs={24} 
                    id={""}>
                    <Row>
                        <Col xl={24} md={24} sm={24} xs={24} >
                            <div id="titulo-resultado-rebatebonus">REBATE BONUS:</div>
                        </Col>
                    </Row>

                    
                    <Row style={{marginTop:'10px', marginBottom:'20px'}}>
                        <Col xl={10} md={10} sm={10} xs={10} >
                            <div id="txt-resultado-rebatebonus">
                                0.5%
                            </div>
                        </Col>
                        <Col xl={10} md={10} sm={10} xs={10} style={{textAlign: 'right'}}>
                            <div id="txt-resultado-rebatebonus">
                                = S/<NumberFormat value={
                                        funFomratoDecimal(props.rebateBonus.rebate, 0)} displayType={'text'} thousandSeparator={true} />
                                

                            </div>
                        </Col>
                    </Row>
                    
                    
                    <div id="lineaResltado-resultado-rebatebonus"></div>

                    <Row>
                        <Col xl={10} md={10} sm={10} xs={10} >
                            <div id="txtResultado-resultado-rebatebonus">Rebate Bonus </div>
                        </Col>
                        <Col xl={10} md={10} sm={10} xs={10} style={{textAlign: 'right'}} >
                            <div id="txtResultado-resultado-rebatebonus">
                            S/<NumberFormat 
                                value={funFomratoDecimal((props.rebateBonus.rebate), 0)} 
                                displayType={'text'} 
                                thousandSeparator={true} />
                            </div>
                        </Col>
                    </Row>
                </Col>
                
                
            </Row>        
        </div>
    )
}

export default CardResultadoRebateBonus
