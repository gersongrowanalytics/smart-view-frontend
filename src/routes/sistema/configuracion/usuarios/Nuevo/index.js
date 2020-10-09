import React from 'react'
import {Col, Row, Card, Form, Input, Button, Select} from "antd";
import FormTdi from './Form/formTdi'
import FormTpu from './Form/formTpu'
import FormZon from './Form/formZon'
import Profile from "components/wall/Profile/index";

const index = () => {

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
        console.log("finish",values)
    };

    return (
        <Row>
            <Col xl={15} md={15} sm={15} xs={15}>
                <Card>
                    <Form
                        {...formItemLayout}
                        form={form}
                        onFinish={onFinish}
                        scrollToFirstError
                    >
                        
                        <FormTdi />

                        <Form.Item 
                            rules={[{ 
                                required: true, 
                                message: 'El Número de Documento es requerido' 
                            }]}
                            name={"pernum"}
                            label="N° Documento" required>
                            <Input type="number" placeholder="" />
                        </Form.Item>

                        <Form.Item 
                            name={"pernom"}
                            label="Nombre" required>
                            <Input placeholder="" />
                        </Form.Item>

                        <Form.Item 
                            name={"perapellpat"}
                            label="Apellido Paterno" required>
                            <Input placeholder="" />
                        </Form.Item>

                        <Form.Item
                            name={"perapellmat"}
                            label="Apellido Materno" required>
                            <Input placeholder="" />
                        </Form.Item>

                        <FormTpu />
                        
                        <FormZon />
                        
                        
                        <Form.Item 
                            name={"soldto"}
                            label="Código SoldTo" required>
                            <Input type="number" placeholder="" />
                        </Form.Item>

                        <Form.Item
                            name={"usuario"} 
                            label="Usuario" required>
                            <Input placeholder="" />
                        </Form.Item>

                        <Form.Item
                            name={"contrasena"}
                            label="Contraseña" required>
                            <Input.Password  placeholder="" />
                        </Form.Item>

                        <Form.Item
                            name={"correo"} 
                            label="Correo" required>
                            <Input type="email" placeholder="" />
                        </Form.Item>

                        <button

                        >
                            Crear
                        </button>
                        {/* <Form.Item>
                            <Button type="primary">Crear</Button>
                        </Form.Item> */}
                    </Form>
                </Card>
            </Col>

            <Col xl={9} md={9} sm={9} xs={9}>
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
        </Row>
    )
}

export default index
