import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos";
import {seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'
import {
    ObtenerNumerosMesReducer,
    ObtenerMesSeleccionadoReducer,
    ObtenerAnioSeleccionadoReducer,
    ObtenerSellOutDiaReducer,
    ObtenerSellOutMensualReducer
} from 'appRedux/actions/ControlSellOut/ControlSellOut'
import {Col, Row, Card, Form, Select, Spin, Button, Alert } from "antd";
import 'styles/Sistema/ControlSellOut/ControlSellOut.css'
import Music from './Music'

const ControlSellOut = () => {

    const dispatch = useDispatch();
    const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
    const {vistaPromocionSeleccionado} = useSelector(({promociones}) => promociones);
    const {vistaVentasSeleccionado}= useSelector(({ventasTpr}) => ventasTpr);
    const {meses, mesSeleccionado, anioSeleccionado, cargandoTodoMes, mensajes}= useSelector(({controlSellOut}) => controlSellOut);

    useEffect(() => {
        if(cargaArchivosSeleccionado == true){
            dispatch(seleccionarCargaArchivosReducer(false))
        }
    
        if(vistaPromocionSeleccionado == true){
            dispatch(seleccionarVistaPromocionReducer(false))
        }
    
        if(vistaVentasSeleccionado == true){
            dispatch(seleccionarVistaVentasReducer(false))
        }

        dispatch(ObtenerNumerosMesReducer(anioSeleccionado,  mesSeleccionado ))
  
    }, [])



    return (
        <Spin tip="Enviando..." spinning={cargandoTodoMes}>
            <Row>
                <Music/>
                <Col xl={24} sm={24} md={24} xs={24} >
                    <Row className={"contenedorFiltro-ControlSellOut"}>
                        <Col xl={4} sm={4} md={4} xs={4} id="filtroMes-ControlSellOut">
                            <span id="tituloFiltroMes-ControlSellOut">Mes:</span>
                            <Form.Item name="grupoRebate">
                                <Select
                                    onChange={ async (valor) => {
                                        dispatch(ObtenerMesSeleccionadoReducer(valor))
                                        dispatch(ObtenerNumerosMesReducer(anioSeleccionado,  valor ))
                                    }}
                                    defaultValue={mesSeleccionado} 
                                >
                                        <Select.Option value={1}>Enero</Select.Option>
                                        <Select.Option value={2}>Febrero</Select.Option>
                                        <Select.Option value={3}>Marzo</Select.Option>
                                        <Select.Option value={4}>Abril</Select.Option>
                                        <Select.Option value={5}>Mayo</Select.Option>
                                        <Select.Option value={6}>Junio</Select.Option>
                                        <Select.Option value={7}>Julio</Select.Option>
                                        <Select.Option value={8}>Agosto</Select.Option>
                                        <Select.Option value={9}>Setiembre</Select.Option>
                                        <Select.Option value={10}>Octubre</Select.Option>
                                        <Select.Option value={11}>Noviembre</Select.Option>
                                        <Select.Option value={12}>Diciembre</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xl={4} sm={4} md={4} xs={4} >
                            <span id="tituloFiltroAnio-ControlSellOut">Año:</span>
                            <Form.Item name="grupoRebate">
                                <Select
                                    defaultValue={anioSeleccionado} 
                                    onChange={(valor) => {
                                        dispatch(ObtenerAnioSeleccionadoReducer(valor))
                                        dispatch(ObtenerNumerosMesReducer(valor,  mesSeleccionado ))

                                    } }
                                >
                                        <Select.Option value={2020}>2020</Select.Option>
                                        <Select.Option value={2021}>2021</Select.Option>
                                        <Select.Option value={2022}>2022</Select.Option>
                                        <Select.Option value={2023}>2023</Select.Option>
                                        <Select.Option value={2024}>2024</Select.Option>
                                        <Select.Option value={2025}>2025</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xl={4} sm={4} md={4} xs={4} >
                            <br/>
                            <Button onClick={() => dispatch(ObtenerSellOutMensualReducer(anioSeleccionado, mesSeleccionado))}>
                                Todo el Mes
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col xl={16} sm={16} md={16} xs={16} >
                    <Row>
                        {
                            // [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}].map((data, posicion) => {
                            meses.map((dat, posicion) => {
                                return ( 
                                    dat.seleccionado == true
                                    ?dat.dias.map((data) => {
                                        return (
                                            <Col xl={4} sm={4} md={4} xs={4} >
                                                <Spin tip="Enviando..." spinning={data.cargando}>
                                                    <Card 
                                                        id="contenedorDia-ControlSellOut"
                                                        onClick = {() => dispatch(ObtenerSellOutDiaReducer(dat.anio, dat.mes, data.numero, true))}
                                                    >
                                                        {data.numero}<br/>
                                                        {data.dia}
                                                        {
                                                            data.diaActual == true
                                                            ?<div id="diaActual-ControlSellOut">
                                                                HOY
                                                            </div>
                                                            :null
                                                        }
                
                                                        {
                                                            data.completado == true
                                                            ?<div id="cargaCompletada-ControlSellOut">
                                                                <i class="icon icon-check-circle-o"></i>
                                                            </div>
                                                            :null
                                                        }

                                                        {
                                                            data.error == true
                                                            ?<div id="cargaError-ControlSellOut">
                                                                <i class="icon icon-close-circle"></i>
                                                            </div>
                                                            :null
                                                        }
                                                    </Card>
                                                </Spin>
                                            </Col>
                                        )
                                    })
                                    :null
                                )
                            })
                        }
                    </Row>
                </Col>
                <Col xl={8} sm={8} md={8} xs={8} id="contenedorObservaciones-ControlSellOut">
                        <h1>Observaciones:</h1>

                        {
                            mensajes.map((data) => {
                                return (
                                    <Alert
                                        message={data.message}
                                        description={data.description}
                                        type={data.tipo}
                                        showIcon
                                    />
                                )
                            })
                        }
                </Col>
            </Row>
        </Spin>
    )
}

export default ControlSellOut
