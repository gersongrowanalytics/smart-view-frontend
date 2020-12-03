import React, {useEffect, useState} from 'react'
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos";
import {seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'
import {useDispatch, useSelector} from "react-redux";
import {Col, Row, Card } from "antd";
import TablaControlPromociones from './tabla/tablaControlPromociones'
import {ObtenerListaPromociones} from "appRedux/actions/controlPromociones/controlPromociones";
// IMPORTAR DATE PICKER
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import DatePicker from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es);

const ControlPromociones = () => {
    const dispatch = useDispatch();
    const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
    const {vistaPromocionSeleccionado} = useSelector(({promociones}) => promociones);
    const {vistaVentasSeleccionado}= useSelector(({ventasTpr}) => ventasTpr);

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

    }, [])

    const [startDate, setStartDate] = useState();

    function otros(date){
        dispatch(ObtenerListaPromociones(date, null, null, null, null))
        setStartDate(date)
    }

    return (
        <Row>
            <Col xl={24} md={24} sm={24} xs={24}>
                <Card>
                    <DatePicker
                        locale="es"
                        selected={startDate}
                        onChange={date => otros(date)}
                        dateFormat="yyyy/MM"
                        showMonthYearPicker
                        autoComplete={"off"}
                        
                    />


                </Card>

                <TablaControlPromociones />

            </Col>
        </Row>
    )
}

export default ControlPromociones
