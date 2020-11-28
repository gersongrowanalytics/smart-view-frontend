import React, {useEffect} from 'react'
import AmCharts from "@amcharts/amcharts3-react";
import {Col, Row, Card, Button, Modal, message, Spin } from "antd";
import {useDispatch, useSelector} from "react-redux";
import {ObtenerEstadisticaXZona} from "appRedux/actions/controlVentas/controlVentas";
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos";
import {seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'

const ControlVentas = () => {

    const dispatch = useDispatch();
    const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
    const {vistaPromocionSeleccionado} = useSelector(({promociones}) => promociones);
    const {vistaVentasSeleccionado}= useSelector(({ventasTpr}) => ventasTpr);
    const {controlventas_estadistica_xzona}= useSelector(({controlVentas}) => controlVentas);

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

      dispatch(ObtenerEstadisticaXZona(false))

    }, [])

    return (
        <Card>
            <Button onClick={() => dispatch(ObtenerEstadisticaXZona())}>click </Button>
            
            <AmCharts.React style={{width: "100%", height: "500px"}} options={controlventas_estadistica_xzona}/>
        </Card>
    )
}

export default ControlVentas
