import React from 'react'
import TituloRebateBonus from './TituloRebateBonus'
import CardLogicaRebateBonus from './CardLogicaRebateBonus'
import CardResultadoRebateBonus from './CardResultadoRebateBonus'
import {Col, Row} from "antd";

const RebateBonus = (props) => {

    return (
        <div>
            <TituloRebateBonus />
            <Row>
                <Col xl={24} md={24} sm={24} xs={24} />
                <Col xl={18} md={18} sm={18} xs={18} >
                    <CardLogicaRebateBonus 
                        rebateBonus  = {props.rebateBonus}
                    />
                </Col>
                <Col xl={6} md={6} sm={6} xs={6} >
                    <CardResultadoRebateBonus 
                        rebateBonus  = {props.rebateBonus}
                    />
                </Col>

                {/* <div style={{width:'59%', marginRight:'2%', marginLeft:'8px'}}>
                    <CardLogicaRebateBonus 
                        rebateBonus  = {props.rebateBonus}
                    />
                </div>

                <div style={{width:'38%'}}>
                    <CardResultadoRebateBonus 
                        rebateBonus  = {props.rebateBonus}
                    />
                </div> */}
            </Row>
        </div>
    )
}

export default RebateBonus
