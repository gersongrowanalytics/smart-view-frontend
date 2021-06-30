import React, {useEffect, useState} from 'react'
import {
    AplicarFiltrosFechaResumenPagoReducer
} from 'appRedux/actions/Sucursales'

import { Modal, Button, Row, Col, Checkbox, Select } from 'antd';
import {useDispatch} from "react-redux";
import { CloseOutlined } from '@ant-design/icons';
import 'styles/Sistema/Promociones/ModalDescargas.css'
import ReactExport from 'react-data-export';

// IMPORTAR DATE PICKER
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import DatePicker from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es);

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const ModalReporetePagos = (props) => {

    const dispatch = useDispatch();

    useEffect(() =>  {
        dispatch(props.ObtenerReportesPagosDescargaEspecifica(null, null))
    }, [])

    const [fechaIncio, setFechaIncio] = useState(null);
    const [fechaFinal, setFechaFinal] = useState(null);
    const [seleccionartodo, setseleccionartodo] = useState(false);

    function cambiarFechaFinal(date) {
        setFechaFinal(date)
        dispatch(AplicarFiltrosFechaResumenPagoReducer(fechaIncio, date))
    }

    return (
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
                    filename="Reporte Pagos"
                    element={
                        <Button 
                            loading={props.cargandoReportePagos}
                            key="submit" type="primary" style={{marginRight:'10px'}}>
                            Reporte Pagos
                        </Button>
                    }>
                    <ExcelSheet 
                        dataSet={props.promocionesExcelEspecifico} 
                        name="Reporte Pagos"
                    />
                </ExcelFile>,

                // <ExcelFile 
                //     filename="Reconocimiento"
                //     element={
                //         <Button key="submit" type="primary" style={{marginRight:'10px'}}>
                //             Reconocimiento
                //         </Button>
                //     }>
                //     <ExcelSheet 
                //         dataSet={props.reconocimientoExcelEspecifico} 
                //         name="Reporte Pagos"
                //     />
                // </ExcelFile>,

                <ExcelFile 
                    filename="Promociones Liquidadas"
                    element={
                        <Button loading={props.cargandoReportePagos} key="submit" type="primary" >
                            Promociones Liquidadas
                        </Button>
                    }>
                    <ExcelSheet 
                        dataSet={props.promocionesliquidacionesExcelEspecifico} 
                        name="Promociones Liquidadas"
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
                    <p style={{
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: "12px",
                        lineHeight: "14px",
                        color: "#558CFF",
                        marginTop:'5px'
                    }}>{props.fechaActualizacionReportePago}</p>
                    <p id = "SubTitulo-ModalDescargas" 
                        onClick={() => {
                            dispatch(props.SeleccionarTodasSucursalesDescargasReducer(!seleccionartodo, fechaIncio, fechaFinal))
                            setseleccionartodo(!seleccionartodo)
                        }}
                    >SELECCIONAR TODO</p>
                </Col>
                <Col xl={24}>
                    <Row style={{marginLeft: "50px", marginBottom:'30px'}}>
                        <Col xl={8} sm={8} md={8} xs={8}>
                            <Select 
                                defaultValue={0} style={{ width: "240px" }} 
                                onChange={(e) => dispatch(props.SeleccionarGrupoSucursalesDescargarReducer(e, fechaIncio, fechaFinal))}
                            >
                                <Select.Option value={0}>{"Ninguno"}</Select.Option>
                                {
                                    props.gsus.map((gsu) => {
                                        return (
                                            <Select.Option value={gsu.gsuid}>{gsu.gsunombre}</Select.Option>
                                        )
                                    })
                                }
                            </Select>
                        </Col>
                        <Col xl={8} sm={8} md={8} xs={8}>
                            <div className="Contenedor-Fecha-ModalReporetePago">
                                <div className="Fecha-Izquierda-ModalReporetePago">
                                    Fecha Inicio
                                </div>
                                <DatePicker
                                    locale="es"
                                    selected={fechaIncio}
                                    onChange={date => setFechaIncio(date)}
                                    dateFormat="MMMM, yyyy"
                                    showMonthYearPicker
                                    autoComplete={"off"}
                                    className="Fecha-Derecha-ModalReporetePago"
                                />
                            </div> 
                            
                        </Col>
                        <Col xl={8} sm={8} md={8} xs={8}>
                            <div className="Contenedor-Fecha-ModalReporetePago">
                                <div className="Fecha-Izquierda-ModalReporetePago">
                                    Fecha Final
                                </div>
                                <DatePicker
                                    locale="es"
                                    selected={fechaFinal}
                                    onChange={date => cambiarFechaFinal(date)}
                                    dateFormat="MMMM, yyyy"
                                    showMonthYearPicker
                                    autoComplete={"off"}
                                    className="Fecha-Derecha-ModalReporetePago"
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{marginLeft: "50px"}}>
                {
                    props.zonas.map((zona, posicion) => {
                        return(
                            <Col 
                                key={zona.zonid}
                                xl={props.zonas.length == 1 ? 24 : props.zonas.length == 2 ? 12 : props.zonas.length == 3 ? 8 : props.zonas.length == 4 ? 12 : props.zonas.length == 5 ? posicion <= 2 ? 8 : 12 : props.zonas.length == 6 ? 8 : 8   } 
                                sm={props.zonas.length == 1 ? 24 : props.zonas.length == 2 ? 12 : props.zonas.length == 3 ? 8 : props.zonas.length == 4 ? 12 : props.zonas.length == 5 ? posicion <= 2 ? 8 : 12 : props.zonas.length == 6 ? 8 : 8   } 
                                md={props.zonas.length == 1 ? 24 : props.zonas.length == 2 ? 12 : props.zonas.length == 3 ? 8 : props.zonas.length == 4 ? 12 : props.zonas.length == 5 ? posicion <= 2 ? 8 : 12 : props.zonas.length == 6 ? 8 : 8   } 
                                xs={props.zonas.length == 1 ? 24 : props.zonas.length == 2 ? 12 : props.zonas.length == 3 ? 8 : props.zonas.length == 4 ? 12 : props.zonas.length == 5 ? posicion <= 2 ? 8 : 12 : props.zonas.length == 6 ? 8 : 8   } 
                                id="Contenedor-Zona-ModalDescargas"
                            >
                                <p id="Titulo-Zona-ModalDescargas">
                                    <Checkbox 
                                        checked={zona.zonpromociondescarga} 
                                        onClick={(e) => dispatch(props.SeleccionarSucursalesZonaReducerReducer(zona.zonid, posicion, e.target.checked, fechaIncio, fechaFinal))}></Checkbox>
                                    <span id="Checkbox-Zona-ModalDescargas">{zona.zonnombre}</span></p>
                                {
                                    props.sucursalesUsuario.map((sucursal, posicionSucursal) => {
                                        return(
                                            sucursal.zonid == zona.zonid
                                            ?<p key={sucursal.sucid} id="Titulo-Sucursal-ModalDescargas">
                                                <Checkbox 
                                                    checked={sucursal.sucpromociondescarga}
                                                    onClick={(e) => dispatch(props.SeleccionarSucursalDescargasReducer(posicionSucursal, e.target.checked, fechaIncio, fechaFinal))}
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
            
        </Modal>
    )
}

export default ModalReporetePagos
