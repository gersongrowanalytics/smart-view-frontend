import React from 'react'
import 'styles/Sistema/Ventas/RebateBonus/CardLogicaRebateBonus.css'
import {Col, Row} from "antd";
import config from 'config'
import NumberFormat from 'react-number-format';
import funFomratoDecimal from 'funciones/funFormatoDecimal.js'

const CardLogicaRebateBonus = (props) => {

    const {
        objetivo,
        real,
        cumplimiento,
        categorias
    } = props.rebateBonus


    // const categorias = [
    //     {
    //         "nombre": "Adult",
    //         "imagen" : "Sistema/categorias/img/iconos/nadult.png"
    //     },
    //     {
    //         "nombre": "Infant",
    //         "imagen" : "Sistema/categorias/img/iconos/ninfant.png"
    //     },
    //     {
    //         "nombre": "Fem",
    //         "imagen" : "Sistema/categorias/img/iconos/nfem.png"
    //     },
    //     {
    //         "nombre": "Family",
    //         "imagen" : "Sistema/categorias/img/iconos/nfamily.png"
    //     },
    //     {
    //         "nombre": "Wipes",
    //         "imagen" : "Sistema/categorias/img/iconos/nwipes.png"
    //     }
    // ]

    return (
        <div id="contenedor-cardlogica-rebatebonus">
            <Row>
                <Col xl={10} md={10} sm={10} xm={10}>
                    <div id="tituloCategorias-cardlogica-rebatebonus">CATEGORÍAS</div>
                    <Row>
                        {
                            categorias.map((data, posicion) => {
                                return (
                                    <Col 
                                        xl={categorias.length == 5 ?posicion==categorias.length-1? 4:5 : categorias.length == 4 ?6 : categorias.length == 3 ?8 : categorias.length == 2 ?12 : categorias.length == 1 ?24 : 24} 
                                        md={categorias.length == 5 ?posicion==categorias.length-1? 4:5 : categorias.length == 4 ?6 : categorias.length == 3 ?8 : categorias.length == 2 ?12 : categorias.length == 1 ?24 : 24}  
                                        sm={categorias.length == 5 ?posicion==categorias.length-1? 4:5 : categorias.length == 4 ?6 : categorias.length == 3 ?8 : categorias.length == 2 ?12 : categorias.length == 1 ?24 : 24}  
                                        xm={categorias.length == 5 ?posicion==categorias.length-1? 4:5 : categorias.length == 4 ?6 : categorias.length == 3 ?8 : categorias.length == 2 ?12 : categorias.length == 1 ?24 : 24} 
                                    >
                                        <div id="categoria-cardlogica-rebatebonus" style={{backgroundImage: "url('"+data.caticono+"')"}} />
                                        <span id="nombreCategoria-cardlogica-rebatebonus">{data.catnombre}</span>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
                <Col xl={14} md={14} sm={14} xm={14} id="contenedorLogica-cardlogica-rebatebonus">
                    <br/>
                    <Row style={{marginLeft:'5px', marginTop:'20px'}}>
                        <Col xl={8} md={8} sm={8} xs={8} className="gx-text-center gx-text-white" style={{ borderLeftStyle:'solid', borderLeftColor:'white',  alignSelf:'center'}}>
                            <p id=""><span id="tituloDatos-cardlogica-rebatebonus" >OBJ</span><br/> 
                                <span id="datos-cardlogica-rebatebonus">S/<NumberFormat value={funFomratoDecimal(objetivo, 0)} displayType={'text'} thousandSeparator={true} /></span>
                            </p>
                        </Col>
                        <Col xl={8} md={8} sm={8} xs={8} className="gx-text-center gx-text-white" style={{ borderLeftStyle:'solid', borderLeftColor:'white',  alignSelf:'center'}}>
                            <p id=""><span id="tituloDatos-cardlogica-rebatebonus" >REAL</span><br/> 
                                <span id="datos-cardlogica-rebatebonus">S/<NumberFormat value={funFomratoDecimal(real, 0)} displayType={'text'} thousandSeparator={true} /></span>
                            </p>
                        </Col>
                        <Col xl={8} md={8} sm={8} xs={8} className="gx-text-center gx-text-white" style={{ borderLeftStyle:'solid', borderLeftColor:'white', alignSelf:'center'}}>
                            <p id=""><span id="tituloDatos-cardlogica-rebatebonus" >CUMPLIMIENTO</span><br/> 
                                <span id="datos-cardlogica-rebatebonus"><NumberFormat value={funFomratoDecimal(cumplimiento, 0)} displayType={'text'} thousandSeparator={true} />%</span>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default CardLogicaRebateBonus
