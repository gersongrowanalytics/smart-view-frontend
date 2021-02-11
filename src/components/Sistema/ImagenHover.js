
import React from 'react'
import './estilos/ImagenHover.css'
import {Col, Row} from "antd";
import { useSelector} from "react-redux";

const ImagenHover = (props) => {
    const {seleccionarFiltroZona} = useSelector(({zonas}) => zonas);

    const {
        seleccionado, 
        nombre, 
        icono, 
        iconoSeleccionado, 
        fondo, 
        colorhover, 
        color, 
        catimagenfondoseleccionado, 
        caticonohover, 
        cantidadPromociones,
        cantidadCodigosPromocion,
        cantidadCanales
    } = props

    const {seleccionoPromocion} = useSelector(({promociones}) => promociones);

    return (
        <div className="contenedorImgHover" 
            style={
                seleccionado == true
                ?{marginLeft: '-50px'}
                :{marginLeft: '-50px'}
            }
        >
            <figure 
                style={
                    seleccionado == true
                    ? {
                        marginTop:'2px',
                        height:'181px',
                        // background: 'rgba(0,0,0,0.15)',
                        background: 'transparent',
                        boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                        width:'294px'
                    }
                    : seleccionoPromocion == true
                        ?{height: '164px', marginTop:'15px', width:'264px'}
                        :{height: '421px', marginTop:'15px'}
                }>
                <span className="gx-link gx-grid-thumb-cover">
                    <div style={
                        seleccionoPromocion == true
                        ?{ 
                            backgroundImage: "url("+catimagenfondoseleccionado+")", 
                            backgroundSize: '100% 100%', 
                            backgroundRepeat:'no-repeat',
                            height:'100%'
                        }
                        :{ 
                            backgroundImage: "url("+fondo+")", 
                            backgroundSize: '100% 100%', 
                            backgroundRepeat:'no-repeat',
                            height:'100%'
                        }
                    } >
                        <Row style={
                            seleccionoPromocion == true
                            ?{ height:'100%', alignContent:'center', paddingTop:'30px' }
                            :{ alignContent: 'flex-end', height:'100%', paddingBottom:'44px' }
                        }>
                            <Col xl={24} md={24} sm={24} xs={24}>
                                <div className="gx-text-center" >
                                    {
                                        seleccionoPromocion == true
                                        ?<div className="gx-flex-row gx-justify-content-center gx-mb-3 gx-mb-sm-1">
                                            <span
                                                id={
                                                    seleccionoPromocion == true
                                                    ?"contenedorIconoSeleccionado"
                                                    :"contenedorIcono"
                                                }
                                                className={`gx-text-red gx-flex-row gx-justify-content-center gx-align-items-center gx-rounded-circle`}
                                                style={ seleccionado == true ?{background:color} :{background: '#fff',}}
                                            >
                                                <img 
                                                    alt="Remy Sharp" 
                                                    id={
                                                        seleccionoPromocion == true
                                                        ?"iconoImagenHoverSeleccionado"
                                                        :"iconoImagenHover"
                                                    }
                                                    
                                                    src={
                                                        seleccionado == true
                                                        ?iconoSeleccionado
                                                        :icono
                                                    }
                                                /> 
                                            </span>
                                        </div>
                                        :null
                                    }
                                    {
                                        seleccionoPromocion == true
                                        ?<span 
                                            className="gx-text-white nombreCategoriaSeleccionado">{nombre}</span>
                                        :<div className="contenedorNombreCategoria" style={{background: color}}>
                                            <span 
                                                className="nombreCategoria">{nombre}</span>
                                        </div>
                                    }
                                </div>
                            </Col>
                        </Row>
                    </div>
                </span>
                {
                    seleccionoPromocion == true
                    ?null
                    :<div className="capa" style={{background: 'rgba('+colorhover+')'}}>
                        {/* <div style={{height:'15%', width:'15%', backgroundImage: "url('https://cdn4.iconfinder.com/data/icons/kids-and-toys-1/32/Kids__Kids_Baby_Diaper_Childhood_Nappy-512.png')", backgroundSize: '100% 100%', backgroundRepeat:'no-repeat'}} /> */}

                        <div 
                            className="" 
                            style={
                                seleccionado == true  
                                ?{
                                    width:"20%", 
                                    height:"20%", 
                                    backgroundImage: "url("+iconoSeleccionado+")", 
                                    backgroundSize: '70% 70%', backgroundRepeat:'no-repeat', backgroundPosition:'center', padding:'10px'
                                }
                                :{
                                    width:"68px", 
                                    height:"68px", 
                                    backgroundImage: "url("+caticonohover+")", 
                                    backgroundSize: '100% 100%', backgroundRepeat:'no-repeat', backgroundPosition:'center', padding:'10px'
                                }
                            } />
                        <br />
                        <h2>
                            <span style={{fontWeight:'500'}} id="nombreCategoriaHover">
                                {nombre}<br/>
                            </span>
                            {
                                seleccionarFiltroZona == true
                                ?null
                                :<span id="textoPromocionHover">Promoción:{seleccionarFiltroZona} {cantidadPromociones}<br/></span>
                            }
                            {
                                seleccionarFiltroZona == true
                                // ?<span id="textoPromocionHover">Código de Promociones: {cantidadCodigosPromocion}<br/></span>
                                ?<span id="textoPromocionHover">Promoción: {cantidadCodigosPromocion}<br/></span>
                                :null
                            }
                            {
                                seleccionarFiltroZona == true
                                ?<span id="textoPromocionHover">Canales: {cantidadCanales}</span>
                                :null
                            }
                        </h2>
                        
                        <span style={{color:'white'}} id="saberMasHover">
                            Para saber más<img alt="" src={require("assets/images/iconoVerMas.png")} width="22px" height="18px" className="iconoFlecha"/>
                            {/* <i className="icon icon-arrow-right gx-fs-l gx-ml-1 gx-d-inline-flex gx-vertical-align-middle"/> */}
                            
                        </span>
                    </div>
                }
            </figure>
        </div>
    )
}

export default ImagenHover
