import React from 'react'
import {Col, Row} from "antd"
import Auxiliary from "util/Auxiliary"
import Titulo from 'components/Sistema/Titulo'
import CardAvance from 'components/Sistema/CardAvance'
import CardRebate from 'components/Sistema/CardRebate'
import {useSelector, useDispatch} from "react-redux"
import CategoriasCarousel from './categoriasCarousel'
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos"
import {seleccionarTutorialReducer} from "appRedux/actions/Tutorial"
import {seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'
import CardImagen from 'components/Sistema/CardImagen'

const SellIn = () => {
    const dispatch = useDispatch();
    const {ventasTpr, vistaVentasSeleccionado}= useSelector(({ventasTpr}) => ventasTpr);
    const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
    const {tutorialSeleccionado} = useSelector(({tutorial}) => tutorial);
    const {vistaPromocionSeleccionado} = useSelector(({promociones}) => promociones);

    if(cargaArchivosSeleccionado == true){
        dispatch(seleccionarCargaArchivosReducer(false))
    }

    if(tutorialSeleccionado == true){
        dispatch(seleccionarTutorialReducer(false))
    }

    if(vistaPromocionSeleccionado == true){
        dispatch(seleccionarVistaPromocionReducer(false))
    }

    if(vistaVentasSeleccionado == false){
        dispatch(seleccionarVistaVentasReducer(true))
    }

    return (
        <Auxiliary>
            <Row>
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
                                        tprid       = {tipoPromocion.tprid}
                                    />  
                                </Col>
                                <Col xl={24} md={24} sm={24} xs={24} />

                                {/* <Col xl={15} md={24} sm={24} xs={24}> */}
                                <div style={{width:'57.5%', marginRight:'20px', marginLeft:'21px'}}>
                                    <CardAvance
                                        objetivoValorizado       = {tipoPromocion.tsuvalorizadoobjetivo}
                                        realValorizado           = {tipoPromocion.tsuvalorizadoreal}
                                        togoValorizado           = {tipoPromocion.tsuvalorizadotogo}
                                        cumplimientoPorcentaje   = {tipoPromocion.tsuporcentajecumplimiento}
                                        nombreTipoPromocion      = {tipoPromocion.tprnombre}
                                    />
                                </div>
                                {/* </Col> */}
                                {/* <Col xl={9} md={24} sm={24} xs={24}> */}
                                <div style={{width:'38%', }}>
                                    <CardRebate 
                                        rebateValorizado = {tipoPromocion.tsuvalorizadorebate}
                                        nombreTipoPromocion = {tipoPromocion.tprnombre}
                                    />
                                </div>
                                {/* </Col> */}

                                {/* <CategoriasCarousel
                                    heading = "Example Slider"   
                                    slides  = {tipoPromocion.categorias} 
                                    seleccionarCategoria = {() => {}}
                                    tprcolorbarra   = {tipoPromocion.tprcolorbarra}
                                    tprcolortooltip = {tipoPromocion.tprcolortooltip}
                                /> */}
                                {
                                    tipoPromocion.categorias.map( function(categoria, posicion){
                                        return (
                                            // <Col xl={5} md={8} sm={12} xs={24}></div>
                                            <div style={{width:'18%', marginLeft:'21px'}}>
                                                <CardImagen 
                                                    nombreCategoria     = {categoria.catnombre}
                                                    iconoCategoria      = {categoria.caticono}
                                                    fondoCategoria      = {categoria.catimagenfondo}
                                                    objetivoCategoria   = {categoria.scavalorizadoobjetivo == 0 ?100 :categoria.scavalorizadoobjetivo}
                                                    realCategoria       = {categoria.scavalorizadoreal}
                                                    togoCategoria       = {categoria.scavalorizadotogo}

                                                    tprcolorbarra       = {tipoPromocion.tprcolorbarra}
                                                    tprcolortooltip     = {tipoPromocion.tprcolortooltip}
                                                    scaiconocategoria   = {categoria.scaiconocategoria}
                                                    catimagenfondoopaco = {categoria.catimagenfondoopaco}
                                                />
                                            </div>
                                            
                                        )
                                    })
                                }
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
