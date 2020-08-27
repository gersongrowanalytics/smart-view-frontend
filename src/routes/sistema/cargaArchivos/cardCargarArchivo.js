import React, {Component} from 'react';
import {Button, Card, message, Upload, Row, Col} from "antd";
import { PlusOutlined } from '@ant-design/icons';

class CardCargarArchivo extends Component {
    constructor(){
        super();
        this.state = {
            subioArchivo  : false,
            guardarCambios : false,
            enviarCambios : false,
            nombreArchivo : ''
        }   
        this.seleccionarFile = this.seleccionarFile.bind(this)
        this.guardarCambios = this.guardarCambios.bind(this)
        this.eliminarArchivo = this.eliminarArchivo.bind(this)
        this.cancelarCambios = this.cancelarCambios.bind(this)
        this.enviarCambios   = this.enviarCambios.bind(this)
        this.subirOtroArchivo = this.subirOtroArchivo.bind(this)
    }
    
    componentWillMount(){
    }

    seleccionarFile(e) {
        this.refs.subirArchivoInput.click();
    }

    cambioInputFile(event){
        event.stopPropagation();
        event.preventDefault();
        var file = event.target.files[0];
        this.setState({
            subioArchivo  : true,
            nombreArchivo : file['name']
        })
    }

    eliminarArchivo(){
        this.setState({
            subioArchivo  : false,
            nombreArchivo : ''
        })
    }

    guardarCambios(){
        if(this.state.subioArchivo == true){
            this.setState({
                guardarCambios : true
            })
        }else{
            message.error(`Lo sentimos, primero debe seleccionar un archivo!`);
        }
    }

    enviarCambios(){
        this.setState({
            enviarCambios : true,
            guardarCambios : false
        })
    }

    cancelarCambios(){
        this.setState({
            guardarCambios : false,
        })
    }

    subirOtroArchivo(){
        this.setState({
            guardarCambios : false,
            subioArchivo : false,
            enviarCambios : false,
            nombreArchivo : ''
        })
    }



    render() {
        return (
            <Card 
                className="gx-card"
                style={{
                    filter: 'drop-shadow(-6px 6px 10px rgba(0, 0, 0, 0.25))',
                    borderRadius:'30px'
                }}
            >
                {
                    this.state.guardarCambios == true
                    ?<Row>
                        <Col xl={24} md={24} className="gx-text-center">
                            <b>Verificar</b>
                            <div style={{borderBottom: '0.1px solid #CCCCCC', width:'100%', marginTop:'10px', marginBottom:'10px'}} />
                            <span style={{paddingLeft:'15px', paddingRight:'15px', paddingBottom:'5px'}}>¿Está seguro que desea guardar el archivo? <br/></span>
                            <span onClick={this.cancelarCambios} style={{color: '#A8A6A6', textDecoration:'underline', cursor:'pointer'}}>Aún no mandar</span>
                        </Col>
                        <Col xl={24} md={24} className="gx-text-center" style={{marginTop:'10px'}}>
                            <Button
                                style={{background:'#409FFF', borderRadius:'20px', color:'white'}}
                                onClick={this.enviarCambios}
                            >
                                Guardar
                            </Button>
                        </Col>
                    </Row>
                    : this.state.enviarCambios == true
                        ?<Row>
                            <Col 
                                xl={24} 
                                md={24} 
                                className="gx-text-center"
                                style={{
                                    "fontStyle": "normal",
                                    "fontWeight": "600",
                                    "fontSize": "14px",
                                    "lineHeight": "27px",
                                    "color": "#4D4D4D",
                                }}
                            >
                                {this.props.titulo}
                                <div style={{borderBottom: '0.1px solid #CCCCCC', width:'100%'}} />
                            </Col>
                            <Col xl={24} md={24} className="gx-text-center" style={{marginTop:'10px'}}>
                                <b>¡Listo!<br/></b>
                                <span>El archivo se subió con éxito</span>
                            </Col>
                                
                            <Col xl={24} md={24} className="gx-text-center" style={{marginTop:'10px'}}>
                                <Button
                                    style={{background:'#409FFF', borderRadius:'20px', color:'white'}}
                                    onClick={this.subirOtroArchivo}
                                >
                                    ¿Subir Otro?
                                </Button>
                            </Col>
                        </Row>
                        :<Row>
                            <Col 
                                xl={24} 
                                md={24} 
                                className="gx-text-center"
                                style={{
                                    "fontStyle": "normal",
                                    "fontWeight": "600",
                                    "fontSize": "14px",
                                    "lineHeight": "27px",
                                    "color": "#4D4D4D",
                                }}
                            >
                                <input type="file" id="file" ref="subirArchivoInput" style={{display: "none"}} onChange={(e) => this.cambioInputFile(e)} />
                                <Button
                                    style={{background:'#F93258', border:'none', marginTop:'10px', marginRight:'5px'}}
                                    shape="circle" 
                                    icon={<PlusOutlined style={{"color" : 'white'}} />} 
                                    onClick={this.seleccionarFile}
                                >
                                </Button>
                                    {this.props.titulo}
                                <div style={{borderBottom: '0.1px solid #CCCCCC', width:'100%'}} />
                            </Col>
                                
                            {
                                this.state.subioArchivo == true
                                ?<Col
                                    xl={24} 
                                    md={24}
                                    style={{marginTop:'10px'}}
                                >
                                    <Row>
                                        <Col
                                            xl={20} 
                                            md={20}
                                        >
                                            <span>{this.state.nombreArchivo}</span>
                                        </Col>
                                        <Col xl={4} md={4}>
                                            <img style={{cursor:'pointer'}} onClick={this.eliminarArchivo} src={require('assets/images/equis.png')} alt=''  />
                                        </Col>
                                    </Row>
                                </Col>
                                :null
                            }
                            <Col xl={24} md={24} className="gx-text-center" style={{marginTop:'30px'}}>
                                <Button
                                    style={{background:'#C4C4C4', borderRadius:'20px', color:'white'}}
                                    onClick={this.guardarCambios}
                                >
                                    Guardar
                                </Button>
                            </Col>
                        </Row>
                }
            </Card>
        );
    }
}

export default CardCargarArchivo;
