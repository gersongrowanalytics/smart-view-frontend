import React from 'react'
import {Col, Row} from "antd";
import Auxiliary from "util/Auxiliary";
import {useDispatch, useSelector} from "react-redux";
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos";
import {seleccionarTutorialReducer, seleccionarVideoTutorialReducer} from "appRedux/actions/Tutorial";
import {seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'
import './tutorial.css'

const Tutorial = () => {

    const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
    const {tutorialSeleccionado} = useSelector(({tutorial}) => tutorial);
    const {vistaPromocionSeleccionado} = useSelector(({promociones}) => promociones);
    const {vistaVentasSeleccionado}= useSelector(({ventasTpr}) => ventasTpr);

    const dispatch = useDispatch();
    if(cargaArchivosSeleccionado == true){
        dispatch(seleccionarCargaArchivosReducer(false))
    }
    
    if(tutorialSeleccionado == false){
        dispatch(seleccionarTutorialReducer(true))
    }

    if(vistaPromocionSeleccionado == true){
        dispatch(seleccionarVistaPromocionReducer(false))
    }

    if(vistaVentasSeleccionado == true){
        dispatch(seleccionarVistaVentasReducer(false))
    }

    return (
    //     <iframe style={{ marginLeft:'-40px', marginTop:'-40px'}} width="106%" height="110%" src="http://www.youtube.com/embed/XGSy3_Czz8k?autoplay=1">
    //     </iframe>
    // )
        <Auxiliary>
            <Row style={{  height:'100%' }}>
                <Col xl={24} md={24} style={{marginTop:'100px', }}>
                    <img src={require('assets/images/logoLeadSmartView.png')} width="213px" height="90px" alt=''/>
                </Col>
                <Col xl={10} md={10} >
                    <span style={{ color:'#4D4D4D'}} id="txtTutorial">
                        Presenta la nueva plataforma inteligente “Creciendo Juntos” que te permitirá tener un mayor control de tus ventas.<br/><br/>
                        El siguiente video, te brindará un mayor detalle de la funcionalidad de la plataforma.
                    </span>
                </Col>
                <Col xl={14} md={14} />
                <Col xl={10} md={10} >
                    <span 
                        id="playVideo"
                        style={{cursor:'pointer'}}
                        onClick={() => dispatch(seleccionarVideoTutorialReducer(true))}
                    >
                            PLAY VIDEO <img src={require('assets/images/play.png')} alt='' width='108px' style={{marginLeft:'-20px'}} /></span>
                </Col>
            </Row>
        </Auxiliary>
    )
}

export default Tutorial
