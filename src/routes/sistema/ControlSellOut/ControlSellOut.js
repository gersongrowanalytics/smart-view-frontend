import React from 'react'
import {Link} from "react-router-dom";
import {Col, Row, Tooltip  } from "antd";
import 'styles/Sistema/ControlSellOut/ControlSellOut.css'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {
    DescargarMesActualReducer
} from 'appRedux/actions/ControlSellOut/ControlSellOut'
import {useSelector, useDispatch} from "react-redux"
import ReactExport from 'react-data-export';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const ControlSellOut = () => {
    const dispatch = useDispatch()
    const {cargandoDescargaMesAcutal, dataMesActualExcel}= useSelector(({controlSellOut}) => controlSellOut);

    return (
        <Row>
            <Col xl={24} md={24} sm={24} xs={24}>
                <Row>
                    <Col xl={2} md={2} sm={2} xs={2}>
                        <Link to="/sistema/controlSellOut/calendario">
                            <Tooltip title="Calendario">
                                <div id="Cont-Icono-ContSellOut" >
                                    <img alt="" src={require("assets/images/iconos/Calendario.png")} width={"35px"} height={"35px"}/>
                                </div>
                            </Tooltip>
                        </Link>
                    </Col>
                    <Col xl={2} md={2} sm={2} xs={2}>
                        <Tooltip title="Descargar Mes Actual">
                            <Spin 
                                spinning = {cargandoDescargaMesAcutal}
                                indicator={<LoadingOutlined spin />} 
                            >
                                {
                                    dataMesActualExcel.length > 0
                                    ?<ExcelFile 
                                        filename="Sell Out"
                                        element={
                                            <div
                                                // onClick={() => {dispatch(DescargarMesActualReducer())}}
                                                id="Cont-Icono-ContSellOut" 
                                                style={dataMesActualExcel.length > 0 ?{background: 'green', opacity:'0.8'} : cargandoDescargaMesAcutal == true ? { background: '#BDCD43', opacity:'0.6'} : {}} >
                                                <img alt="" src={require("assets/images/iconos/Descarga.png")} width={"35px"} height={"35px"}/>
                                            </div>
                                        }>
                                        <ExcelSheet 
                                            dataSet={dataMesActualExcel} 
                                            name="Sell Out"
                                        />
                                    </ExcelFile>
                                    :<div
                                        onClick={() => {dispatch(DescargarMesActualReducer())}}
                                        id="Cont-Icono-ContSellOut" 
                                        style={dataMesActualExcel.length > 0 ?{background: 'green', opacity:'0.8'} : cargandoDescargaMesAcutal == true ? { background: '#BDCD43', opacity:'0.6'} : {}} >
                                        <img alt="" src={require("assets/images/iconos/Descarga.png")} width={"35px"} height={"35px"}/>
                                    </div>
                                }
                                
                                
                            </Spin>
                        </Tooltip>
                    </Col>
                    <Col xl={2} md={2} sm={2} xs={2}>
                        <Tooltip title="Descargar Especifica">
                            <div id="Cont-Icono-ContSellOut" >
                                <img alt="" src={require("assets/images/iconos/DescargaEspecifica.png")} width={"35px"} height={"35px"}/>
                            </div>
                        </Tooltip>
                    </Col>
                    
                </Row>
            </Col>
        </Row>
    )
}

export default ControlSellOut
