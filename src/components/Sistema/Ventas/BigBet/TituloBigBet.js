import React from 'react'
import {Col, Row} from "antd"
import 'styles/Sistema/Ventas/BigBet/TituloBigBet.css'
import config from 'config'

const TituloBigBet = () => {
    return (
        <Row id="contenedorTituloBigBet">
            {/* <img src={config.api+'/Sistema/categorias/img/iconos/iconosDesactivados/BONO-21.png'} className={"iconoRebateBonus"}/> */}

            <Col xl={22} md={22} sm={22} xs={22}>
                <span className={"titulo-subrayado-bigbet gx-flex-row"}>                    
                    <div id={"tituloBigBet"}> {"BIG BETS"}</div>
                </span>
            </Col>
        </Row>
    )
}

export default TituloBigBet
