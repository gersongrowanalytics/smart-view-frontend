import React from 'react'
import Auxiliary from "util/Auxiliary"
import {Col, Row} from "antd"
import Slide from './carousel'
import Titulo from 'components/Sistema/Titulo'
import CanalPromociones from 'components/Sistema/CanalPromociones'
import {useDispatch, useSelector} from "react-redux";
import {seleccionarCategoriaReducer} from 'appRedux/actions/Promociones'

const Promociones = () => {
    const dispatch = useDispatch();
    const {categoriasPromociones, canalesPromociones} = useSelector(({promociones}) => promociones);
    // const canalesPromociones = []

    const seleccionarCategoria = async (scaid, posicion) =>  {
        dispatch(seleccionarCategoriaReducer(scaid, posicion))
    }

    return (
        <Auxiliary>
            <Row>
                <Col xl={24} md={24} sm={24} xs={24}>
                    <div style={{background:'#F93258', width:'100%', padding:'10px', marginBottom:'20px'}} className="gx-text-center" >
                        <h1 className="gx-text-white">PROMOCIONES</h1>
                    </div>
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
                />
                <div style={{marginBottom:'160px', height:'200px'}} />
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
                <Col xl={24} md={24} sm={24} xs={24} style={{margin:'50px'}} />
                {
                    canalesPromociones.map((item, posicion) => {
                        return (
                            <CanalPromociones 
                                nombreCanal = {item.cannombre}
                                promociones = {item.promociones}
                            />
                        )
                    })
                }
                
                <div style={{marginBottom:'200px', height:'200px'}} />
            </Row>
        </Auxiliary>
    )
}

export default Promociones
