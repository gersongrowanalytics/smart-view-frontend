import React, {useState} from 'react'
import { Modal, Button, Row, Col, Radio, Select, Space } from 'antd';
import { FieldTimeOutlined, CloseOutlined, SyncOutlined, CheckCircleTwoTone } from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {obtenerPromocionesXGrupoReducer} from '../../../appRedux/actions/Promociones'
// IMPORTAR DATE PICKER
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import DatePicker from "react-datepicker";
import es from 'date-fns/locale/es';
import ModalGenerarPdf from './ModalGenerarPdf';
registerLocale('es', es);

const ModalEditarPdf = (props) => {

    const dispatch = useDispatch();
    const {
        cargando_generar_pdf_promociones
    } = useSelector(({promociones}) => promociones);


    const [mostrarModalGenerarPdf, setMostrarModalGenerarPdf] = useState(false)
    const [grupoSeleccionado, setGrupoSeleccionado] = useState(0)
    const [categoriasPromociones, setCategoriasPromociones] = useState([])

    async function generarPdf () {
        var nuevadata = await dispatch(obtenerPromocionesXGrupoReducer(grupoSeleccionado))
        setCategoriasPromociones(nuevadata)
        console.log(nuevadata)
        console.log('termino')
        setMostrarModalGenerarPdf(true)
    }


    return (
        <>

            <Modal
                title={null}
                footer={null}
                centered
                visible={props.mostrarModal}
                closeIcon = {
                    <Button
                        style={{background:'#558CFF', border:'none', marginTop:'10px', marginRight:'5px'}}
                        shape="circle" 
                        icon={<CloseOutlined style={{"color" : 'white'}} />} 
                        onClick={() => {props.setMostrarModal(!props.mostrarModal)}}
                    >
                    </Button>
                }
                className="modalDescargarPromociones"
                width={
                    "400px"
                    // props.zonas.length == 1 ? "400px" : props.zonas.length == 2 ? "800px" : props.zonas.length == 3 ? "1000px" : props.zonas.length == 4 ? "800px" : props.zonas.length == 5 ? "1000px" : props.zonas.length == 6 ? "1000px" : "1000px"
                }
            >
                <Row>
                    <Col xl={24} sm={24} md={24} xs={24} id="Titulo-ModalDescargas">
                        DESCARGAR CATÁLOGO
                    </Col>
                    <Col xl={24}>
                        <Row style={{marginLeft: "50px", marginBottom:'30px'}}>
                            {/* <Col xl={8} sm={8} md={8} xs={8}>
                                <Select 
                                    defaultValue={0} style={{ width: "240px" }} 
                                    onChange={(e) => {}}
                                >
                                    <Select.Option value={0}>{"Ninguno"}</Select.Option>
                                    {
                                        props.gsus.map((gsu) => {
                                            return (
                                                <Select.Option value={gsu.gsuid}>{gsu.gsunombre}</Select.Option>
                                            )
                                        })
                                    }
                                </Select>
                            </Col> */}
                            <Col xl={24}>
                                <Radio.Group onChange={(e) => {setGrupoSeleccionado(e.target.value)}} value={grupoSeleccionado}>
                                    <Space direction="vertical">
                                        {
                                            props.gsus.map((gsu) => {
                                                return (
                                                    // <Select.Option value={gsu.gsuid}>{gsu.gsunombre}</Select.Option>
                                                    <Radio value={gsu.gsuid}>{gsu.gsunombre}</Radio>
                                                )
                                            })
                                        }
                                    </Space>
                                </Radio.Group>
                            </Col>
                            <Col 
                                xl={24}
                                style={{
                                    marginLeft: "75px",
                                    marginTop: "25px",
                                    marginBottom: "-40px"
                                }}
                            >
                                <Button
                                    // loading={props.cargandoBtnUno}
                                    key="submit" type="primary" 
                                    onClick={() => generarPdf()}
                                >
                                    Generar PDF
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Modal>
            

            {
                mostrarModalGenerarPdf == true
                ?<ModalGenerarPdf
                    mostrarModal    = {mostrarModalGenerarPdf}
                    setMostrarModal = {(estado) => setMostrarModalGenerarPdf(estado)}
                    categorias = {categoriasPromociones}
                    cargandoBtnUno = {cargando_generar_pdf_promociones}
                    noobtenerpdfcategorias = {true}
                />
                :null
            }

        </>
    )
}

export default ModalEditarPdf
