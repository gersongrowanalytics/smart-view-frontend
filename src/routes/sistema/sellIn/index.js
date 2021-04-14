import React, {useEffect} from 'react'
import {Col, Row, Modal} from "antd"
import Auxiliary from "util/Auxiliary"
import Titulo from 'components/Sistema/Titulo/Titulo'
import CardAvance from 'components/Sistema/CardAvance'
import CardRebate from 'components/Sistema/CardRebate'
import {useSelector, useDispatch} from "react-redux"
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos"
import {seleccionarTutorialReducer} from "appRedux/actions/Tutorial"
import {seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarVistaVentasReducer, CambiarTamanioCardAvanceReducer} from 'appRedux/actions/VentasTpr'
import CardImagen from 'components/Sistema/CardImagen/CardImagen'
import RebateBonus from 'components/Sistema/Ventas/RebateBonus/RebateBonus'
import ModalDescargarSISO from 'components/Sistema/Ventas/ModalDescargarSISO/ModalDescargarSISO'
import {ActivarModalDescargas} from 'appRedux/actions/VentasTpr'
import {
    SeleccionarSucursalDescargasReducer,
    SeleccionarSucursalesZonaReducerReducer,
    SeleccionarTodasSucursalesDescargasReducer
} from 'appRedux/actions/Sucursales'
import BigBet from 'components/Sistema/Ventas/BigBet/BigBet'

const SellIn = () => {
    const dispatch = useDispatch();
    const {
        ventasTpr, 
        vistaVentasSeleccionado, 
        rebateBonus, 
        tamanioAvanceSI, 
        tamanioAvanceSO,

        mostrarModalDescargas,
        excelEspecificoSi,
        excelEspecificoSiRebateBonus,
        excelEspecificoSo,

        loadingDescargandoSi,
        loadingDescargandoSO

    }= useSelector(({ventasTpr}) => ventasTpr);
    const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
    const {tutorialSeleccionado} = useSelector(({tutorial}) => tutorial);
    const {vistaPromocionSeleccionado} = useSelector(({promociones}) => promociones);
    const { 
        sucursalesUsuario, 
        zonas 
    } = useSelector(({sucursales}) => sucursales)

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

    useEffect(() => {
        dispatch(CambiarTamanioCardAvanceReducer())
    }, [])

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
                                        tieneFecha  = { tipoPromocion.tprnombre == "Sell In" ? true : false}
                                        tieneTitulo = {true}
                                        tieneIcono  = {true}
                                        titulo      = {tipoPromocion.tprnombre}
                                        tprid       = {tipoPromocion.tprid}
                                        fechaActual = {tipoPromocion.fechaActualizacion}
                                    />  
                                </Col>
                                <Col xl={24} md={24} sm={24} xs={24} />

                                <div style={{width:'58%', marginRight:'2%', marginLeft:'22px'}}>
                                    <CardAvance
                                        objetivoValorizado       = {tipoPromocion.tsuvalorizadoobjetivo}
                                        realValorizado           = {tipoPromocion.tsuvalorizadoreal}
                                        togoValorizado           = {tipoPromocion.tsuvalorizadotogo}
                                        cumplimientoPorcentaje   = {tipoPromocion.tsuporcentajecumplimiento}
                                        nombreTipoPromocion      = {tipoPromocion.tprnombre}
                                        tieneRebateTrimestral    = {tipoPromocion.tieneRebateTrimestral}
                                        tamanioCard = {tipoPromocion.tprnombre.includes("Out") == true  ? tamanioAvanceSO : tamanioAvanceSI}
                                        trrs        = {tipoPromocion.trrs}
                                    />
                                </div>
                                <div style={{width:'38%', }}>
                                    <CardRebate 
                                        objetivoValorizado     = {tipoPromocion.tsuvalorizadoobjetivo}
                                        rebateValorizado       = {tipoPromocion.tsuvalorizadorebate}
                                        nombreTipoPromocion    = {tipoPromocion.tprnombre}
                                        trrs                   = {tipoPromocion.trrs}
                                        cumplimientoPorcentaje = {tipoPromocion.tsuporcentajecumplimiento}
                                        realValorizado         = {tipoPromocion.tsuvalorizadoreal}
                                        tsu                    = {tipoPromocion}
                                        realValorizadoSellin   = {
                                            tipoPromocion.tprnombre.includes("Out") == true 
                                            ?ventasTpr[posicion-1]['tsuvalorizadoreal']
                                            :0
                                        }
                                        objetivoValorizadoSellIn   = {
                                            tipoPromocion.tprnombre.includes("Out") == true 
                                            ?ventasTpr[posicion-1]['tsuvalorizadoobjetivo']
                                            :0
                                        }
                                    />
                                </div>
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
                                                    objetivoValorizado  = {tipoPromocion.tsuvalorizadoobjetivo}
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
                <div 
                    style={{
                        // height:'50px', 
                        // width:'100px', 
                        width: "70px",
                        height: "63px",
                        position:'absolute', 
                        marginLeft:'-16px', 
                        cursor:'pointer',
                        background: "#79E2C1",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        borderRadius: "0px 12px 12px 0px",
                        display: "flex",
                        alignItems: "center",
                        placeContent: "center"
                    }} 
                    onClick={() => {dispatch(ActivarModalDescargas(true))}}>
                        <img 
                            alt="" 
                            src={require("assets/images/iconoDescargar.png")} 
                            width="32px" 
                            height="31px"
                        />
                </div>
            </Row>
            <ModalDescargarSISO
                mostrarModalDescargas = {mostrarModalDescargas}
                ActivarModalDescargas = {ActivarModalDescargas}
                sucursalesUsuario     = {sucursalesUsuario}
                zonas                 = {zonas}
                SeleccionarSucursalDescargasReducer        = {SeleccionarSucursalDescargasReducer}
                SeleccionarSucursalesZonaReducerReducer    = {SeleccionarSucursalesZonaReducerReducer}
                SeleccionarTodasSucursalesDescargasReducer = {SeleccionarTodasSucursalesDescargasReducer}
                excelEspecificoSiRebateBonus = {excelEspecificoSiRebateBonus}
                excelEspecificoSi = {excelEspecificoSi}
                excelEspecificoSo = {excelEspecificoSo}
                loadingDescargandoSi = {loadingDescargandoSi}
                loadingDescargandoSO = {loadingDescargandoSO}
            />
        </Auxiliary>
    )
}

export default SellIn
