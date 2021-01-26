import React, {Component} from 'react';
import {Button, Card, message, Spin, Row, Col} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import config from 'config'
import axios from 'axios'

class CardCargarArchivo extends Component {
    constructor(){
        super();
        this.state = {
            subioArchivo     : false,
            guardarCambios   : false,
            enviarCambios    : false,
            nombreArchivo    : '',
            fileSeleccionado : null,
            cargando         : false,
            archivoExito     : true
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

    async cambioInputFile(event){
        event.stopPropagation();
        event.preventDefault();
        this.state.fileSeleccionado = event.target.files[0];

        this.setState({
            subioArchivo  : true,
            nombreArchivo : this.state.fileSeleccionado['name']
        })
    }

    eliminarArchivo(){
        this.setState({
            subioArchivo     : false,
            nombreArchivo    : '',
            fileSeleccionado : null
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

    async enviarCambios(){
        this.setState({
            cargando : true
        })

        const formData = new FormData();
        formData.append('file',this.state.fileSeleccionado)
        
        let url = config.api+this.props.url
        // cargarArchivo/promociones
        // cargarArchivo/ventas/obejtivos
        // cargarArchivo/ventas/sellin
        await axios.post(url, formData,{
            mode:'cors',
            headers: {
                'Accept' : 'application/json',
                'content-type': 'multipart/form-data',
                'api_token': localStorage.getItem('usutoken'),
                'api-token': localStorage.getItem('usutoken'),
            }
        })
        .then(rpta => {
            let datos = rpta.data
            if(datos.respuesta == true){
                this.setState({
                    archivoExito : true
                })
            }else{
                this.setState({
                    archivoExito : false
                })
                message.error(datos.mensaje);
            }
        })
        .catch((error)=> {
            this.setState({
                cargando : false,
                archivoExito : false
            })
        });
        

        this.setState({
            enviarCambios   : true,
            guardarCambios  : false,
            cargando        : false,
            fileSeleccionado: null
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
            <Spin tip="Enviando..." spinning={this.state.cargando}>
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

                                {
                                    this.state.archivoExito == true
                                    ?<Col xl={24} md={24} className="gx-text-center" style={{marginTop:'10px'}}>
                                        <b>¡Listo!<br/></b>
                                        <span>El archivo se subió con éxito</span>
                                    </Col>
                                    :<Col xl={24} md={24} className="gx-text-center" style={{marginTop:'10px'}}>
                                        <b>¡Lo sentimos!<br/></b>
                                        <span>El archivo no se pudo subir</span>
                                    </Col>
                                }
                                    
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
                                {/* <Col xl={1} md={1} />  */}
                                <div style={{width:'10px'}} />
                                <Col 
                                    xl={23} 
                                    md={23} 
                                    // className="gx-text-center"
                                    style={{
                                        "fontStyle": "normal",
                                        "fontWeight": "600",
                                        "fontSize": "14px",
                                        // "lineHeight": "27px",
                                        "color": "#4D4D4D"
                                    }}
                                >
                                    <input type="file" id="file" ref="subirArchivoInput" style={{display: "none"}} onChange={(e) => this.cambioInputFile(e)} />
                                    {
                                        this.props.titulo.length > 26
                                        ?<Row className="">
                                            
                                            <Col xl={2} md={2} style={{marginLeft:'10px', }}>
                                                <Button
                                                    style={{background:'#52B893', border:'none', marginTop:'10px',}}
                                                    shape="circle" 
                                                    icon={<PlusOutlined style={{"color" : 'white'}} />} 
                                                    onClick={this.seleccionarFile}
                                                >
                                                </Button>
                                            </Col>
                                            <Col xl={20} md={20} style={{paddingLeft:'25px', paddingTop:'8px'}}>
                                                <p>{this.props.titulo}</p>
                                            </Col>
                                        </Row>
                                        :<div>
                                            <Button
                                                style={{background:'#52B893', border:'none', marginTop:'10px', marginRight:'5px'}}
                                                shape="circle" 
                                                icon={<PlusOutlined style={{"color" : 'white'}} />} 
                                                onClick={this.seleccionarFile}
                                            >
                                            </Button>
                                            {this.props.titulo}
                                        </div>
                                    }
                                    {/* <div style={{borderBottom: '0.1px solid #CCCCCC', width:'100%'}} /> */}
                                </Col>
                                <Col xl={24} md={24}>
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
            </Spin>
        );
    }
}

export default CardCargarArchivo;
