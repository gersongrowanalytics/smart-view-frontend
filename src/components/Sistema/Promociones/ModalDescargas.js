import React from 'react'
import { Modal, Button, Row, Col, Checkbox} from 'antd';
import {useDispatch} from "react-redux";
import { CloseOutlined } from '@ant-design/icons';
import 'styles/Sistema/Promociones/ModalDescargas.css'
import ReactExport from 'react-data-export';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const ModalDescargas = (props) => {

    const dispatch = useDispatch();

    return (
        <>
            <Modal 
                title={null} 
                visible={props.mostrarModalDescargas} 
                // footer = {null}
                onOk={() => {console.log("ok")}}
                footer={[
                    <Button key="back" onClick={() => dispatch(props.ActivarModalDescargas(false))}>
                      Cancelar
                    </Button>,

                    <ExcelFile 
                        filename="PROMOCIONES"
                        element={
                            <Button key="submit" type="primary" >
                                Descargar
                            </Button>
                            // <button 
                            //     type="button" 
                            //     class="ant-btn ant-btn-lg btnDescargar"
                            //     onClick={() => {descargarPromociones()}}
                                
                            // >
                            //     <span>Descargar</span> 
                            //     <img 
                            //         alt="" 
                            //         src={require("assets/images/iconoDescargar.png")} 
                            //         style={{marginLeft:'10px'}} 
                            //         width="20px" 
                            //         height="20px"
                            //     />
                            // </button>
                        }>
                        <ExcelSheet 
                            dataSet={props.promocionesExcelEspecifico} 
                            name="Organization"
                        />
                    </ExcelFile>
                ]}
                className="modalDescargarPromociones"
                closeIcon = {
                    <Button
                        style={{background:'#558CFF', border:'none', marginTop:'10px', marginRight:'5px'}}
                        shape="circle" 
                        icon={<CloseOutlined style={{"color" : 'white'}} />} 
                        onClick={() => dispatch(props.ActivarModalDescargas(false))}
                    >
                    </Button>
                }
                width={
                    props.zonas.length == 1 ? "400px" : props.zonas.length == 2 ? "800px" : props.zonas.length == 3 ? "1000px" : props.zonas.length == 4 ? "800px" : props.zonas.length == 5 ? "1000px" : props.zonas.length == 6 ? "1000px" : "1000px"
                }
            >
                <Row>
                    <Col xl={24} sm={24} md={24} xs={24} id="Titulo-ModalDescargas">
                        DESCARGA DE ARCHIVOS
                        <p id = "SubTitulo-ModalDescargas" onClick={() => dispatch(props.SeleccionarTodasSucursalesDescargasReducer(true))}>SELECCIONAR TODO</p>
                    </Col>

                </Row>
                <Row>
                    {
                        props.zonas.map((zona, posicion) => {
                            return(
                                <Col 
                                    xl={props.zonas.length == 1 ? 24 : props.zonas.length == 2 ? 12 : props.zonas.length == 3 ? 8 : props.zonas.length == 4 ? 12 : props.zonas.length == 5 ? posicion <= 2 ? 8 : 12 : props.zonas.length == 6 ? 8 : 8   } 
                                    sm={props.zonas.length == 1 ? 24 : props.zonas.length == 2 ? 12 : props.zonas.length == 3 ? 8 : props.zonas.length == 4 ? 12 : props.zonas.length == 5 ? posicion <= 2 ? 8 : 12 : props.zonas.length == 6 ? 8 : 8   } 
                                    md={props.zonas.length == 1 ? 24 : props.zonas.length == 2 ? 12 : props.zonas.length == 3 ? 8 : props.zonas.length == 4 ? 12 : props.zonas.length == 5 ? posicion <= 2 ? 8 : 12 : props.zonas.length == 6 ? 8 : 8   } 
                                    xs={props.zonas.length == 1 ? 24 : props.zonas.length == 2 ? 12 : props.zonas.length == 3 ? 8 : props.zonas.length == 4 ? 12 : props.zonas.length == 5 ? posicion <= 2 ? 8 : 12 : props.zonas.length == 6 ? 8 : 8   } 
                                    id="Contenedor-Zona-ModalDescargas"
                                >
                                    <p id="Titulo-Zona-ModalDescargas">
                                        <Checkbox 
                                            checked={zona.zonpromociondescarga} 
                                            onClick={(e) => dispatch(props.SeleccionarSucursalesZonaReducerReducer(zona.zonid, posicion, e.target.checked))}></Checkbox>
                                        <span id="Checkbox-Zona-ModalDescargas">{zona.zonnombre}</span></p>
                                    {
                                        props.sucursalesUsuario.map((sucursal, posicionSucursal) => {
                                            return(
                                                sucursal.zonid == zona.zonid
                                                ?<p id="Titulo-Sucursal-ModalDescargas">
                                                    <Checkbox 
                                                        checked={sucursal.sucpromociondescarga}
                                                        onClick={(e) => dispatch(props.SeleccionarSucursalDescargasReducer(posicionSucursal, e.target.checked))}
                                                    >
                                                    </Checkbox> 
                                                    <span id="Checkbox-Sucursal-ModalDescargas">{sucursal.sucnombre}</span></p>
                                                :null
                                            )
                                        })
                                    }
                                </Col>
                            )
                        })
                    }
                </Row>
                
                {/* <p>Some contents...</p>
                <p>Some contents...</p> */}
                {/* <ExcelFile 
                    filename="PROMOCIONES"
                    element={
                        <button 
                            type="button" 
                            class="ant-btn ant-btn-lg btnDescargar"
                            onClick={() => {descargarPromociones()}}
                            
                        >
                            <span>Descargar</span> 
                            <img 
                                alt="" 
                                src={require("assets/images/iconoDescargar.png")} 
                                style={{marginLeft:'10px'}} 
                                width="20px" 
                                height="20px"
                            />
                        </button>
                    }>
                    <ExcelSheet 
                        dataSet={promocionesExcel} 
                        name="Organization"
                    />
                </ExcelFile> */}
            </Modal>
        </>
    )
}

export default ModalDescargas
