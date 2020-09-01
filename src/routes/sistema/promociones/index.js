import React from 'react'
import Auxiliary from "util/Auxiliary"
import {Col, Row} from "antd"
import Slide from './carousel'
import Titulo from 'components/Sistema/Titulo'
import CanalPromociones from 'components/Sistema/CanalPromociones'
import {useDispatch, useSelector} from "react-redux";
import {seleccionarCategoriaReducer, seleccionarPromocionReducer, seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos";
import {seleccionarTutorialReducer} from "appRedux/actions/Tutorial";
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'

const Promociones = () => {
    const dispatch = useDispatch();
    const {categoriasPromociones, canalesPromociones, seleccionoPromocion, colorSeleciconadoPromo, vistaPromocionSeleccionado} = useSelector(({promociones}) => promociones);
    const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
    const {tutorialSeleccionado} = useSelector(({tutorial}) => tutorial);
    const {vistaVentasSeleccionado}= useSelector(({ventasTpr}) => ventasTpr);

    const seleccionarCategoria = async (scaid, posicion) =>  {
        dispatch(seleccionarCategoriaReducer(scaid, posicion))
        dispatch(seleccionarPromocionReducer(true))
    }

    if(cargaArchivosSeleccionado == true){
        dispatch(seleccionarCargaArchivosReducer(false))
    }

    if(tutorialSeleccionado == true){
        dispatch(seleccionarTutorialReducer(false))
    }

    if(vistaPromocionSeleccionado == false){
        dispatch(seleccionarVistaPromocionReducer(true))
    }

    if(vistaVentasSeleccionado == true){
        dispatch(seleccionarVistaVentasReducer(false))
    }

    return (
        <Auxiliary>
            {/* <div style={{background:'transparent', width:'100%', marginBottom:'20px', height:'462px'}} className="gx-text-center" >
                <img alt="" src={require("assets/images/bannerPromociones.png")} width="100%" height="100%"/>
            </div> */}
            <Row>
                <Col xl={24} md={24} sm={24} xs={24}>
                </Col>
                <Col xl={24} md={24} sm={24} xs={24} style={{marginBottom:'10px'}}  >
                    <Titulo 
                        tieneFecha  = {true}
                        tieneTitulo = {false}
                        tieneIcono  = {false}
                        titulo      = {""}
                        tieneBotonDescargar = {true}
                    />
                </Col>
                <Slide 
                    heading="Example Slider"   
                    slides={categoriasPromociones} 
                    seleccionarCategoria = {seleccionarCategoria}
                    seleccionoPromocion = {seleccionoPromocion}
                />
                {/* <div style={{marginBottom:'160px',}} /> */}
                {/* {
                    categorias.map((item, posicion) => {
                        return(
                            <Col xl={8} md={8} sm={12} xs={24} key={posicion} onClick={()=>this.seleccionarCategoria(item.scaid, posicion)}>
                                <ImagenHover
                                    seleccionado  = {item.seleccionado}
                                    nombre        = {item.catnombre}
                                    fondo         = {item.catimagenfondo}
                                    icono         = {item.caticono}
                                    colorhover    = {item.catcolorhover}
                                />
                            </Col>
                        )
                    })
                } */}
                <Col xl={24} md={24} sm={24} xs={24} />
                {
                    canalesPromociones.map((item, posicion) => {
                        return (
                            <CanalPromociones
                                posicionCanal   = {posicion}
                                cscid           = {item.cscid}
                                nombreCanal     = {item.cannombre}
                                promociones     = {item.promociones}
                                porcentaje      = {item.porcentaje}
                                colorSeleciconadoPromo = {colorSeleciconadoPromo}
                            />
                        )
                    })
                }
                {
                    seleccionoPromocion == true
                    ?<div style={{marginBottom:'50px', height:'50px'}} />
                    :<div style={{marginBottom:'50px', height:'50px'}} />
                }
            </Row>
        </Auxiliary>
    )
}

export default Promociones
