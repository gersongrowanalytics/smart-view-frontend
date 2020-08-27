import React from 'react'
import {Col, Row, Card, Divider} from "antd";

const CardPromocion = () => {
    return (
        <Col xl={12} sm={12} xs={24} md={12} > 
            <Card>
                <Divider><h1 style={{color:'#F93258'}}>MAYORITA</h1></Divider><br/>
                <Row style={{marginTop:'10px'}}> 
                    <Col xl={12} sm={24} xs={24} md={24}> 
                        <div className={` gx-product-vertical`}>
                            <div className="">
                                <div className="gx-grid-thumb-equal">
                                    <span className="gx-link gx-grid-thumb-cover">
                                        <div style={{width:'100%', height:'100%', backgroundImage: "url('https://cdn.pixabay.com/photo/2015/05/26/12/31/baby-784609_1280.jpg')", backgroundSize: 'cover'}} >
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="gx-product-body">
                                <Row style={{paddingBottom:'15px'}}>
                                    <Col xl={24} sm={24} xl={24} xs={24}>
                                        <div className="gx-text-center">
                                            <h1 style={{color:'#F93258'}}>5 COMBOS</h1>
                                        </div>
                                    </Col>
                                    <Col xl={24} sm={24} xl={24} xs={24}>
                                        <div className="gx-text-center">
                                            <strong>{"1 duo pack 10 x 02 y otros recurso unitarios que agregen "}</strong>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xl={12} sm={24} xs={24} md={24}> 
                        <div className={` gx-product-vertical`}>
                            <div className="">
                                <div className="gx-grid-thumb-equal">
                                    <span className="gx-link gx-grid-thumb-cover">
                                        <div style={{width:'100%', height:'100%', backgroundImage: "url('https://cdn.pixabay.com/photo/2015/05/26/12/31/baby-784609_1280.jpg')", backgroundSize: 'cover'}} >
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="gx-product-body">
                                <Row style={{paddingBottom:'15px'}}>
                                    <Col xl={24} sm={24} xl={24} xs={24}>
                                        <div className="gx-text-center">
                                            <h1 style={{color:'#F93258'}}>GRATIS</h1>
                                        </div>
                                    </Col>
                                    <Col xl={24} sm={24} xl={24} xs={24}>
                                        <div className="gx-text-center">
                                            <strong>{""}</strong>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}

export default CardPromocion
