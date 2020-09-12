import React from 'react'
import Auxiliary from "util/Auxiliary";
import {Col, Row, Card, Table, Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {ModalNuevoRebateReducer, obtenerRebateReducer} from "appRedux/actions/Configuracion/Rebate";
import ModalNuevoRebate from "components/Sistema/configuracion/rebate/modalNuevoRebate"
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos"
import {seleccionarTutorialReducer} from "appRedux/actions/Tutorial"
import {seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'

const Rebate = () => {
    const columns = [
        {
            title: 'Año',
            dataIndex: 'fecano',
            key: 'fecano',
            width: 150
        },
        {
            title: 'Fecha',
            dataIndex: 'fecmes',
            key: 'fecmes',
            width: 150,
        }, 
        {
            title: 'Tipo de Promoción',
            dataIndex: 'tprnombre',
            key: 'tprnombre',
            width: 150,
        }, 
        {
            title: 'Desde',
            dataIndex: 'rtpporcentajedesde',
            key: 'rtpporcentajedesde',
        }, 
        {
            title: 'Hasta',
            dataIndex: 'rtpporcentajehasta',
            key: 'rtpporcentajehasta',
            width: 150,
            
        },
        {
            title: 'Rebate',
            dataIndex: 'rtpporcentajerebate',
            key: 'rtpporcentajerebate',
            width: 150,  
        }
    ];

    const dispatch = useDispatch();
    const {obtuvoRebate, listaRebates}  = useSelector(({configuracionRebate}) => configuracionRebate);
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

    return (
        <Auxiliary>
             <ModalNuevoRebate />
            <Row>
                <Col>
                    <Card title="Lista de Rebate">
                        <Button
                            onClick = {() => dispatch(ModalNuevoRebateReducer(true))}
                        >
                            Nuevo Rebate
                        </Button>
                        <Table 
                            // loading={!obtuvoUsuarios}
                            className="gx-table-responsive" 
                            columns={columns} 
                            dataSource={listaRebates} 
                            pagination={{pageSize: 10}}
                            scroll={{y: 340}}
                        />
                    </Card>
                </Col>
            </Row>
        </Auxiliary>
    )
}

export default Rebate
