import React from 'react'
import {Col, Row} from "antd";
import Auxiliary from "util/Auxiliary";
import ProjectWidget from "components/Widgets/ProjectWidget";

const SellIn = () => {
    return (
        <Auxiliary>
            <Row>
                <Col xl={6} lg={12} md={12} sm={12} xs={24}>
                    <ProjectWidget/>
                </Col>
            </Row>
        </Auxiliary>
    )
}

export default SellIn
