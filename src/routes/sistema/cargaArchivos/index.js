import React from "react";
import {Row, Col} from "antd";
import {useDispatch, useSelector} from "react-redux";
import CardCargarArchivo from './cardCargarArchivo'
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos";

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
  const dispatch = useDispatch();
  if(cargaArchivosSeleccionado == false){
    dispatch(seleccionarCargaArchivosReducer(true))
  }

  return (
    <Row style={{marginTop:'100px'}}>
      <Col xl={3} md={3} />
      <Col xl={6} md={6}>
      <CardCargarArchivo
        titulo = {'Añadir Sell In'}
      />
      </Col>
      <Col xl={6} md={6}>
        <CardCargarArchivo
          titulo = {'Añadir Sell Out'}
        />
      </Col>
      <Col xl={6} md={6}>
        <CardCargarArchivo
          titulo = {'Añadir Promoción'}
        />
      </Col>
      <Col xl={3} md={3} />
    </Row>
  );
};

export default CargaArchivosPromociones;
