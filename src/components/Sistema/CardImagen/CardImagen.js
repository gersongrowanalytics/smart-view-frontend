import React from 'react'
import {Col, Row, Tooltip} from "antd";
import './Estilos/CardImagen.css'
import NumberFormat from 'react-number-format';
import funFomratoDecimal from '../../../funciones/funFormatoDecimal.js'
import TooltipCardImagen from './Tooltip'

const CardImagen = (props) => {

    const {
        tipoPromocion, nombreCategoria, objetivoValorizado, objetivoCategoria, realCategoria, 
        togoCategoria, tprcolorbarra, tprcolortooltip, scaiconocategoria, catimagenfondoopaco,
        scavalorizadorealniv, scavalorizadotogoniv, mostrarNiv
    } = props
    // const {nombreCategoria, iconoCategoria, fondoCategoria, tprcolorbarra, tprcolortooltip, scaiconocategoria, catimagenfondoopaco} = props
    // const objetivoCategoria = 100
    // const realCategoria = 0
    // const togoCategoria = 0

    return (
        <div className={`gx-product-item gx-product-vertical'`} style={{background:'transparent'}} id="contenedorCardImagen">
            {/* <div className="gx-product-image"> */}
            <div className="" style={{background:'#E8E8E8'}}>
                <div className="gx-grid-thumb-equal" style={{height:'245px'}}>
                    <span className="gx-link gx-grid-thumb-cover" >
                        <div style={{width:'100%', height:'100%', backgroundImage: "url("+catimagenfondoopaco+")", backgroundSize: '100% 100%', backgroundRepeat:'no-repeat' }} >
                            <Row style={{   height:'100%',  background:'rgba(229,230,230,0.6)', paddingTop:'1px'}}>
                                <Col md={24} xl={24} sm={24} xs={24}>
                                    <div className="gx-text-center" >
                                        <img alt="Remy Sharp" src={scaiconocategoria} id="iconoCategoria"/> 
                                        <div className="nombreCategoriaCard">{nombreCategoria}</div>
                                        <p className="txtCumplimiento">
                                            Cumplimiento
                                            <br/>
                                            <p id="txt_numeroCumplimiento">
                                                {
                                                    mostrarNiv == false
                                                    ?<div><NumberFormat value={objetivoValorizado == 0 ?0 :funFomratoDecimal(((100*realCategoria)/objetivoCategoria), 0)} displayType={'text'} thousandSeparator={true} />%</div>
                                                    :<div><NumberFormat value={objetivoValorizado == 0 ?0 :funFomratoDecimal(((100*scavalorizadorealniv)/objetivoCategoria), 0)} displayType={'text'} thousandSeparator={true} />%</div>
                                                }
                                            </p>
                                            
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
                            esSellIn        = {tipoPromocion == "Sell In" ? true : false}
                            tprcolortooltip = {tprcolortooltip}
                            titulo          = {"Real S/"}
                            cantidad        = {
                                mostrarNiv == false
                                ?funFomratoDecimal(realCategoria , 0)
                                :funFomratoDecimal(scavalorizadorealniv , 0)
                            }
                            porcumplimiento = {
                                mostrarNiv == false
                                ?funFomratoDecimal(((100*realCategoria)/objetivoCategoria), 0)
                                :funFomratoDecimal(((100*scavalorizadorealniv)/objetivoCategoria), 0)
                            }
                        />
                    </div>  
                </Col>
                <Col xl={24} sm={24} xs={24} md={24} id="colDerechaTooltip">
                    {/* s */}
                    <TooltipCardImagen
                        esIzquierda     = {false}
                        tprcolortooltip = {"#FFFF"}
                        esSellIn        = {tipoPromocion == "Sell In" ? true : false}
                        titulo          = {"Por Facturar S/"}
                        // cantidad        = {funFomratoDecimal(togoCategoria , 0)}
                        cantidad        = {
                            mostrarNiv == false
                            ?funFomratoDecimal(objetivoCategoria - realCategoria , 0)
                            :funFomratoDecimal(objetivoCategoria - scavalorizadorealniv , 0)
                        }
                        porcumplimiento = {
                            mostrarNiv == false
                            ?funFomratoDecimal(((100*realCategoria)/objetivoCategoria), 0)
                            :funFomratoDecimal(((100*scavalorizadorealniv)/objetivoCategoria), 0)
                        }
                    />
                </Col>
                {/* <div style={{height:'40px'}}>d</div> */}
            </Row>
            {/* </div> */}
            <div className="gx-line-indi-info" style={{background:'#E8E8E8', paddingTop:'0px'}}> 
                {/* real=30; togo=70 --  70*100/30 */}
                <br/>
                <div className={`gx-line-indi`} style={{background:'#F2F2F2', width: '100%', height: '15px', margin: '10px', borderRadius: 50}}>
                    <div
                        className={``}
                        style={
                            // torealCategoria >= 
                            mostrarNiv == false
                            ?parseInt(realCategoria) >= parseInt(objetivoCategoria )
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
                            :parseInt(scavalorizadorealniv) >= parseInt(objetivoCategoria )
                                ?{
                                    background: 'linear-gradient('+tprcolorbarra+')',
                                    width: '100%',
                                    height: '15px',
                                    borderRadius: 50
                                }
                                :{
                                    background: 'linear-gradient('+tprcolorbarra+')',
                                    width: ((100*scavalorizadorealniv)/objetivoCategoria)+'%',
                                    height: '15px',
                                    borderRadius: 50
                                }
                        }
                    >
                        <div 
                            className={``} 
                            style={
                                mostrarNiv == false
                                ?{ 
                                    background:'transparent', 
                                    width: (togoCategoria*100)/realCategoria+'%', 
                                    height: 15, 
                                    marginLeft:'100%'
                                }
                                :{ 
                                    background:'transparent', 
                                    width: (scavalorizadotogoniv*100)/scavalorizadorealniv+'%', 
                                    height: 15, 
                                    marginLeft:'100%'
                                }
                            } />
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
                                    mostrarNiv == false
                                    ?objetivoCategoria == 0 && realCategoria == 0 && togoCategoria == 0
                                        ?0
                                        :objetivoCategoria == 100 && realCategoria == 0 && togoCategoria == 0
                                            ?0
                                            :objetivoCategoria == 100
                                                ?0
                                                :<NumberFormat value={funFomratoDecimal(objetivoCategoria, 0)} displayType={'text'} thousandSeparator={true} />

                                    :objetivoCategoria == 0 && scavalorizadorealniv == 0 && scavalorizadotogoniv == 0
                                        ?0
                                        :objetivoCategoria == 100 && scavalorizadorealniv == 0 && scavalorizadotogoniv == 0
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
