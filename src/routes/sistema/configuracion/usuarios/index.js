import React from 'react'
import Auxiliary from "util/Auxiliary";
import {Col, Row, Card, Table, message} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {obtenerUsuariosReducer} from "appRedux/actions/Configuracion/Usuarios";
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos";
import {seleccionarTutorialReducer} from "appRedux/actions/Tutorial";
import {seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'

const Usuarios = () => {

    const {obtuvoUsuarios, listaUsuario, columnasTabla} = useSelector(({configuracionUsuario}) => configuracionUsuario);
    const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
    const {tutorialSeleccionado} = useSelector(({tutorial}) => tutorial);
    const {vistaPromocionSeleccionado} = useSelector(({promociones}) => promociones);
    const {vistaVentasSeleccionado}= useSelector(({ventasTpr}) => ventasTpr);

    const dispatch = useDispatch();
    if(obtuvoUsuarios == false){
        dispatch(obtenerUsuariosReducer())
    }

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

    return (
        <Auxiliary>
            <Row>
                <Col>
                    <Card title="Lista de Usuarios">
                        <Table 
                            loading={!obtuvoUsuarios}
                            className="gx-table-responsive" 
                            columns={columnasTabla} 
                            dataSource={listaUsuario} 
                            pagination={{pageSize: 10}}
                            scroll={{y: 240}}
                        />
                    </Card>
                </Col>
            </Row>
        </Auxiliary>
    )
}

export default Usuarios
