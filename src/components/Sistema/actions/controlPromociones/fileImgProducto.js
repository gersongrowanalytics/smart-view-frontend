import React from 'react';
import {message } from "antd";

class FileImgProducto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imagenPreviewProducto : null,
            fileProducto : "",
            prbid : ""
        }
        this.slide = React.createRef()
    }
    
    
    // SELECCIOJNAR ARCHIVOS DE  
    seleccionarImagenProducto(prbid) {
        this.props.data.prbideditar = prbid
        this.setState({
            prbid : prbid
        })  
        this.refs.seleccionarImagenProductoRef.click();
    }

    render() {
        return(
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
                                reader.onloadend = () => {
                                    this.setState({
                                        fileProducto: reader.result
                                    });
                                    this.props.data.prpimageneditar = reader.result
                                };
                                this.setState({
                                    imagenPreviewProducto :  URL.createObjectURL(event.target.files[0])
                                })
                            }else{
                                message.error('Lo sentimos, es necesario seleccionar una imagen') 
                            }
                        }
                    } 
                />
                
                {
                    this.props.data.editar == true
                    ?<div class="gx-flex-row gx-align-items-center" style={{cursor:'pointer'}}>
                        <img 
                            onClick = {() => this.seleccionarImagenProducto(this.props.data.prbid)} 
                            class="gx-size-100"
                            src={
                                this.state.imagenPreviewProducto == null
                                ? "https://cdn.pixabay.com/photo/2017/11/10/05/24/upload-2935442_960_720.png"
                                : this.state.imagenPreviewProducto
                            } 
                            alt="" />
                    </div>
                    :<div class="gx-flex-row gx-align-items-center">
                        <img class=" gx-size-100 " src={this.props.data.prbimagen} alt="" />
                    </div>
                    }
                
            </div>
        )
    }
  }

  
export default FileImgProducto