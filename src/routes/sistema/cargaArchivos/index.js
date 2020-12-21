import React from "react";
import {Row, Col} from "antd";
import {useDispatch, useSelector} from "react-redux";
import CardCargarArchivo from './cardCargarArchivo'
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos";
import {seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'

const fileList = [
  // {
  //   uid: -1,
  //   name: 'xxx.png',
  //   status: 'done',
  //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  // }, {
  //   uid: -2,
  //   name: 'yyy.png',
  //   status: 'success',
  //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  // }
];

const props = {
  action: 'http://gro.gavsistemas.com/cargarArchivo/promociones',
  listType: 'picture',
  defaultFileList: [...fileList],
};

const CargaArchivosPromociones = () => {
  
  const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
  const {vistaPromocionSeleccionado} = useSelector(({promociones}) => promociones);
  const {vistaVentasSeleccionado}= useSelector(({ventasTpr}) => ventasTpr);
  const dispatch = useDispatch();
  if(cargaArchivosSeleccionado == false){
    dispatch(seleccionarCargaArchivosReducer(true))
  }

  if(vistaPromocionSeleccionado == true){
    dispatch(seleccionarVistaPromocionReducer(false))
  }

  if(vistaVentasSeleccionado == true){
    dispatch(seleccionarVistaVentasReducer(false))
  }

  return (
    <Row style={{marginTop:'0px'}}>
      <Col xl={3} md={3} />
      <Col xl={6} md={6}>
      <CardCargarArchivo
        titulo = {'Añadir Sell In'}
        url    = {'cargarArchivo/ventas/sellin'}
      />
      </Col>
      <Col xl={6} md={6}>
        <CardCargarArchivo
          titulo = {'Añadir Sell Out'}
          url    = {'cargarArchivo/ventas/sellout'}
        />
      </Col>
      <Col xl={6} md={6}>
        <CardCargarArchivo
          titulo = {'Añadir Mecánica Promocional (excel)'}
          url    = {'cargarArchivo/promociones'}
        />
      </Col>
      <Col xl={3} md={3} />

      <Col xl={3} md={3} />
      <Col xl={6} md={6}>
      <CardCargarArchivo
        titulo = {'Añadir Objetivos Sell In'}
        url    = {'cargarArchivo/ventas/obejtivos'}
      />
      </Col>
      <Col xl={6} md={6}>
      <CardCargarArchivo
        titulo = {'Añadir Objetivos Sell Out'}
        url    = {'cargarArchivo/ventas/obejtivossellout'}
      />
      </Col>
      <Col xl={6} md={6}>
      <CardCargarArchivo
        titulo = {'Añadir Plan de Trade (ppt)      '}
        url    = {'cargarArchivo/promociones/planTrade'}
      />
      </Col>
      <Col xl={3} md={3} />
      <Col xl={3} md={3} />
      <Col xl={6} md={6}>
      <CardCargarArchivo
        titulo = {'Añadir Clientes'}
        url    = {'cargarArchivo/clientes'}
      />
      </Col>
      <Col xl={6} md={6}>
      <CardCargarArchivo
        titulo = {'Añadir Productos'}
        url    = {'cargarArchivo/productos'}
      />
      </Col>
      <Col xl={6} md={6}>
      <CardCargarArchivo
        titulo = {'Actualizar Clientes'}
        url    = {'cargarArchivo/clientes/actualizargruporebate'}
      />
      </Col>
      <Col xl={3} md={3} />
      <Col xl={3} md={3} />
      <Col xl={6} md={6}>
      <CardCargarArchivo
        titulo = {'Desactivar Promociones'}
        url    = {'cargarArchivo/promociones/desactivar'}
      />
      </Col>
    </Row>
  );
};

export default CargaArchivosPromociones;
