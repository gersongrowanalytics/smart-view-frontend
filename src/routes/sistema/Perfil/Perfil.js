import React, {useEffect} from "react";
import {Col, Row, Spin} from "antd";
import AcercaDe from "../../../components/Sistema/Perfil/AcercaDe/AcercaDe";
import CabeceraPerfil from "../../../components/Sistema/Perfil/CabeceraPerfil/CabeceraPerfil";
import Contacto from "../../../components/Sistema/Perfil/Contacto/Contacto";
import Auxiliary from "../../../util/Auxiliary";
import {useDispatch, useSelector} from "react-redux";
import Widget from "components/Widget";
import {CambiarValorInputReducer} from "appRedux/actions/Perfil/Perfil";
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos";
import {seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'

const Perfil = () => {
    const dispatch = useDispatch();
    const {datosUsuario} = useSelector(({auth}) => auth);
    const {editarPerfil, datosFormulario, enviandoDatos} = useSelector(({perfil}) => perfil);
    const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
    const {vistaPromocionSeleccionado} = useSelector(({promociones}) => promociones);
    const {vistaVentasSeleccionado}= useSelector(({ventasTpr}) => ventasTpr);
    const { sucursalesUsuario, obtuvoSucursalesUsuario, zonas } = useSelector(({sucursales}) => sucursales)
    useEffect(() => {
        console.log(zonas)
        if(cargaArchivosSeleccionado == true){
            dispatch(seleccionarCargaArchivosReducer(false))
        }
    
        if(vistaPromocionSeleccionado == true){
            dispatch(seleccionarVistaPromocionReducer(false))
        }
    
        if(vistaVentasSeleccionado == true){
            dispatch(seleccionarVistaVentasReducer(false))
        }

        dispatch(CambiarValorInputReducer("usuorganizacion", datosUsuario.usuorganizacion))
        dispatch(CambiarValorInputReducer("perfechanacimiento", datosUsuario.perfechanacimiento))
        dispatch(CambiarValorInputReducer("usuusuario", datosUsuario.usuusuario))
        dispatch(CambiarValorInputReducer("perdireccion", datosUsuario.perdireccion))
  
    }, [datosUsuario])

    return (
        
        <Auxiliary>
            <Spin tip="Enviando..." spinning={enviandoDatos}>
                <CabeceraPerfil
                    editarPerfil = {editarPerfil}
                    datosFormulario = {datosFormulario}
                />
                <div className="gx-profile-content">
                    <Row>
                        <Col xl={16} lg={14} md={14} sm={24} xs={24}>
                            <AcercaDe
                                datosUsuario = {datosUsuario}
                                editarPerfil = {editarPerfil}
                            />

                            <Widget title="Sucursales" styleName="gx-card-tabs gx-card-tabs-right gx-card-profile">
                                <br/>
                                <Row>
                                    {
                                        zonas.map((zona) => {
                                            return ( 
                                                <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                                                    <h4>{zona.zonnombre}</h4>
                                                    {
                                                        sucursalesUsuario.map((sucursal) => {
                                                            return( 
                                                                sucursal.zonid == zona.zonid
                                                                ?<p>{sucursal.sucnombre}</p>
                                                                :null
                                                            )
                                                        })
                                                    }
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Widget>
                        </Col>

                        <Col xl={8} lg={10} md={10} sm={24} xs={24}>
                            <Contacto
                                datosUsuario = {datosUsuario}
                            />
                            <Row>
                                <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                                    {/* <Friends friendList={friendList}/> */}
                                    <Widget title="Novedades del día" styleName="gx-card-profile-sm">

                                    </Widget>
                                </Col>
                                <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                                    {/* <Photos photoList={photoList}/> */}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Spin>
        </Auxiliary>
    );
};

export default Perfil;


