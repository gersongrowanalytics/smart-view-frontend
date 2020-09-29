import React from 'react'
import {Card, Table, Row, Col, Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
  ObtenerTiposUsuariosReducer
} from "appRedux/actions/Configuracion/TiposUsuarios";

const TablaTiposUsuarios = () => {

  const dispatch = useDispatch();
  const {
    obtuvoTiposUsuarios, 
    dataTiposUsuarios, 
    columnasTablaTiposUsuarios, 
    cargandoTablaTiposUsuarios
  }  = useSelector(({configuracionTiposUsuarios}) => configuracionTiposUsuarios);
  
  if(obtuvoTiposUsuarios == false){
    dispatch(ObtenerTiposUsuariosReducer())
  }

  return (
      <Card title="Lista de Tipos Usuarios">
          <Row>
              <Button
                // onClick = {() => dispatch(ModalNuevoRebateReducer(true))}
              >
                Nuevo Tipo de Usuario
              </Button>

              <Col xl={24} md={24} sm={24} xs={24}>
                  <Table 
                    loading    = {cargandoTablaTiposUsuarios}
                    className  = "gx-table-responsive" 
                    columns    = {columnasTablaTiposUsuarios} 
                    dataSource = {dataTiposUsuarios} 
                    pagination = {{pageSize: 10}}
                  />
              </Col>
          </Row>
      </Card>
  )
}

export default TablaTiposUsuarios
