import React, {useEffect} from 'react'
import {Col, Row, Card, Form, Input, Button, Select, Cascader, Checkbox } from "antd";
import {useDispatch, useSelector} from "react-redux";
import FormTpu from './Form/formTpu'
import FormZon from './Form/formZon'
import Profile from "components/wall/Profile/index";
import {crearUsuarioReducer, ObtenerSucursalesXZonaReducer, SeleccionaSucursalesReducer} from "appRedux/actions/Configuracion/Usuarios";
import { 
    ObtenerSucursales, 
} from "appRedux/actions/Mostrar/Sucs"

const Formprincipal = () => {

    const dispatch = useDispatch();
    const {cargandoCrearUsuario, sucursalesXZona} = useSelector(({configuracionUsuario}) => configuracionUsuario);
    const {sucsxzona} = useSelector(({mostrarSucs}) => mostrarSucs);

    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 24 },
        },
    }; 

    const onFinish = async values =>  {
        // console.log("finish",values)

        values['sucs'] = sucursalesXZona

        // console.log(values)
        dispatch(crearUsuarioReducer(values))
    };

    useEffect(() => {
        dispatch(ObtenerSucursales())
        dispatch(ObtenerSucursalesXZonaReducer())
    }, [])

    return (
        <Form
            {...formItemLayout}
            form={form}
            onFinish={onFinish}
            scrollToFirstError
        >
        <Row>
            
            <Col xl={12} md={12} sm={12} xs={12}>
                <Card>
                    
                        
                        {/* <FormTdi /> */}

                        {/* <Form.Item 
                            rules={[{ 
                                required: true, 
                                message: 'El Número de Documento es requerido' 
                            }]}
                            name={"pernum"}
                            label="N° Documento" required>
                            <Input type="number" placeholder="" />
                        </Form.Item> */}

                        <Form.Item 
                            name={"pernom"}
                            label="Nombre" required>
                            <Input placeholder="" autoComplete={"off"}/>
                        </Form.Item>

                        <Form.Item 
                            name={"perapellpat"}
                            label="Apellido Paterno" required>
                            <Input placeholder="" autoComplete={"off"}/>
                        </Form.Item>

                        <Form.Item
                            name={"perapellmat"}
                            label="Apellido Materno" required>
                            <Input placeholder="" autoComplete={"off"}/>
                        </Form.Item>

                        <FormTpu />
                        
                        <FormZon />

                        <Form.Item
                            name="sucursales"
                            label="Sucursales"
                            required
                        >
                            <Cascader options={sucsxzona} placeholder="Selecciona una sucursal"/>
                        </Form.Item>
                        
                        
                        <Form.Item 
                            name={"soldto"}
                            label="Código SoldTo" required>
                            <Input type="number" placeholder="" autoComplete={"off"}/>
                        </Form.Item>

                        <Form.Item
                            name={"usuario"} 
                            label="Usuario" required>
                            <Input placeholder="" autoComplete={"off"} />
                        </Form.Item>

                        <Form.Item
                            name={"contrasena"}
                            label="Contraseña" required>
                            <Input.Password  placeholder="" autoComplete={"off"} />
                        </Form.Item>

                        <Form.Item
                            name={"correo"} 
                            label="Correo" required>
                            <Input type="email" placeholder="" autoComplete={"off"} />
                        </Form.Item>

                        <Form.Item>
                            <Button className="gx-mb-0"
                                type="primary"
                                htmlType="submit"
                                loading={cargandoCrearUsuario}
                            >
                                {
                                    cargandoCrearUsuario == true
                                    ?"Enviando"
                                    :"Crear"
                                }
                            </Button>
                        </Form.Item>
                        {/* <Form.Item>
                            <Button type="primary">Crear</Button>
                        </Form.Item> */}
                    {/* </Form> */}
                </Card>
            </Col>

            {/* <Col xl={9} md={9} sm={9} xs={9}>
                <Profile user={{
                    id: 'vUAqPRNWgYdS2DyJNAC1lV5KpJF21',
                    soldTo: '425156',
                    name: 'Gerson Vilca',
                    image: 'https://via.placeholder.com/500x500',
                    address: 'Florida, USA',
                    email: 'gerson@gmail.com',
                    }} userInfo={{
                        followers: '2k+',
                        following: 847,
                        frinds: 327,
                        isFollow: false
                    }}
                />

                <Card>
                    <Row>
                        <Col xl={8} md={8} sm={8} xs={8}>
                            <div className="gx-media gx-flex-nowrap gx-mt-3 gx-mt-lg-4 gx-mb-2">
                                <div className="gx-mr-3">
                                    <i className={`icon icon-map-styled gx-fs-xlxl gx-text-orange`}/>
                                </div>
                                <div className="gx-media-body">
                                    <h6 className="gx-mb-1 gx-text-grey">{"Zona"}</h6>
                                    <p className="gx-mb-0">{"Norte"}</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={8} md={8} sm={8} xs={8}>
                            <div className="gx-media gx-flex-nowrap gx-mt-3 gx-mt-lg-4 gx-mb-2">
                                <div className="gx-mr-3">
                                    <i className={`icon icon-company gx-fs-xlxl gx-text-orange`}/>
                                </div>
                                <div className="gx-media-body">
                                    <h6 className="gx-mb-1 gx-text-grey">{"Sucursal"}</h6>
                                    <p className="gx-mb-0">{"EITAL"}</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={8} md={8} sm={8} xs={8}>
                            <div className="gx-media gx-flex-nowrap gx-mt-3 gx-mt-lg-4 gx-mb-2">
                                <div className="gx-mr-3">
                                    <i className={`icon icon-wall gx-fs-xlxl gx-text-orange`}/>
                                </div>
                                <div className="gx-media-body">
                                    <h6 className="gx-mb-1 gx-text-grey">{"T. Usuario"}</h6>
                                    <p className="gx-mb-0">{"Ejecutivo"}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
         */}
            <Col xl={12} md={12} sm={12} xs={12}>
                <Card>
                    <Row>
                        {
                            sucursalesXZona.map((zona, posicion) => {
                                return ( 
                                    <Col xl={12} md={12} sm={12} xs={12}>
                                        {/* <Checkbox ></Checkbox> */}
                                        <h4>{zona.zona}</h4>
                                        {
                                            zona.sucs.map((sucursal, posicionSuc) => {
                                                return (
                                                    <div>
                                                        <Checkbox onChange={(valor) => { dispatch(SeleccionaSucursalesReducer(posicion, posicionSuc, valor.target.checked)) }}  ><span>{sucursal.sucnombre}</span></Checkbox><br/>
                                                    </div>
                                                )
                                            })
                                        }
                                        <br/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Card>
            </Col>
            
        </Row>
        </Form>
    )
}

export default Formprincipal
