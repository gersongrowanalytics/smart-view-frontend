import React from 'react'
import {Col, Row} from "antd";
import Auxiliary from "util/Auxiliary";
import Titulo from 'components/Sistema/Titulo'
import CardAvance from 'components/Sistema/CardAvance';
import CardRebate from 'components/Sistema/CardRebate';
import {useSelector} from "react-redux";
import CategoriasCarousel from './categoriasCarousel'

const SellIn = () => {

    const {ventasTpr}= useSelector(({ventasTpr}) => ventasTpr);

    return (
        <Auxiliary>
            <Row>
                <Col xl={24} md={24} sm={24} xs={24}>
                    {/* <div style={{background:'transparent', width:'100%', padding:'50px', marginBottom:'20px',borderRadius: '12px' }} className="gx-text-center" > */}
                    <div style={{background:'transparent', width:'100%', marginBottom:'20px'}} className="gx-text-center" >
                        <img alt="" src={require("assets/images/bannerVentas.png")} width="100%" height="100%"/>
                    </div>
                </Col>
                <Col xl={24} md={24} sm={24} xs={24}>
                {
                    ventasTpr.map((tipoPromocion, posicion) => {
                        return(
                            <Row>        
                                <Col xl={24} md={24} sm={24} xs={24}>
                                    <Titulo 
                                        tieneFecha  = { posicion+1 == ventasTpr.length ?false : true}
                                        tieneTitulo = {true}
                                        tieneIcono  = {true}
                                        titulo      = {tipoPromocion.tprnombre}
                                    />  
                                </Col>
                                <Col xl={24} md={24} sm={24} xs={24} />

                                <Col xl={12} md={12} sm={24} xs={24}>
                                    <CardAvance
                                        objetivoValorizado       = {tipoPromocion.tsuvalorizadoobjetivo}
                                        realValorizado           = {tipoPromocion.tsuvalorizadoreal}
                                        togoValorizado           = {tipoPromocion.tsuvalorizadotogo}
                                        cumplimientoPorcentaje   = {tipoPromocion.tsuporcentajecumplimiento}
                                    />
                                </Col>
                                <Col xl={12} md={12} sm={24} xs={24}>
                                    <CardRebate 
                                        rebateValorizado = {tipoPromocion.tsuvalorizadorebate}
                                    />
                                </Col>

                                <CategoriasCarousel
                                    heading = "Example Slider"   
                                    slides  = {tipoPromocion.categorias} 
                                    seleccionarCategoria = {() => {}}
                                />
                                {/* {
                                    tipoPromocion.categorias.map( function(categoria, posicion){
                                        return (
                                            <Col xl={6} md={8} sm={12} xs={24}>
                                                <CardImagen 
                                                    nombreCategoria     = {categoria.catnombre}
                                                    iconoCategoria      = {categoria.caticono}
                                                    fondoCategoria      = {categoria.catimagenfondo}
                                                    objetivoCategoria   = {categoria.scavalorizadoobjetivo}
                                                    realCategoria       = {categoria.scavalorizadoreal}
                                                    togoCategoria       = {categoria.scavalorizadotogo}
                                                />
                                            </Col>
                                        )
                                    })
                                } */}
                            </Row>
                        )
                    })
                }
                </Col>
            </Row>
        </Auxiliary>
    )
}

export default SellIn
