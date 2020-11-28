import React, {useEffect} from 'react'
import {Card, Table, Row, Col, Button} from "antd";
import {armarColumnasTablaArchivosSubidosReducer, ObtenerArchivosSubidos} from "appRedux/actions/controlCargaArchivos/controlCargaArchivos";
import {useDispatch, useSelector} from "react-redux";

const TablaControlCargaArchivos = () => {

    const {
        listaControlArchivos,
        columnasTablaControlArchivo,
        cargandoTablaControlArchivos
    } = useSelector(({controlCargaArchivos}) => controlCargaArchivos);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(armarColumnasTablaArchivosSubidosReducer())
        dispatch(ObtenerArchivosSubidos(null, null))
    }, [])

    return (
        <Card title="Lista de Archivos Subidos">
          <Row>
              <Col xl={24} md={24} sm={24} xs={24}>
                  <Table 
                    loading    = {cargandoTablaControlArchivos}
                    className  = "gx-table-responsive" 
                    columns    = {columnasTablaControlArchivo} 
                    dataSource = {listaControlArchivos} 
                    pagination = {{pageSize: 10}}
                  />
              </Col>
          </Row>
      </Card>
    )
}

export default TablaControlCargaArchivos
