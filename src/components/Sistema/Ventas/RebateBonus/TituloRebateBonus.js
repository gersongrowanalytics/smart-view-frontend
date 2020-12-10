import React from 'react'
import {Col, Row} from "antd"
import 'styles/Sistema/Ventas/RebateBonus/TituloRebateBonus.css'
import config from 'config'

const RebateBonus = () => {
    return (
        <Row id="contenedorTituloRebateBonus">
            <img src={config.api+'/Sistema/tiposPromociones/img/iconos/carrito.png'} className={"iconoRebateBonus"}/>

            <Col xl={22} md={22} sm={22} xs={22}>
                <span className={"titulo-subrayado-rebate-bonus gx-flex-row"}>                    
                    <div id={"tituloRebateBonus"}> {"REBATE BONUS"}</div>
                </span>
            </Col>
        </Row>
    )
}

export default RebateBonus
