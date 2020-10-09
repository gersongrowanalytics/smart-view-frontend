import React from 'react'
import {Card, Row, Col, Switch, Spin, Button} from "antd"
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import {
    GuardarPermisosTipoUsuarioReducer
} from "appRedux/actions/Configuracion/TiposUsuarios"

const PermisosTipoUsuario = () => {
    
    const dispatch = useDispatch();

    function onChange(posicion) {
        console.log(`switch to ${posicion}`);
    }

    const {
        tpuidSeleccionado,
        permisosTipoUsuarioSeleccionado, 
        cargandoPermisosTipoUsuarioSeleccionado,
        nombreTipoUsuarioSeleccionado
    }  = useSelector(({configuracionTiposUsuarios}) => configuracionTiposUsuarios);

    return (
        <Card title={"Lista de Permisos para "+nombreTipoUsuarioSeleccionado}>
            <Link to="/sistema/configuracion/tiposUsuarios" >
                <Button>
                    Regresar
                </Button>
            </Link>
            {" "}
            <Button 
                className="ant-btn ant-btn-primary" 
                onClick={() => dispatch(
                    GuardarPermisosTipoUsuarioReducer(
                        tpuidSeleccionado, 
                        permisosTipoUsuarioSeleccionado
                    )
                )}>
                Guardar
            </Button>
            <Spin spinning={cargandoPermisosTipoUsuarioSeleccionado} tip="Cargando...">
                <Row>
                    {
                        permisosTipoUsuarioSeleccionado.map((pts, posicion) => {
                            return (
                                <Col 
                                    xl={24} 
                                    md={24} 
                                    sm={24} 
                                    xs={24} 
                                    style={{marginTop:'10px', textTransform: 'uppercase'}}>
                                    <Switch 
                                        defaultChecked={pts.seleccionado} 
                                        onChange={() => pts.seleccionado=!pts.seleccionado} 
                                        style={{marginRight:'10px'}}/>
                                    {pts.pemnombre}<br />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Spin>
        </Card>
    )
}

export default PermisosTipoUsuario
