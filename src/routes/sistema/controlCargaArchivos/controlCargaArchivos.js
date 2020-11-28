import React, {useEffect} from 'react'
import {Row, Col} from "antd";
import Auxiliary from "util/Auxiliary";
import {useDispatch, useSelector} from "react-redux";
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos";
import {seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'
import TablaControlCargaArchivos from './tabla/tablaControlCargaArchivos'

const ControlCargaArchivos = () => {
    
    const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
    const {vistaPromocionSeleccionado} = useSelector(({promociones}) => promociones);
    const {vistaVentasSeleccionado}= useSelector(({ventasTpr}) => ventasTpr);
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log('click use effect')
        if(cargaArchivosSeleccionado == true){
            dispatch(seleccionarCargaArchivosReducer(false))
        }
    
        if(vistaPromocionSeleccionado == true){
            dispatch(seleccionarVistaPromocionReducer(false))
        }
    
        if(vistaVentasSeleccionado == true){
            dispatch(seleccionarVistaVentasReducer(false))
        }
    }, [])

    return (
        <Auxiliary>
            <Row>
                <Col xl={24} md={24} sm={24} xs={24}>
                    <TablaControlCargaArchivos />
                </Col>
            </Row>
        </Auxiliary>
    )
}

export default ControlCargaArchivos
