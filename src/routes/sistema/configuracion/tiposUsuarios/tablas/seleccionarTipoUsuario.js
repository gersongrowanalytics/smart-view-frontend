import React from 'react'
import {Form, Select} from "antd";

const SeleccionarTipoUsuario = () => {
    return (
        <Form 
            layout = {"vertical"}
            // form={form}
            // onFinish={enviarFormulario}
            name="formNuevoRebate"   
        > 
            <Form.Item label="Tipo de Usuario" name="tipoUsuario">
                <Select
                    className="gx-mb-3 " 
                >
                    <Select.Option value="1">Sell In</Select.Option>
                    <Select.Option value="2">Sell Out</Select.Option>
                </Select>
            </Form.Item>
        </Form>
    )
}

export default SeleccionarTipoUsuario
