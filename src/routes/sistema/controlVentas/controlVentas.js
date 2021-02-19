import React, {useEffect} from 'react'
import AmCharts from "@amcharts/amcharts3-react";
import {Card, Button, Checkbox , Row, Col, Form, Select  } from "antd";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    ObtenerEstadisticaXZona, 
    ObtenerEstadisticaXVentasReducer, 
    FiltrarPorReducer,
    SeleccionarTprReducer,
    SeleccionarTodasCategoriasReducer
} from "appRedux/actions/controlVentas/controlVentas";
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos";
import {seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'
import {ObtenerCategorias} from 'appRedux/actions/Mostrar/Cats'
import 'styles/Sistema/ControlVentas/ControlVentas.css'

const ControlVentas = () => {

    const dispatch = useDispatch();
    const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
    const {vistaPromocionSeleccionado} = useSelector(({promociones}) => promociones);
    const {vistaVentasSeleccionado}= useSelector(({ventasTpr}) => ventasTpr);
    const {
        dataGraficoSeleccionado,
        filRegion,
        filZona,
        filGrupo,
        filCategoria,
        todasCategorias,
        tpridSeleccionado
    }= useSelector(({controlVentas}) => controlVentas);
    const { fechasFiltro } = useSelector(({fechas}) => fechas)
    const {zonas, cass, gsus } = useSelector(({sucursales}) => sucursales)
    const {cats}= useSelector(({mostrarCats}) => mostrarCats);

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

    //   dispatch(ObtenerEstadisticaXZona(false))
    dispatch(ObtenerCategorias())

    }, [])


    function handleChange(value) {
        // dispatch(ObtenerEstadisticaXZona(false))
        console.log(`selected ${value}`);
    }

    function cambioCategoria(valores) {

        if(valores.length >= 5){
            dispatch(SeleccionarTodasCategoriasReducer(true))
        }else{
            dispatch(SeleccionarTodasCategoriasReducer(false))
        }

        valores.map((valor) => {
            if(valor == "todas"){
                dispatch(SeleccionarTodasCategoriasReducer(true))
            }else{
            }
        })
    }

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    
    const onFinish = async values =>  {
        console.log(values)
        dispatch(
            ObtenerEstadisticaXVentasReducer(
                tpridSeleccionado,
                values.anios == null ? [] : values.anios,
                values.meses == null ? [] : values.meses,
                filRegion,
                values.regiones == null ? [] : values.regiones,
                filZona,
                values.zonas == null ? [] : values.zonas,
                filGrupo,
                values.grupos == null ? [] : values.grupos,
                filCategoria,
                todasCategorias,
                values.categorias == null ? [] : values.categorias,

            )
        )
    };

    return (
        <Row>
            <Col xl={24} md={24} sm={24} xs={24}>
                <Row>
                    <Col xl={2} md={2} sm={2} xs={12}>
                        <div id="Cont-Icono-ContSellOut" 
                            onClick={() => dispatch(SeleccionarTprReducer(1))} 
                            style={tpridSeleccionado == 1 ?{backgroundColor: "#4CB69E", color: "#ffff"} : {}}>
                            <div class="gx-icon-views" id="Cont-Icono-ContVentas">
                                <i class="icon icon-chart-area" id="Icono-ContVentas"></i>
                                <span class="gx-icon-text">Sell In</span>
                            </div>
                        </div>
                    </Col>

                    <Col xl={2} md={2} sm={2} xs={12}>
                        <div id="Cont-Icono-ContSellOut"
                            onClick={() => dispatch(SeleccionarTprReducer(2))} 
                            style={tpridSeleccionado == 2 ?{backgroundColor: "#4CB69E", color: "#ffff"} : {}}>
                            <div class="gx-icon-views" id="Cont-Icono-ContVentas">
                                <i class="icon icon-chart-area" id="Icono-ContVentas"></i>
                                <span class="gx-icon-text">Sell Out</span>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Col>
            
            <Col xl={24} md={24} sm={24} xs={24} style={{marginTop:'60px'}}>
                <Row>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <div id="Cont-CardGrafico-ContVentas">
                            <Form
                                name="basic"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Row style={{marginBottom:'40px'}}>
                                    <Col xl={3} md={3} sm={3} xs={3}>
                                        <span style={{paddingLeft:'5px', paddingBottom:'5px'}}>Año:</span><br/>
                                        <Form.Item
                                            name="anios"
                                            style={{
                                                marginLeft: "0px",
                                                marginRight: "0px"
                                            }}
                                        >
                                            <Select
                                                mode="multiple"
                                                style={{ width: '100%' }}
                                                placeholder="selecciona años"
                                                onChange={handleChange}
                                            >
                                                {
                                                    fechasFiltro.anos.map((anio) => {
                                                        return (
                                                            <Select.Option value={anio}>
                                                                {anio}
                                                            </Select.Option>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col xl={3} md={3} sm={3} xs={3}>
                                        <span style={{paddingLeft:'5px', paddingBottom:'5px'}}>Mes:</span><br/>
                                        <Form.Item
                                            name="meses"
                                            style={{
                                                marginLeft: "0px",
                                                marginRight: "0px"
                                            }}
                                        >
                                            <Select
                                                mode="multiple"
                                                style={{ width: '100%' }}
                                                placeholder="selecciona meses"
                                                onChange={handleChange}
                                            >
                                                {
                                                    fechasFiltro.meses.map((mes) => {
                                                        return (
                                                            <Select.Option value={mes}>
                                                                {mes}
                                                            </Select.Option>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col xl={4} md={4} sm={4} xs={4}>
                                        <Checkbox value={filRegion} checked={filRegion} onChange={(e) => {dispatch(FiltrarPorReducer(e.target.checked, false, false, false))}}></Checkbox>
                                        <span style={{paddingLeft:'5px', paddingBottom:'5px'}}>Regiones:</span><br/>
                                        <Form.Item
                                            name="regiones"
                                            style={{
                                                marginLeft: "0px",
                                                marginRight: "0px"
                                            }}
                                        >
                                            <Select
                                                disabled={!filCategoria}
                                                mode="multiple"
                                                style={{ width: '100%' }}
                                                placeholder="selecciona regiones"
                                                onChange={handleChange}
                                            >
                                                {
                                                    cass.map((cas) => {
                                                        return (
                                                            <Select.Option value={cas.casid}>
                                                                {cas.casnombre}
                                                            </Select.Option>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col xl={4} md={4} sm={4} xs={4}>
                                        <Checkbox value={filZona} checked={filZona} onChange={(e) => {dispatch(FiltrarPorReducer(false, e.target.checked, false, false))}}></Checkbox>
                                        <span style={{paddingLeft:'5px', paddingBottom:'5px'}}>Zonas:</span><br/>
                                        <Form.Item
                                            name="zonas"
                                            style={{
                                                marginLeft: "0px",
                                                marginRight: "0px"
                                            }}
                                        >
                                            <Select
                                                disabled={!filCategoria}
                                                mode="multiple"
                                                style={{ width: '100%' }}
                                                placeholder="selecciona zonas"
                                                onChange={handleChange}
                                            >
                                                {
                                                    zonas.map((zona) => {
                                                        return (
                                                            <Select.Option value={zona.zonid}>
                                                                {zona.zonnombre}
                                                            </Select.Option>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col xl={4} md={4} sm={4} xs={4}>
                                        <Checkbox value={filGrupo} checked={filGrupo} onChange={(e) => {dispatch(FiltrarPorReducer(false, false, e.target.checked, false))}}></Checkbox>
                                        <span style={{paddingLeft:'5px', paddingBottom:'5px'}}>Grupos:</span><br/>
                                        <Form.Item
                                            name="grupos"
                                            style={{
                                                marginLeft: "0px",
                                                marginRight: "0px"
                                            }}
                                        >
                                            <Select
                                                disabled={!filCategoria}
                                                mode="multiple"
                                                style={{ width: '100%' }}
                                                placeholder="selecciona grupos"
                                                onChange={handleChange}
                                            >
                                                {
                                                    gsus.map((gsu) => {
                                                        return (
                                                            <Select.Option value={gsu.gsuid}>
                                                                {gsu.gsunombre}
                                                            </Select.Option>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    {/* <Col xl={4} md={4} sm={4} xs={4}>
                                        <span style={{paddingLeft:'5px', paddingBottom:'5px'}}>Distribuidoras:</span><br/>
                                        <Select
                                            mode="multiple"
                                            style={{ width: '100%' }}
                                            placeholder="select one country"
                                            defaultValue={['china']}
                                            onChange={handleChange}
                                            optionLabelProp="label"
                                        >
                                            <Select.Option value="china" label="China">
                                                <div className="demo-option-label-item">
                                                    <span role="img" aria-label="China">
                                                    🇨🇳
                                                    </span>
                                                    China (中国)
                                                </div>
                                            </Select.Option>
                                            <Select.Option value="1" label="Otros">
                                                Otros
                                            </Select.Option>

                                        </Select>
                                    </Col> */}
                                    <Col xl={4} md={4} sm={4} xs={4}>
                                        <Checkbox value={filCategoria} checked={filCategoria} onChange={(e) => {dispatch(FiltrarPorReducer(false, false, false, e.target.checked))}}></Checkbox>
                                        <span style={{paddingLeft:'5px', paddingBottom:'5px'}}>Categorias:</span><br/>
                                        <Form.Item
                                            name="categorias"
                                            style={{
                                                marginLeft: "0px",
                                                marginRight: "0px"
                                            }}
                                        >
                                            <Select
                                                disabled={filCategoria}
                                                mode="multiple"
                                                style={{ width: '100%' }}
                                                placeholder="selecciona categoria"
                                                onChange={cambioCategoria}
                                            >
                                                {
                                                    cats.map((cat) => {
                                                        return (
                                                            <Select.Option value={cat.catid}>
                                                                {cat.catnombre}
                                                            </Select.Option>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </Form.Item>
                                    </Col>

                                    <Col xl={2} md={2} sm={2} xs={2}>
                                        <br/>
                                        <button class="ant-btn">Go</button>
                                    </Col>
                                </Row>
                            
                            </Form>
                            
                            {
                                dataGraficoSeleccionado.dataProvider.length > 0
                                ?<AmCharts.React style={{width: "100%", height: "500px"}} options={dataGraficoSeleccionado}/>
                                :null
                            }
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ControlVentas
