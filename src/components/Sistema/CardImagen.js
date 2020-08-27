import React from 'react'
import {Col, Row, Tooltip} from "antd";

const CardImagen = (props) => {

    const {nombreCategoria, iconoCategoria, fondoCategoria, objetivoCategoria, realCategoria, togoCategoria} = props

    return (
        <div className={`gx-product-item gx-product-vertical'`}>
            {/* <div className="gx-product-image"> */}
            <div className="">
                <div className="gx-grid-thumb-equal" style={{height:'250px'}}>
                    <span className="gx-link gx-grid-thumb-cover" >
                        <div style={{width:'100%', height:'100%', backgroundImage: "url("+fondoCategoria+")", backgroundSize: '100% 100%', backgroundRepeat:'no-repeat' }} >
                            <Row style={{ paddingTop:'5%', background:'rgba(229,230,230,0.7)', height:'100%'}}>
                                <Col md={24} xl={24} sm={24} xs={24}>
                                    <div className="gx-text-center" >
                                        <div className="gx-flex-row gx-justify-content-center gx-mb-3 gx-mb-sm-1">
                                            <span
                                                className={`gx-size-80 gx-border gx-border-white gx-text-red gx-flex-row gx-justify-content-center gx-align-items-center gx-rounded-circle`}
                                                style={{background:'#fff'}}
                                            >
                                                <img alt="Remy Sharp" src={iconoCategoria}/> 
                                            </span>
                                        </div>
                                        <strong className="gx-text-black">{nombreCategoria}</strong>
                                        <p style={{color:'#666666'}}>Cumplimiento<br/>xxx%</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </span>
                </div>
            </div>

            <div className="gx-line-indi-info">
                {/* real=30; togo=70 --  70*100/30 */}
                <div className={`gx-line-indi`} style={{background:'#F2F2F2', width: '100%', height: 15, margin: '10px', borderRadius: 50}}>
                    <Tooltip title={"Real S/ "+realCategoria}>
                        <div className={``} style={{ background: 'linear-gradient(180deg, #FDA019 0%, #FCDE30 54.17%, #FDA019 100%)', width: realCategoria+'%', height: 15, borderRadius: 50}} >
                            <Tooltip title={"To Go S/ "+ togoCategoria}>
                                <div className={``} style={{ background:'transparent', width: (togoCategoria*100)/realCategoria+'%', height: 15, marginLeft:'100%'}} />
                            </Tooltip>
                        </div>
                    </Tooltip>
                </div>
            </div>

            <div className="gx-product-body">
                {/* <Row style={{'padding-bottom':'15px'}}>
                    <Col xl={12} sm={12} xl={12} xs={12}>
                        <div className="gx-text-center">
                            <strong>{"Real"}</strong>
                        </div>
                    </Col>
                    <Col xl={12} sm={12} xl={12} xs={12}>
                        <strong style={{'background': '#F2F2F2', 'padding':'5px'}} >{"S/ XXX"}</strong>
                    </Col>
                </Row> */}
                <Row style={{'background': 'rgba(229, 229, 229, 0.66)', 'padding':'5px', borderRadius:'12px'}}>
                    <Col xl={24} sm={24} xl={24} xs={24}>
                        <div className="gx-text-center">
                            <strong>{"Objetivo S/. "+objetivoCategoria}</strong>
                        </div>
                    </Col>
                    {/* <Col xl={18} sm={18} xl={18} xs={18}>
                        <strong >{"S/ "+objetivoCategoria}</strong>
                    </Col> */}
                </Row>
                {/* <Row>
                    <Col xl={12} sm={12} xl={12} xs={12}>
                        <div className="gx-text-center">
                            <strong>{"To Go"}</strong>
                        </div>
                    </Col>
                    <Col xl={12} sm={12} xl={12} xs={12}>
                        <strong style={{'background': '#F2F2F2', 'padding':'5px'}} >{"S/ XXX"}</strong>
                    </Col>
                </Row> */}
            </div>
        </div>
    )
}

export default CardImagen
