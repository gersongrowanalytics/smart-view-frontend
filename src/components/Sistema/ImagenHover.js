
import React from 'react'
import './estilos/ImagenHover.css'
import {Col, Row} from "antd";

const ImagenHover = (props) => {
    const {seleccionado, nombre, icono, iconoSeleccionado, fondo, colorhover, color} = props

    return (
        <div className="contenedorImgHover">
            <figure style={seleccionado == true ? {boxShadow:'0px 20px 30px rgba(0,0,0,0.50)', height: '380px' }: {height: '350px', marginTop:'15px'}}>
                <span className="gx-link gx-grid-thumb-cover">
                    <div style={{height:'100%', backgroundImage: "url("+fondo+")", backgroundSize: '100% 100%', backgroundRepeat:'no-repeat'}} >
                        <Row style={{ paddingTop:'15%'}}>
                            <Col xl={24} md={24} sm={24} xs={24}>
                                <div className="gx-text-center" >
                                    <div className="gx-flex-row gx-justify-content-center gx-mb-3 gx-mb-sm-1">
                                        <span
                                            className={`gx-size-80 gx-border  gx-text-red gx-flex-row gx-justify-content-center gx-align-items-center gx-rounded-circle`}
                                            style={ seleccionado == true ?{background:color, padding:'10px'} :{background: '#fff', padding:'10px'}}
                                        >
                                            <img 
                                                alt="Remy Sharp" 
                                                src={
                                                    seleccionado == true
                                                    ?iconoSeleccionado
                                                    :icono
                                                }
                                            /> 
                                        </span>
                                    </div>
                                    <span className="gx-text-black nombreCategoria">{nombre}</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </span>
                <div className="capa" style={{background: 'rgba('+colorhover+')'}}>
                    {/* <div style={{height:'15%', width:'15%', backgroundImage: "url('https://cdn4.iconfinder.com/data/icons/kids-and-toys-1/32/Kids__Kids_Baby_Diaper_Childhood_Nappy-512.png')", backgroundSize: '100% 100%', backgroundRepeat:'no-repeat'}} /> */}

                    <div 
                        className="gx-rounded-circle" 
                        style={
                            seleccionado == true  
                            ?{
                                width:"20%", 
                                height:"20%", 
                                borderStyle:'solid', 
                                borderColor:'white', 
                                backgroundImage: "url("+iconoSeleccionado+")", 
                                backgroundSize: '70% 70%', backgroundRepeat:'no-repeat', backgroundPosition:'center', padding:'10px'
                            }
                            :{
                                width:"20%", 
                                height:"20%", 
                                borderStyle:'solid', 
                                borderColor:'white', 
                                backgroundImage: "url("+icono+")", 
                                backgroundSize: '70% 70%', backgroundRepeat:'no-repeat', backgroundPosition:'center', padding:'10px'
                            }
                        } />

                    <h2><span style={{fontWeight:'500'}}>{nombre}</span><p>Promoción: 5</p></h2>
                    
                    <span style={{color:'white'}}>{"Para saber más"}<i className="icon icon-arrow-right gx-fs-l gx-ml-1 gx-d-inline-flex gx-vertical-align-middle"/> </span>
                </div>
            </figure>
        </div>
    )
}

export default ImagenHover
