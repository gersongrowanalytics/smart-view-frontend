import React from 'react'
import Auxiliary from "util/Auxiliary";
import {Col, Row} from "antd";
import TablaUsuarios from './Tablas/TablaUsuarios'
import TablaEjecutivos from './Tablas/TablaEjecutivos'

const Usuarios = () => {
    return (
        <Auxiliary>
            <Row>
                <Col xl={24} md={24} sm={24} xs={24}>
                    <TablaUsuarios />
                </Col>
                <Col xl={24} md={24} sm={24} xs={24}>
                    <TablaEjecutivos />
                </Col>
            </Row>
        </Auxiliary>
    )
}

export default Usuarios
