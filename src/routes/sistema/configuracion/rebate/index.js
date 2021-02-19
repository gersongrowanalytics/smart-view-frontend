import React, {useEffect, useState} from 'react'
import Auxiliary from "util/Auxiliary";
import {Col, Row, Card, Table, Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {ModalNuevoRebateReducer, obtenerRebateReducer, obtenerGrupoRebateReducer, ModalNuevoGrupoRebateReducer} from "appRedux/actions/Configuracion/Rebate";
import ModalNuevoRebate from "components/Sistema/configuracion/rebate/modalNuevoRebate"
import ModalNuevoGrupoRebate from "components/Sistema/configuracion/rebate/ModalNuevoGrupoRebate"
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos"
import {seleccionarTutorialReducer} from "appRedux/actions/Tutorial"
import {seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'
// IMPORTAR DATE PICKER
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import DatePicker from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es);

const Rebate = () => {

    const dispatch = useDispatch();
    const {obtuvoRebate, obtuvoGrupoRebate, listaRebates, listaGruposRebates, columnasTablaRebate, cargandoTablaRebate}  = useSelector(({configuracionRebate}) => configuracionRebate);
    const {cargaArchivosSeleccionado}   = useSelector(({cargaArchivos}) => cargaArchivos);
    const {tutorialSeleccionado}        = useSelector(({tutorial}) => tutorial);
    const {vistaPromocionSeleccionado}  = useSelector(({promociones}) => promociones);
    const {vistaVentasSeleccionado}     = useSelector(({ventasTpr}) => ventasTpr);

    // if(obtuvoRebate == false){
    //     dispatch(obtenerRebateReducer())
    // }

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

        if(tutorialSeleccionado == true){
            dispatch(seleccionarTutorialReducer(false))
        }

        // if(obtuvoGrupoRebate == false){
        //     dispatch(obtenerGrupoRebateReducer())
        // }

        dispatch(obtenerGrupoRebateReducer())

    }, [])

    const [startDate, setStartDate] = useState();

    function obtenerRebates(date) {
        setStartDate(date)
        dispatch(obtenerRebateReducer(date))
    }

    return (
        <Auxiliary>
             <ModalNuevoRebate 
                listaGruposRebates = {listaGruposRebates}
             />
             <ModalNuevoGrupoRebate />
            <Row>
                <Col xl={24} md={24} sm={24}>
                    <Card title="Lista de Rebate">
                        <Row>
                            <Col xl={3} md={3} sm={3} xm={3}>
                            <br/>
                                <Button
                                    onClick = {() => dispatch(ModalNuevoRebateReducer(true))}
                                >
                                    Nuevo Rebate
                                </Button>
                            </Col>
                            <Col xl={3} md={3} sm={3} xm={3}>
                                <br/>
                                <Button
                                    onClick = {() => dispatch(ModalNuevoGrupoRebateReducer(true))}
                                >
                                    Nuevo Grupo Rebate
                                </Button>
                            </Col>
                            {/* <Col xl={16} md={16} sm={16} xm={16}>
                            </Col> */}
                            <Col xl={16} md={16} sm={16} xm={16} >
                                Fecha:<br/>
                                <div style={{paddingBottom:'4px'}}/>
                                <DatePicker
                                    locale="es"
                                    selected={startDate}
                                    onChange={date => obtenerRebates(date)}
                                    dateFormat="yyyy/MM"
                                    showMonthYearPicker
                                    autoComplete={"off"}
                                    
                                />
                            </Col>
                            <Col xl={24} md={24} sm={24} xm={24}>
                                <Table 
                                    loading     = {cargandoTablaRebate}
                                    className   = "gx-table-responsive" 
                                    columns     = {columnasTablaRebate} 
                                    dataSource  = {listaRebates} 
                                    pagination  = {{pageSize: 50}}
                                />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Auxiliary>
    )
}

export default Rebate
