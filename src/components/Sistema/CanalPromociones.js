import React from 'react'
import {Col, Row, Card, Button, InputNumber} from "antd";
import PromocionesCarousel from './PromocionesCarousel'

const CanalPromociones = (props) => {
    const {nombreCanal, promociones} = props

    return (
        <Col xl={24} md={24} sm={24} xs={24}>
            <Row
                style = {{
                    position: 'relative',
                    boxSizing: 'border-box',
                    padding: '0',
                    margin: '0'
                }}
            >
                <PromocionesCarousel 
                    heading ="Example Slider"   
                    slides  ={promociones} 
                    seleccionarCategoria = {() => {}}
                />
                {/* {
                    promociones.map((item, posicion) => {
                        return(
                            <Col xl={12}>
                                <Card style={{borderRadius:'20px', border:'1px solid #2ABEE0', marginRight:'10px'}}>
                                    <Row>
                                        <Col xl={24} md={24} sm={24} xs={24} >
                                            <h1 className="gx-text-center" style={{color:'#2ABEE0'}}>50 Combos</h1>
                                        </Col>
                                        {
                                            item.productos.map((producto, posicion) => {
                                                return (
                                                    <Col xl={6} md={6}>
                                                        <Row>
                                                            <Col xl={24} md={24}>
                                                                <br/>
                                                            <div 
                                                                style={{width:"90%", height:"100px", backgroundImage: "url("+producto.proimagen+")", backgroundSize: '100% 100%', backgroundRepeat:'no-repeat', backgroundPosition:'center'}} 
                                                            />
                                                            </Col>
                                                            <Col xl={24} md={24} className="gx-text-center">
                                                                <strong >11 HAF x120</strong>
                                                                <br/><br/>
                                                                <span>Planchas</span>
                                                                <InputNumber 
                                                                    style={{border:'none', borderBottom:'1px solid #000',   background: 'transparent', textAlign:'center'}}
                                                                    className="gx-mb-3" 
                                                                    size="small" 
                                                                    min={1} max={100000} defaultValue={0}/>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                )
                                            })
                                        }
                                        <Col xl={2} md={2} sm={2} xs={2} />
                                        <Col xl={16} md={16}>
                                            <Row>
                                                {
                                                    item.productosbonificados.map((productoBonificado, posicion) => {
                                                        return(
                                                            <Col xl={8} md={8} className="gx-text-center">
                                                                <span style={{color:'#F93258'}}>Gratis</span>
                                                                <div 
                                                                    style={{width:"90%", height:"100px", backgroundImage: "url("+productoBonificado.proimagen+")", backgroundSize: '100% 100%', backgroundRepeat:'no-repeat', backgroundPosition:'center'}} 
                                                                />
                                                                <strong>{productoBonificado.pronombre}</strong>
                                                            </Col>           
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Col>
                                        <Col xl={24} md={24} sm={24} xs={24} className="gx-text-center">
                                            <Button style={{border:'1px solid #2ABEE0', color:'#2ABEE0'}} >Guardar</Button>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        )
                    })
                } */}
            </Row>
            <div 
                className   = "minorista"
                style       = {{ 
                    display:'inline-block',
                    letterSpacing:'3px',
                    position:'absolute', 
                    left:-20, 
                    background:'#2ABEE0', 
                    width:'50px', 
                    height:'300px', 
                    top:'25px', 
                    writingMode:'vertical-lr',
                    textOrientation:'upright',
                    lineHeight: '50px',
                    textAlign: 'center',
                    color: '#fff',
                    textTransform: 'uppercase',
                    borderRadius: '0 20px 20px 0',
                }}
            >
                {nombreCanal}
            </div>
        </Col>
    )
}

export default CanalPromociones
