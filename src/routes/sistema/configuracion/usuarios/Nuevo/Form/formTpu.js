import React, {useEffect} from 'react'
import {Form, Select} from "antd"
import {useDispatch, useSelector} from "react-redux"
import { 
    ObtenerTpusReducer, 
    SeleccionarTpuReducer 
} from "appRedux/actions/Mostrar/Tpus"

const FormTpu = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ObtenerTpusReducer())
        dispatch(SeleccionarTpuReducer(0, null))
    }, [])

    const {tpus} = useSelector(({mostrarTpus}) => mostrarTpus);

    const seleccionarTpu = async (e) =>  {
        dispatch(SeleccionarTpuReducer(e, ""))
    }

    return (
        <Form.Item label="Tipo de Usuario" required>
            <Form.Item
                name={"tpuid"}
                noStyle
                rules={[{ 
                    required: true, 
                    message: 'El tipo de usuario es requerido' 
                }]}
            >
                <Select 
                    onChange = {(e) => seleccionarTpu(e)} 
                    placeholder="Selecciona un Tipo de Usuario">
                {
                    tpus.map((tpu) => {
                        return ( 
                            <Select.Option 
                                key = {tpu.tpuid}
                                value={tpu.tpuid}>{tpu.tpunombre}
                            </Select.Option>
                        )
                    })
                }
                </Select>
            </Form.Item>
        </Form.Item>
    )
}

export default FormTpu
