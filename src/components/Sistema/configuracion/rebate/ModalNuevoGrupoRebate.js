import React from 'react'
import {Form, Input, Button, Modal, Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {ModalNuevoGrupoRebateReducer, agregarNuevoGrupoRebateReducer} from "appRedux/actions/Configuracion/Rebate";


const ModalNuevoGrupoRebate = () => {
    const [form] = Form.useForm();
    const { modalNuevoGrupoRebate, cargandoNuevoGrupoRebate } = useSelector(({configuracionRebate}) => configuracionRebate);
    const dispatch = useDispatch();

    const enviarFormulario = async values => {
        await dispatch(agregarNuevoGrupoRebateReducer(values.nombreGrupoRebate))
        await form.resetFields();
    }

    return (
        <Modal
            title       = "Nuevo Grupo Rebate"
            visible     = {modalNuevoGrupoRebate}
            onOk        = { () => dispatch(ModalNuevoGrupoRebateReducer(false))}
            onCancel    = { () => dispatch(ModalNuevoGrupoRebateReducer(false))}
            footer      = {null}
        >
            <div style={{paddingLeft:'20px', paddingRight:'20px'}}>
                <Form 
                    form    = {form}
                    onFinish= {enviarFormulario}
                    name    = "formNuevoRebate"   
                > 
                    <Form.Item label="Nombre del Grupo Rebate" name="nombreGrupoRebate">  
                        <Input 
                            className="gx-mb-3 gx-w-100" 
                            rules={[{ required: true, message: 'Es necesario un porcentaje desde' }]}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button className="gx-mb-0"
                            type="primary"
                            htmlType="submit"
                            loading={cargandoNuevoGrupoRebate}
                        >
                            {
                                true == true
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

export default ModalNuevoGrupoRebate