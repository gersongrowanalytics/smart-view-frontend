import React from 'react'
import {Col, Row} from "antd"
import Auxiliary from "util/Auxiliary"
import Titulo from 'components/Sistema/Titulo/Titulo'
import CardAvance from 'components/Sistema/CardAvance'
import CardRebate from 'components/Sistema/CardRebate'
import {useSelector, useDispatch} from "react-redux"
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos"
import {seleccionarTutorialReducer} from "appRedux/actions/Tutorial"
import {seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'
import CardImagen from 'components/Sistema/CardImagen/CardImagen'
import RebateBonus from 'components/Sistema/Ventas/RebateBonus/RebateBonus'
import BigBet from 'components/Sistema/Ventas/BigBet/BigBet'

const SellIn = () => {
    const dispatch = useDispatch();
    const {ventasTpr, vistaVentasSeleccionado, rebateBonus}= useSelector(({ventasTpr}) => ventasTpr);
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
                                        tieneFecha  = { tipoPromocion.tprnombre == "Sell Ins" ? true : false}
                                        tieneTitulo = {true}
                                        tieneIcono  = {true}
                                        titulo      = {tipoPromocion.tprnombre}
                                        tprid       = {tipoPromocion.tprid}
                                        fechaActual = {tipoPromocion.fechaActualizacion}
                                    />  
                                </Col>
                                <Col xl={24} md={24} sm={24} xs={24} />

                                {/* <Col xl={15} md={24} sm={24} xs={24}> */}
                                <div style={{width:'58%', marginRight:'2%', marginLeft:'22px'}}>
                                    <CardAvance
                                        objetivoValorizado       = {tipoPromocion.tsuvalorizadoobjetivo}
                                        realValorizado           = {tipoPromocion.tsuvalorizadoreal}
                                        togoValorizado           = {tipoPromocion.tsuvalorizadotogo}
                                        cumplimientoPorcentaje   = {tipoPromocion.tsuporcentajecumplimiento}
                                        nombreTipoPromocion      = {tipoPromocion.tprnombre}
                                        tieneRebateTrimestral    = {tipoPromocion.tieneRebateTrimestral}
                                    />
                                </div>
                                {/* </Col> */}
                                {/* <Col xl={9} md={24} sm={24} xs={24}> */}
                                <div style={{width:'38%', }}>
                                    <CardRebate 
                                        objetivoValorizado     = {tipoPromocion.tsuvalorizadoobjetivo}
                                        rebateValorizado       = {tipoPromocion.tsuvalorizadorebate}
                                        nombreTipoPromocion    = {tipoPromocion.tprnombre}
                                        trrs                   = {tipoPromocion.trrs}
                                        cumplimientoPorcentaje = {tipoPromocion.tsuporcentajecumplimiento}
                                        realValorizado         = {tipoPromocion.tsuvalorizadoreal}
                                        tsu                    = {tipoPromocion}
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
                                            <div style={
                                                posicion == 0
                                                ?{width:'18%', marginLeft:'22px'}
                                                :{width:'18%', marginLeft:'2%'}
                                            }>
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
                                                    tipoPromocion       = {tipoPromocion.tprnombre}
                                                />
                                            </div>
                                            
                                        )
                                    })
                                }
                            </Row>
                        )
                    })
                }

                {
                    rebateBonus.categorias.length > 0
                    ?<Row>
                        <Col xl={24} md={24} sm={24} xs={24}>
                            <RebateBonus
                                rebateBonus = {rebateBonus}
                            />
                        </Col>
                    </Row>
                    :null
                }

                {/* {
                    ventasTpr.length > 0
                    ?<Row>
                        <Col xl={24} md={24} sm={24} xs={24}>
                            <BigBet

                            />
                        </Col>
                    </Row>
                    :null
                } */}
                </Col>
            </Row>
        </Auxiliary>
    )
}

export default SellIn
