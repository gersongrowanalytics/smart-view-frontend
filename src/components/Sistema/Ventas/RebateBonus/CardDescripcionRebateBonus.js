import React from 'react'
import 'styles/Sistema/Ventas/RebateBonus/CardDescripcionRebateBonus.css'
import {Col, Row} from "antd";

const CardDescripcionRebateBonus = (props) => {
    return (
        <Row id="contenedor-descripcion-rebate-bonus">
            

            <Col xl={24} md={24} sm={24} xs={24} id="contenedor-texto-descripcion-rebate-bonus">
                <div className="contenedor-texto-centrado-rebate-bonus">
                    <div>
                        <div className="titulo-texto-centrado-rebate-bonus">
                            El cliente podrá acceder a un rebate denominado “Bonus” de 0.5 %, siempre que cumpla con lo siguiente:
                        </div>
                        <div className="texto-centrado-rebate-bonus">
                            {/* Cumplimiento de la cuota NIV al 100% sin incluir la categoría wipes. De lograr el cumplimiento, este rebate será cancelado el mes siguiente. */}
                            {props.rebateBonus.descripcion}
                        </div>
                    </div>
                </div>
            </Col>
            <Col xl={24} md={24} sm={24} xs={24} id="contenedor-imagen-descripcion-rebate-bonus">
                <img src={require('assets/images/rebateBonus/RebateTexto.png')} class="imagen-texto-descripcion-rebate-bonus" width="160" height="160" />
                <img src={require('assets/images/rebateBonus/RebateCirculo.png')} id="imagen-circulo-descripcion-rebate-bonus"/>
                <img src={require('assets/images/rebateBonus/RebateEstrella.png')} class="imagen-estrella-descripcion-rebate-bonus" width="160" height="160" />
            </Col>

        </Row>
        // <div >
        //     <div>
        //         <div id="">

        //         </div>
        //         <div id="fondo-descripcion-rebate-bonus">
        //             <span>
        //                 El cliente podrá acceder a un rebate denominado “Bonus” de 0.5 %, siempre que cumpla con lo siguiente:
        //                 Cumplimiento de la cuota NIV al 100% sin incluir la categoría wipes. De lograr el cumplimiento, este rebate será cancelado el mes siguiente.
        //             </span>
        //         </div>
        //     </div>
        // </div>
    )
}

export default CardDescripcionRebateBonus
