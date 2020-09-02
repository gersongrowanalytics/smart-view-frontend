import React from 'react'
import {Col, Row, Tooltip} from "antd";
import './estilos/CardImagen.css'
const CardImagen = (props) => {

    const {nombreCategoria, iconoCategoria, fondoCategoria, objetivoCategoria, realCategoria, togoCategoria, tprcolorbarra, tprcolortooltip, scaiconocategoria} = props

    return (
        <div className={`gx-product-item gx-product-vertical'`} style={{background:'transparent'}}>
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
                                                <img alt="Remy Sharp" src={scaiconocategoria}/> 
                                            </span>
                                        </div>
                                        <span className="nombreCategoriaCard">{nombreCategoria}</span>
                                        <p className="txtCumplimiento">Cumplimiento<br/>xxx%</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </span>
                </div>
            </div>

            <div className="gx-line-indi-info" style={{background:'#F8F8F8'}}> 
                {/* real=30; togo=70 --  70*100/30 */}
                <div className={`gx-line-indi`} style={{background:'#F2F2F2', width: '100%', height: 18, margin: '10px', borderRadius: 50}}>
                    <Tooltip title={"Real S/ "+realCategoria} >
                        <div className={``} style={{ background: 'linear-gradient('+tprcolorbarra+')', width: realCategoria+'%', height: 18, borderRadius: 50}} >
                            <Tooltip title={"To Go S/ "+ togoCategoria} color={tprcolortooltip}>
                                <div className={``} style={{ background:'transparent', width: (togoCategoria*100)/realCategoria+'%', height: 15, marginLeft:'100%'}} />
                            </Tooltip>
                        </div>
                    </Tooltip>
                </div>
            </div>

            <div className="gx-product-body" style={{background:'#F8F8F8', margin:'-15px'}}>
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
                <Row style={{'padding':'5px', borderRadius:'12px'}}>
                    <Col xl={24} sm={24} xl={24} xs={24}>
                        <div className="gx-text-center">
                            <span className="objetivoCategoria" >{"Objetivo S/. "+objetivoCategoria}</span>
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
