import React, {useEffect} from 'react'
import {Form, Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import { 
    ObtenerTdisReducer, 
    SeleccionarTdiReducer 
} from "appRedux/actions/Mostrar/Tdis"

const FormTdi = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ObtenerTdisReducer())
        dispatch(SeleccionarTdiReducer(0, null))
    }, [])

    const {tdis} = useSelector(({mostrarTdis}) => mostrarTdis);

    const seleccionarTdi = async (e) =>  {
        dispatch(SeleccionarTdiReducer(e, ""))
    }

    return (
        <Form.Item 
            label="Tipo Documento" required>
            <Form.Item
                name={"tdiid"}
                noStyle
                rules={[{ 
                    required: true, 
                    message: 'El Tipo de Documento es requerido' 
                }]}
            >
                <Select
                    onChange = {(e) => seleccionarTdi(e)} 
                    placeholder="Selecciona un Tipo">
                {
                    tdis.map((tdi) => {
                        return ( 
                            <Select.Option 
                                key = {tdi.tdiid}
                                value={tdi.tdiid}>{tdi.tdiabreviacion}
                            </Select.Option>
                        )
                    })
                }
                </Select>
            </Form.Item>
        </Form.Item>
    )
}

export default FormTdi
