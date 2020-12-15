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
                <Col xl={12} md={12} sm={12} xm={12}>
                    <div id="tituloCategorias-cardlogica-rebatebonus">CATEGORÍAS</div>
                    <Row>
                        {
                            categorias.map((data, posicion) => {

                                let nombre = ""
                                if(data.catnombre == "MultiCategoria"){
                                    nombre = "Mult."
                                }else{
                                    nombre = data.catnombre.split(' Care')
                                }

                                return (
                                    <Col 
                                        xl={categorias.length == 6 ?4 :categorias.length == 5 ?4 : categorias.length == 4 ?6 : categorias.length == 3 ?8 : categorias.length == 2 ?12 : categorias.length == 1 ?24 : 24} 
                                        md={categorias.length == 6 ?4 :categorias.length == 5 ?4 : categorias.length == 4 ?6 : categorias.length == 3 ?8 : categorias.length == 2 ?12 : categorias.length == 1 ?24 : 24}  
                                        sm={categorias.length == 6 ?4 :categorias.length == 5 ?4 : categorias.length == 4 ?6 : categorias.length == 3 ?8 : categorias.length == 2 ?12 : categorias.length == 1 ?24 : 24}  
                                        xm={categorias.length == 6 ?4 :categorias.length == 5 ?4 : categorias.length == 4 ?6 : categorias.length == 3 ?8 : categorias.length == 2 ?12 : categorias.length == 1 ?24 : 24} 
                                        style={{textAlign: '-webkit-center'}}
                                    >
                                        {/* <div id="categoria-cardlogica-rebatebonus" style={{backgroundImage: "url('"+data.caticono+"')"}} /> */}
                                        
                                        <img src={data.caticono} width="62px" height="62px" />
                                        <span id="nombreCategoria-cardlogica-rebatebonus">{nombre}</span>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
                <Col xl={12} md={12} sm={12} xm={12} id="contenedorLogica-cardlogica-rebatebonus">
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
