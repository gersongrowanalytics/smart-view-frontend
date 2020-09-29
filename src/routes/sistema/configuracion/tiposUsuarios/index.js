import React from 'react'
import TablaTiposUsuarios from './tablas/tablaTiposUsuarios'
import Auxiliary from "util/Auxiliary";
import {Col, Row} from "antd";

const Permisos = () => {
    return (
        <Auxiliary>
            <Row>
                <Col xl={24} md={24} sm={24} xs={24}>
                    <TablaTiposUsuarios />
                </Col>
            </Row>
        </Auxiliary>
    )
}

export default Permisos
