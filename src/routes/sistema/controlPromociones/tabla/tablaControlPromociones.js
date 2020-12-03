import React, {useEffect} from 'react'
import {Card, Table, Row, Col, Button} from "antd";
import {ArmarColumnasTablaPromocionesReducer} from "appRedux/actions/controlPromociones/controlPromociones";
import {useDispatch, useSelector} from "react-redux";

const TablaControlPromociones = () => {

    const {
        listaControlPromociones,
        columnasTablaControlPromociones,
        cargandoTablaControlPromociones
    } = useSelector(({controlPromociones}) => controlPromociones);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(ArmarColumnasTablaPromocionesReducer())
    }, [])

    return (
        <Card title="Lista de Promociones">
          <Row>
              <Col xl={24} md={24} sm={24} xs={24}>
                  <Table 
                    loading    = {cargandoTablaControlPromociones}
                    className  = "gx-table-responsive" 
                    columns    = {columnasTablaControlPromociones} 
                    dataSource = {listaControlPromociones} 
                    // pagination = {{pageSize: 10}}
                  />
              </Col>
          </Row>
      </Card>
    )
}

export default TablaControlPromociones
