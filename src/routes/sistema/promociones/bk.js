import React, {Component} from 'react';
import {Col, Row} from "antd";
import Auxiliary from "util/Auxiliary";
import Titulo from 'components/Sistema/Titulo'
import ImagenHover from 'components/Sistema/ImagenHover'
import CanalPromociones from 'components/Sistema/CanalPromociones'
// import CarouselPromocion from 'components/Admin/CarouselPromocion';
import "./containerToScroll.less";
import config from 'config'
import Slide from './carousel'

class Promociones extends Component {
    constructor(){
        super();
        this.state = {
            categorias : [],
            canalesPromociones: []
        }

        this.obtenerCategorias = this.obtenerCategorias.bind(this)
        this.seleccionarCategoria = this.seleccionarCategoria.bind(this)
    }

    async obtenerCategorias(){
        await fetch(config.api+'promociones/mostrar/categorias',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({
                sucid   : 1,
                dia     : '01',
                mes     : 'Enero',
                ano     : '2020',
            }),
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json',
                'api_token': localStorage.getItem('usutoken')
            }
        })
        .then(res =>res.json())
        .then(data => {
            if(data.respuesta==true){

                data.datos.map(item => {
                    data.datos.push(item)
                })
                data.datos.map(item => {
                    data.datos.push(item)
                })
                data.datos.map(item => {
                    data.datos.push(item)
                })
                this.setState({
                    categorias : data.datos
                })
            }else{
                
            }
        }).catch((error)=> {

        });
    }

    componentWillMount(){
        this.obtenerCategorias()
    }

    async seleccionarCategoria(scaid, posicion){
        this.state.categorias[posicion]['seleccionado'] = !this.state.categorias[posicion]['seleccionado']
        this.setState({
            categorias : this.state.categorias
        })

        await fetch(config.api+'promociones/mostrar/promociones',
        {
            mode:'cors',
            method: 'POST',
            body: JSON.stringify({
                usutoken  : localStorage.getItem('usutoken'),
                scaid     : scaid,
            }),
            headers: {
                'Accept'        : 'application/json',
                'Content-type'  : 'application/json',
                'api_token': localStorage.getItem('usutoken')
            }
        })
        .then(res =>res.json())
        .then(data => {
            if(data.respuesta==true){
                this.setState({
                    canalesPromociones : data.datos
                })
            }else{
                this.setState({
                    canalesPromociones : []
                })
            }
        }).catch((error)=> {

        });
    }


    render() {
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
                        slides={this.state.categorias} 
                        seleccionarCategoria = {this.seleccionarCategoria}
                    />
                    <div style={{marginBottom:'160px', height:'200px'}} />
                    {/* {
                        this.state.categorias.map((item, posicion) => {
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
                        this.state.canalesPromociones.map((item, posicion) => {
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
        );
    }
}

export default Promociones;
