import React, {useEffect, useState} from 'react'
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos";
import {seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'
import {ObtenerCategorias} from 'appRedux/actions/Mostrar/Cats'
import {useDispatch, useSelector} from "react-redux";
import {Col, Row, Card, Button, Select, Input} from "antd";
import TablaControlPromociones from './tabla/tablaControlPromociones'
import {ObtenerListaPromociones} from "appRedux/actions/controlPromociones/controlPromociones";
import FiltroTablaControlPromociones from './filtroTabla/filtroTabla'


const ControlPromociones = () => {
    const dispatch = useDispatch();
    const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
    const {vistaPromocionSeleccionado} = useSelector(({promociones}) => promociones);
    const {vistaVentasSeleccionado}= useSelector(({ventasTpr}) => ventasTpr);
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

        dispatch(ObtenerCategorias())

    }, [])

    const [startDate, setStartDate] = useState();

    function obtenerListaPromos(date, sucnombre, catsid, codigoPromocion, canid) {
        setStartDate(date)
        dispatch(ObtenerListaPromociones(date, sucnombre, catsid, codigoPromocion, null))
        
    }

    return (
        <Row>
            <Col xl={24} md={24} sm={24} xs={24}>
                <Card>
                    
                    <FiltroTablaControlPromociones
                        cats = {cats}
                        startDate = {startDate}
                        obtenerListaPromos = {obtenerListaPromos}
                    />

                </Card>

                <TablaControlPromociones />

            </Col>
        </Row>
    )
}

export default ControlPromociones
