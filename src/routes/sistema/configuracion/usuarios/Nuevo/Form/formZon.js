import React, {useEffect} from 'react'
import {Form, Select} from "antd"
import {useDispatch, useSelector} from "react-redux"
import { 
    ObtenerZonsReducer, 
    SeleccionarZonReducer 
} from "appRedux/actions/Mostrar/Zons"

const FormZon = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ObtenerZonsReducer())
        dispatch(SeleccionarZonReducer  (0, null))
    }, [])

    const {zons} = useSelector(({mostrarZons}) => mostrarZons);

    const seleccionarZon = async (e) =>  {
        dispatch(SeleccionarZonReducer(e, ""))
    }

    return (
        <Form.Item label="Zona" required>
            <Form.Item
                name={"zonid"}
                noStyle
                rules={[{ 
                    required: true, 
                    message: 'La zona es requerida' 
                }]}
            >
                <Select 
                    onChange = {(e) => seleccionarZon(e)} 
                    placeholder="Selecciona una Zona">
                {
                    zons.map((zon) => {
                        return ( 
                            <Select.Option 
                                key = {zon.zonid}
                                value={zon.zonid}>{zon.zonnombre}
                            </Select.Option>
                        )
                    })
                }
                </Select>
            </Form.Item>
        </Form.Item>
    )
}

export default FormZon
