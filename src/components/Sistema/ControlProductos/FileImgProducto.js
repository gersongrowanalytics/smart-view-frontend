import React from 'react';
import {message, Spin } from "antd";
import IconoSeleccionarImagen from 'assets/images/ControlProductos/seleccionarImagen.png'

class FileImgProducto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imagenPreviewProducto : null,
            fileProducto : "",
            prbid : "",
            editando : true,
            contador : 5,
            cargando : false
        }
        this.slide = React.createRef()
    }
    
    
    // SELECCIOJNAR ARCHIVOS DE  
    seleccionarImagenProducto(prbid) {
        // this.props.data.prbideditar = prbid
        // this.setState({
        //     prbid : prbid
        // })  
        this.refs.seleccionarImagenProductoRef.click();
    }

    render() {
        return(
            <Spin tip="Cargando..." spinning={this.state.cargando}>
                <div>
                    <input 
                        type="file" 
                        id="file" 
                        ref="seleccionarImagenProductoRef" 
                        style={{display: "none"}} 
                        onChange={
                            (event) => {
                                event.stopPropagation();
                                event.preventDefault();
                                if(event.target.files.length > 0){
                                    let reader = new FileReader();
                                    reader.readAsDataURL(event.target.files[0]);
                                    reader.onloadend = async () => {
                                        this.setState({
                                            fileProducto: reader.result,
                                            cargando :true
                                        });
                                        this.props.productos.proimagen = reader.result
                                        // console.log(reader.result)
                                        await this.props.AsignarImagen(reader.result)
                                        this.setState({
                                            cargando : false
                                        })

                                        // this.props.data.prbimageneditar = reader.result
                                        // this.props.data.prbid = this.props.data.prbidex
                                    };
                                    this.setState({
                                        imagenPreviewProducto :  URL.createObjectURL(event.target.files[0])
                                    })

                                    // this.props.AsignarImagen()

                                }else{
                                    message.error('Lo sentimos, es necesario seleccionar una imagen') 
                                }
                            }
                        } 
                    />
                    
                    {
                        // this.props.data.editar == true
                        this.state.editando == true
                        ?<div class="gx-flex-row gx-align-items-center" style={{cursor:'pointer'}}>
                            <div>
                                <img 
                                    // onClick = {() => this.seleccionarImagenProducto(this.props.data.prbidex)} 
                                    onClick = {() => this.seleccionarImagenProducto()} 
                                    className="Imagen-Producto-Control-Productos" 
                                    src={
                                        this.state.imagenPreviewProducto == null
                                        ? IconoSeleccionarImagen
                                        : this.state.imagenPreviewProducto
                                    } 
                                    alt="" />

                                <div style={{textAlignLast: "center"}}>
                                    {/* {this.state.contador} */}
                                </div>
                            </div>
                        </div>
                        :<div class="gx-flex-row gx-align-items-center">
                            <img 
                                // src={this.props.data.prbimagen} 
                                // src={this.props.productos.proimagen} 
                                src={IconoSeleccionarImagen}
                                alt="" 
                                className="Imagen-Producto-Control-Productos" 
                            />
                        </div>
                        }
                    
                </div>
            </Spin>
        )
    }
  }

  
export default FileImgProducto