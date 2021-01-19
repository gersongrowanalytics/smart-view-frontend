import React from 'react'
import {Col, Row, Spin} from "antd"
import './Estilos/Titulo.css'
import config from 'config'
import BotonDescargar from './BotonDescargar'
import funPermiso from 'funciones/funPermiso.js'
import {
    PERMISO_BOTON_DESCARGAR_PROMOCIONES
} from "constants/PermisosTypes"
import {useDispatch, useSelector} from "react-redux"

const Titulo = (props) => {
    
    const {tieneFecha, tieneTitulo, tieneBotonDescargar, tieneIcono, titulo, tprid, fechaActual} = props;
    const {
        cargoZona,
        cargoSucursal,
        nombreZonaSel,
        nombreSucuSel
    }= useSelector(({ventasTpr}) => ventasTpr);

    return (
        <Row>
            {
                tieneIcono
                ?<img src={config.api+'/Sistema/tiposPromociones/img/iconos/carrito.png'} 
                    className={tprid == 1 ? "iconoTipoPromocionSellIn" : "iconoTipoPromocion"}/>
                :null
            }
            
            <Col xl={tieneIcono == true ?22 :24} md={tieneIcono == true ?22 :24} sm={tieneIcono == true ?22 :24} xs={tieneIcono == true ?22 :24}>
                <span className={
                    tieneTitulo 
                    ?tprid == 1
                        ?`titulo-subrayado gx-flex-row` 
                        :`titulo-subrayado gx-flex-row subrayado-verde` 
                    :`gx-flex-row`
                }>                    
                    {
                        tieneBotonDescargar == true
                        ?funPermiso(PERMISO_BOTON_DESCARGAR_PROMOCIONES, <BotonDescargar />)
                        :null
                    }
                    {
                        tieneTitulo
                        ?<div id={ tprid == 1 ?"tituloModuloVentasSellIn" :"tituloModuloVentas"}> {titulo.toUpperCase()}</div>
                        :null
                    }

                    
                    {
                        <div 
                            id="contenedorActualizacion" 
                            className="gx-fs-md gx-ml-auto" 
                            style={tieneIcono==true?{marginRight:'-57px'}:{}}>
                            {/* <p className="ultimaActualizacion">Actualización {fechaActual}</p> */}
                            {
                                cargoSucursal == true
                                ?cargoZona == true
                                    ? tieneFecha == true
                                        ?<p className="ultimaActualizacion">Actualización 19 de Enero del 2021</p>
                                        :null
                                    : <div>
                                        <Spin style={{position:'absolute', marginLeft:'-30px', marginBottom:'50px'}}></Spin>
                                        <span>Cargando Zona</span>
                                    </div>

                                :<Spin><p>Cargando</p></Spin>
                            }

                        </div>
                    }
                </span>
            </Col>
        </Row>
    )
}

export default Titulo
