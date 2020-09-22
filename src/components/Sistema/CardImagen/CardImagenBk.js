import React from 'react'
import {Col, Row, Tooltip} from "antd";
import './Estilos/CardImagen.css'
import NumberFormat from 'react-number-format';
import funFomratoDecimal from '../../../funciones/funFormatoDecimal.js'


const CardImagen = (props) => {

    const {nombreCategoria, objetivoCategoria, realCategoria, togoCategoria, tprcolorbarra, tprcolortooltip, scaiconocategoria, catimagenfondoopaco} = props
    // const {nombreCategoria, iconoCategoria, fondoCategoria, tprcolorbarra, tprcolortooltip, scaiconocategoria, catimagenfondoopaco} = props
    // const objetivoCategoria = 100
    // const realCategoria = 0
    // const togoCategoria = 0

    return (
        <div className={`gx-product-item gx-product-vertical'`} style={{background:'transparent'}}>
            {/* <div className="gx-product-image"> */}
            <div className="" style={{background:'#E8E8E8'}}>
                <div className="gx-grid-thumb-equal" style={{height:'250px'}}>
                    <span className="gx-link gx-grid-thumb-cover" >
                        <div style={{width:'100%', height:'100%', backgroundImage: "url("+catimagenfondoopaco+")", backgroundSize: '100% 100%', backgroundRepeat:'no-repeat' }} >
                            <Row style={{   height:'100%',  background:'rgba(229,230,230,0.6)', paddingTop:'10px'}}>
                                <Col md={24} xl={24} sm={24} xs={24}>
                                    <div className="gx-text-center" >
                                        <div className="gx-flex-row gx-justify-content-center gx-mb-3 gx-mb-sm-1">
                                            <span
                                                className={` gx-text-red gx-flex-row gx-justify-content-center gx-align-items-center`}
                                            >
                                                <img alt="Remy Sharp" src={scaiconocategoria}/> 
                                            </span>
                                        </div>
                                        <span className="nombreCategoriaCard">{nombreCategoria}</span>
                                        <p className="txtCumplimiento">
                                            Cumplimiento
                                            <br/>
                                            <p id="txt_numeroCumplimiento"><NumberFormat value={funFomratoDecimal(((100*realCategoria)/objetivoCategoria), 0)} displayType={'text'} thousandSeparator={true} />%</p>
                                            
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </span>
                </div>
            </div>

            <div className="gx-line-indi-info" style={{background:'#E8E8E8'}}> 
                {/* real=30; togo=70 --  70*100/30 */}
                <div className={`gx-line-indi`} style={{background:'#F2F2F2', width: '100%', height: 18, margin: '10px', borderRadius: 50}}>
                    <Tooltip title={"Real S/ "+funFomratoDecimal(realCategoria , 0)} >
                        <div
                            className={``}
                            style={
                                // torealCategoria >= 
                                parseInt(realCategoria) >= parseInt(objetivoCategoria )
                                ?{
                                    background: 'linear-gradient('+tprcolorbarra+')',
                                    width: '100%',
                                    height: 18,
                                    borderRadius: 50
                                }
                                :{
                                    background: 'linear-gradient('+tprcolorbarra+')',
                                    width: ((100*realCategoria)/objetivoCategoria)+'%',
                                    height: 18,
                                    borderRadius: 50
                                }
                            }
                        >
                            <Tooltip 
                                title={
                                    "Facturar S/ "+ funFomratoDecimal(togoCategoria , 0)}
                                    // <NumberFormat value={funFomratoDecimal(rebateValorizado, 0)} displayType={'text'} thousandSeparator={true} /></div>
                                    color={tprcolortooltip
                                }>
                                <div 
                                    className={``} 
                                    style={{ 
                                        background:'transparent', 
                                        width: (togoCategoria*100)/realCategoria+'%', 
                                        height: 15, 
                                        marginLeft:'100%'
                                    }} />
                            </Tooltip>
                        </div>
                    </Tooltip>
                </div>
            </div>

            <div className="gx-product-body" style={{background:'#E8E8E8', margin:'-15px'}}>
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
                            <span className="objetivoCategoria" >
                                Objetivo S/. 
                                {
                                    objetivoCategoria == 0 && realCategoria == 0 && togoCategoria == 0
                                    ?0
                                    :objetivoCategoria == 100 && realCategoria == 0 && togoCategoria == 0
                                        ?0
                                        :objetivoCategoria == 100
                                            ?0
                                            :<NumberFormat value={funFomratoDecimal(objetivoCategoria, 0)} displayType={'text'} thousandSeparator={true} />
                                }
                            </span>
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