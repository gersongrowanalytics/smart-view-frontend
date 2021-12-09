import React, { useEffect } from 'react'
import { Modal, Button, Row, Col } from 'antd';
import { FieldTimeOutlined, CloseOutlined, SyncOutlined, CheckCircleTwoTone } from '@ant-design/icons';
import {ObtenerCanlesPDFPromocionesReducer, ObtenerPdfPromocionesReducer} from '../../../appRedux/actions/Promociones'
import {useDispatch, useSelector} from "react-redux";
import config from '../../../config'

const ModalGenerarPdf = (props) => {
    
    const dispatch = useDispatch();

    useEffect(  () => {
        if(props.noobtenerpdfcategorias == true){

        }else{
            dispatch(ObtenerCanlesPDFPromocionesReducer(0))
        }

    },[])

    return (
        <>
            <Modal 
                title={null} 
                visible={props.mostrarModal} 
                onOk={() => {console.log("ok")}}
                footer={null}
                className="modalDescargarPromociones"
                closeIcon = {
                    <Button
                        style={{background:'#558CFF', border:'none', marginTop:'10px', marginRight:'5px'}}
                        shape="circle" 
                        icon={<CloseOutlined style={{"color" : 'white'}} />} 
                        onClick={() => {props.setMostrarModal(!props.mostrarModal)}}
                    >
                    </Button>
                }
                centered
            >
                <div style={{textAlign: "-webkit-center"}} className="Txt-Titulo-Generador-Pdf-Promociones" >
                    Generador de PDF
                </div>

                <Row>
                    {
                        props.categorias.map((categoria) => {
                            return(
                                <Col xl={24} style={{marginTop:'10px'}} >
                                    <div
                                        style={{display:'flex', alignItems: "center"}}
                                    >
                                        <Col xl={8} style={{textAlign: "-webkit-right"}}>
                                            <div>
                                                <div className="Contenedor-CatIcono-Generar-Pdf-Promociones">
                                                    <img src={
                                                        categoria.canales
                                                        ?categoria.caticonoseleccionado
                                                        :categoria.caticono
                                                    } style={{width:'60px'}} />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={8} style={{textAlign: "-webkit-center"}}>
                                            {categoria.catnombre}
                                        </Col>
                                        <Col xl={8}>
                                            {
                                                categoria.canales
                                                ?<CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize:'20px'}} />
                                                :<SyncOutlined spin style={{fontSize:'20px'}}  />
                                            }
                                            
                                            {/* <FieldTimeOutlined style={{fontSize:'20px'}} /> */}
                                        </Col>
                                    </div>
                                </Col>
                            )
                        })
                    }

                    <Col 
                        xl={24}
                        style={{
                            textAlignLast: "center",
                            marginTop: "20px"
                        }}
                    >
                        <Button 
                            loading={props.cargandoBtnUno}
                            key="submit" type="primary" style={{marginRight:'10px'}}>
                            {/* Ver PDF */}
                            {/* <a href="https://pre-back.leadsmartview.com/Pdf-123afas123.pdf" target="_blank"> */}
                            <a href={config.api+"/Sistema/Pdf/"+localStorage.getItem('usutoken')+'.pdf'} target="_blank">
                                Ver PDF
                            </a>
                        </Button>
                        <button onClick={() => dispatch(ObtenerPdfPromocionesReducer())}>
                            click
                        </button>
                    </Col>

                </Row>
            </Modal>
        </>
    )
}

export default ModalGenerarPdf
