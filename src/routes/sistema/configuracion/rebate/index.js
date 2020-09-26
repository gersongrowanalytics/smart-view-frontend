import React from 'react'
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

const Rebate = () => {

    const dispatch = useDispatch();
    const {obtuvoRebate, obtuvoGrupoRebate, listaRebates, listaGruposRebates, columnasTablaRebate, cargandoTablaRebate}  = useSelector(({configuracionRebate}) => configuracionRebate);
    const {cargaArchivosSeleccionado}   = useSelector(({cargaArchivos}) => cargaArchivos);
    const {tutorialSeleccionado}        = useSelector(({tutorial}) => tutorial);
    const {vistaPromocionSeleccionado}  = useSelector(({promociones}) => promociones);
    const {vistaVentasSeleccionado}     = useSelector(({ventasTpr}) => ventasTpr);

    if(cargaArchivosSeleccionado == true){
        dispatch(seleccionarCargaArchivosReducer(false))
    }

    if(tutorialSeleccionado == true){
        dispatch(seleccionarTutorialReducer(false))
    }

    if(vistaPromocionSeleccionado == true){
        dispatch(seleccionarVistaPromocionReducer(false))
    }

    if(vistaVentasSeleccionado == true){
        dispatch(seleccionarVistaVentasReducer(false))
    }

    if(obtuvoRebate == false){
        dispatch(obtenerRebateReducer())
    }

    if(obtuvoGrupoRebate == false){
        dispatch(obtenerGrupoRebateReducer())
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
                        <Button
                            onClick = {() => dispatch(ModalNuevoRebateReducer(true))}
                        >
                            Nuevo Rebate
                        </Button>
                        <Button
                            onClick = {() => dispatch(ModalNuevoGrupoRebateReducer(true))}
                        >
                            Nuevo Grupo Rebate
                        </Button>
                        <Table 
                            loading     = {cargandoTablaRebate}
                            className   = "gx-table-responsive" 
                            columns     = {columnasTablaRebate} 
                            dataSource  = {listaRebates} 
                            pagination  = {{pageSize: 10}}
                        />
                    </Card>
                </Col>
            </Row>
        </Auxiliary>
    )
}

export default Rebate
