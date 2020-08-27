import React from 'react'
import {Col, Row} from "antd";
import Auxiliary from "util/Auxiliary";
import {useDispatch, useSelector} from "react-redux";
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos";
import {seleccionarTutorialReducer} from "appRedux/actions/Tutorial";

const Tutorial = () => {

    const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
    const {tutorialSeleccionado} = useSelector(({tutorial}) => tutorial);
    const dispatch = useDispatch();
    if(cargaArchivosSeleccionado == true){
        dispatch(seleccionarCargaArchivosReducer(false))
    }
    
    if(tutorialSeleccionado == false){
        dispatch(seleccionarTutorialReducer(true))
    }

    return (
        <Auxiliary>
            <Row style={{  height:'100%' }}>
                <Col xl={24} md={24} style={{marginTop:'100px', }}>
                    <img src={require('assets/images/logoLeadSmartView.png')} alt=''  style={{height:'100%',}} />
                </Col>
                <Col xl={10} md={10} style={{marginTop:'10px'}}>
                    <span style={{ color:'#4D4D4D'}}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                    </span>
                </Col>
                <Col xl={14} md={14} />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />asdas
            </Row>
        </Auxiliary>
    )
}

export default Tutorial
