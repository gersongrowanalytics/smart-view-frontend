import React,{useState} from 'react'
import {Form, InputNumber, Button, Modal, Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {ModalNuevoRebateReducer, agregarNuevoRebateReducer} from "appRedux/actions/Configuracion/Rebate";
// IMPORTAR DATE PICKER
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import DatePicker from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es);


const ModalNuevoRebate = (props) => {
    const [form] = Form.useForm();
    const {modalNuevoRebate, cargandoNuevoRebate} = useSelector(({configuracionRebate}) => configuracionRebate);
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState();

    const enviarFormulario = values => {
        form.resetFields();
        setStartDate('')
        dispatch(agregarNuevoRebateReducer(values.fecha, values.tipoPromocion, values.porcentajeDesde, values.porcentajeHasta, values.porcentajeRebate))
    }

    const {listaGruposRebates} = props
    return (
        <Modal
            title       = "Nuevo Rebate"
            visible     = {modalNuevoRebate}
            onOk        = { () => dispatch(ModalNuevoRebateReducer(false))}
            onCancel    = { () => dispatch(ModalNuevoRebateReducer(false))}
            footer      = {null}
        >
            {/* <div> */}
                {/* <img alt="" src={require("assets/images/importante.png")} width="100%" height="100%"/> */}
            {/* </div> */}
            <div style={{paddingLeft:'20px', paddingRight:'20px'}}>
                <Form 
                    form={form}
                    onFinish={enviarFormulario}
                    name="formNuevoRebate"   
                > 
                    <Form.Item label="Fecha del Rebate" name="fecha">
                        {/* <DatePicker className='gx-mb-3 gx-w-100' /> */}
                        <DatePicker
                            locale="es"
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat="yyyy/MM"
                            showMonthYearPicker
                            
                        />
                    </Form.Item>
                    <Form.Item label="Grupo Rebate" name="grupoRebate">
                        <Select
                            className="gx-mb-3 gx-w-100" 
                        >
                            {
                                listaGruposRebates.map((grupoRebate) => {
                                    return ( 
                                        <Select.Option value="1">{grupoRebate.trenombre}</Select.Option>
                                    )
                                })
                            }
                            
                        </Select>
                    </Form.Item>
                    <Form.Item label="Tipo de Promoción" name="tipoPromocion">
                        <Select
                            className="gx-mb-3 gx-w-100" 
                        >
                            <Select.Option value="1">Sell In</Select.Option>
                            <Select.Option value="2">Sell Out</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Porcentaje Desde" name="porcentajeDesde">  
                        <InputNumber 
                            className="gx-mb-3 gx-w-100" 
                            rules={[{ required: true, message: 'Es necesario un porcentaje desde' }]}
                            defaultValue={0}
                            min={0}
                            max={100}
                            formatter={value => `${value}%`}
                            parser={value => value.replace('%', '')}
                        />
                    </Form.Item>
                    <Form.Item label="Porcentaje Hasta" name="porcentajeHasta">
                        <InputNumber className="gx-mb-3 gx-w-100" 
                            rules={[{ required: true, message: 'Es necesario un porcentaje hasta' }]}
                            defaultValue={0}
                            min={0}
                            max={100}
                            formatter={value => `${value}%`}
                            parser={value => value.replace('%', '')}
                        />
                    </Form.Item>
                    <Form.Item label="Porcentaje Rebate" name="porcentajeRebate">
                        <InputNumber className="gx-mb-3 gx-w-100" 
                            rules={[{ required: true, message: 'Es necesario un porcentaje rebate' }]}
                            defaultValue={0}
                            min={0}
                            max={100}
                            formatter={value => `${value}%`}
                            parser={value => value.replace('%', '')}
                            value = {"10"}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button className="gx-mb-0"
                            type="primary"
                            htmlType="submit"
                            loading={cargandoNuevoRebate}
                        >
                            {
                                cargandoNuevoRebate == true
                                ?"Enviando"
                                :"Enviar"
                            }
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    )
}

export default ModalNuevoRebate
