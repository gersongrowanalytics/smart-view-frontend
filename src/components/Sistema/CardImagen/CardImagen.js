import React from 'react'
import {Col, Row, Tooltip} from "antd";
import './Estilos/CardImagen.css'
import NumberFormat from 'react-number-format';
import funFomratoDecimal from '../../../funciones/funFormatoDecimal.js'
import TooltipCardImagen from './Tooltip'

const CardImagen = (props) => {

    const {tipoPromocion, nombreCategoria, objetivoCategoria, realCategoria, togoCategoria, tprcolorbarra, tprcolortooltip, scaiconocategoria, catimagenfondoopaco} = props
    // const {nombreCategoria, iconoCategoria, fondoCategoria, tprcolorbarra, tprcolortooltip, scaiconocategoria, catimagenfondoopaco} = props
    // const objetivoCategoria = 100
    // const realCategoria = 0
    // const togoCategoria = 0

    return (
        <div className={`gx-product-item gx-product-vertical'`} style={{background:'transparent'}} id="contenedorCardImagen">
            {/* <div className="gx-product-image"> */}
            <div className="" style={{background:'#E8E8E8'}}>
                <div className="gx-grid-thumb-equal" style={{height:'270px'}}>
                    <span className="gx-link gx-grid-thumb-cover" >
                        <div style={{width:'100%', height:'100%', backgroundImage: "url("+catimagenfondoopaco+")", backgroundSize: '100% 100%', backgroundRepeat:'no-repeat' }} >
                            <Row style={{   height:'100%',  background:'rgba(229,230,230,0.6)', paddingTop:'1px'}}>
                                <Col md={24} xl={24} sm={24} xs={24}>
                                    <div className="gx-text-center" >
                                        <div className="gx-flex-row gx-justify-content-center gx-mb-1 gx-mb-sm-1">
                                            <span
                                                className={` gx-text-red gx-flex-row gx-justify-content-center gx-align-items-center`}
                                            >
                                                <img alt="Remy Sharp" src={scaiconocategoria}/> 
                                            </span>
                                        </div>
                                        <div className="nombreCategoriaCard">{nombreCategoria}</div>
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

            {/* <div className="" style={{background:'', paddingLeft:'5px', paddingRight:'5px' }}> */}
            <Row id="contenedorTooltips">
                <Col xl={24} sm={24} xs={24} md={24} style={{marginBottom:'5px'}}>
                    <div className="gx-text-left">
                        <TooltipCardImagen 
                            esIzquierda     = {true}
                            tprcolortooltip = {"#FFFF"}
                            titulo          = {"Real S/"}
                            cantidad        = {funFomratoDecimal(realCategoria , 0)}
                            porcumplimiento = {funFomratoDecimal(((100*realCategoria)/objetivoCategoria), 0)}
                        />
                    </div>  
                </Col>
                <Col xl={24} sm={24} xs={24} md={24} id="colDerechaTooltip">
                    {/* s */}
                    <TooltipCardImagen
                        esIzquierda     = {false}
                        tprcolortooltip = {tprcolortooltip}
                        esSellIn        = {tipoPromocion == "Sell In" ? true : false}
                        titulo          = {"Facturar S/"}
                        cantidad        = {funFomratoDecimal(togoCategoria , 0)}
                        porcumplimiento = {funFomratoDecimal(((100*realCategoria)/objetivoCategoria), 0)}
                    />
                </Col>
                {/* <div style={{height:'40px'}}>d</div> */}
            </Row>
            {/* </div> */}
            <div className="gx-line-indi-info" style={{background:'#E8E8E8', paddingTop:'5px'}}> 
                {/* real=30; togo=70 --  70*100/30 */}
                <br/>
                <div className={`gx-line-indi`} style={{background:'#F2F2F2', width: '100%', height: '15px', margin: '10px', borderRadius: 50}}>
                    <div
                        className={``}
                        style={
                            // torealCategoria >= 
                            parseInt(realCategoria) >= parseInt(objetivoCategoria )
                            ?{
                                background: 'linear-gradient('+tprcolorbarra+')',
                                width: '100%',
                                height: '15px',
                                borderRadius: 50
                            }
                            :{
                                background: 'linear-gradient('+tprcolorbarra+')',
                                width: ((100*realCategoria)/objetivoCategoria)+'%',
                                height: '15px',
                                borderRadius: 50
                            }
                        }
                    >
                        <div 
                            className={``} 
                            style={{ 
                                background:'transparent', 
                                width: (togoCategoria*100)/realCategoria+'%', 
                                height: 15, 
                                marginLeft:'100%'
                            }} />
                    </div>
                </div>
            </div>

            <div className="gx-product-body" style={{background:'#E8E8E8', margin:'-15px'}}>
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
                </Row>
            </div>
        </div>
    )
}

export default CardImagen
