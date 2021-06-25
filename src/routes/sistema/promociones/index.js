import React from 'react'
import Auxiliary from "util/Auxiliary"
import {Col, Row} from "antd"
import Slide from './carousel'
import Titulo from 'components/Sistema/Titulo/Titulo'
import CanalPromociones from 'components/Sistema/CanalPromociones'
import {useDispatch, useSelector} from "react-redux";
import {
    seleccionarCategoriaReducer, 
    seleccionarPromocionReducer, 
    seleccionarVistaPromocionReducer, 
    reiniciarPromocionesReducer, 
    deseleccionarPromocionReducer,
    seleccionarCategoriaXZonaReducer,
    ActivarModalReportePagosReducer
} from 'appRedux/actions/Promociones'
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos";
import {seleccionarTutorialReducer} from "appRedux/actions/Tutorial";
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'
import ModalInformativo from './ModalInformativo'
import 'styles/Sistema/Promociones/index.css'
import IconoRerportePagos from 'assets/images/iconos/reportePagos.png'
import funPermiso from 'funciones/funPermiso.js'
import {PERMISO_BOTON_DESCARGAR_REPORTE_PAGOS} from 'constants/PermisosTypes'

const Promociones = () => {
    const dispatch = useDispatch();
    const {
        categoriasPromociones, 
        canalesPromociones, 
        seleccionoPromocion, 
        colorSeleciconadoPromo, 
        vistaPromocionSeleccionado, 
        deseleccionarPromocion, 
        fechaActualizacionPromocion,
        mostrarModalReportePagos
    } = useSelector(({promociones}) => promociones);
    const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
    const {tutorialSeleccionado} = useSelector(({tutorial}) => tutorial);
    const {vistaVentasSeleccionado}= useSelector(({ventasTpr}) => ventasTpr);
    const {permisos} = useSelector(({auth}) => auth);
    const {seleccionarFiltroZona} = useSelector(({zonas}) => zonas);
    
    const seleccionarCategoria = async (scaid, posicion, catid) =>  {
        console.log(seleccionarFiltroZona)

        if(seleccionarFiltroZona == true){
            await dispatch(seleccionarPromocionReducer(true))
            await dispatch(seleccionarCategoriaXZonaReducer(scaid, true, catid))
        }else{
            await dispatch(seleccionarPromocionReducer(true))
            await dispatch(seleccionarCategoriaReducer(scaid, true))
        }
    }

    const deseleccionarCategoria = async () => {
        // dispatch(deseleccionarPromocionReducer(true))
        // dispatch(seleccionarPromocionReducer(false))
        dispatch(reiniciarPromocionesReducer())
    }

    if(cargaArchivosSeleccionado == true){
        dispatch(seleccionarCargaArchivosReducer(false))
    }

    if(tutorialSeleccionado == true){
        dispatch(seleccionarTutorialReducer(false))
    }

    if(vistaPromocionSeleccionado == false){
        dispatch(seleccionarVistaPromocionReducer(true))
    }

    if(vistaVentasSeleccionado == true){
        dispatch(seleccionarVistaVentasReducer(false))
    }

    return (
        <Auxiliary>
            <ModalInformativo />
            <Row id="Contenedor-Promociones-Hoja">
                <Col xl={24} md={24} sm={24} xs={24}>
                </Col>
                <Col xl={24} md={24} sm={24} xs={24} style={{marginBottom:'-5px'}}  >
                    <Titulo 
                        tieneFecha  = {true}
                        tieneTitulo = {false}
                        tieneIcono  = {false}
                        titulo      = {""}
                        tieneBotonDescargar = {true}
                        fechaActual = {fechaActualizacionPromocion}
                    />
                </Col>
                <Slide 
                    heading                 = "Example Slider"   
                    slides                  = {categoriasPromociones} 
                    seleccionarCategoria    = {seleccionarCategoria}
                    seleccionoPromocion     = {seleccionoPromocion}
                    deseleccionarCategoria  = {deseleccionarCategoria}
                    seleccionarFiltroZona   = {seleccionarFiltroZona}
                />
                <Col xl={24} md={24} sm={24} xs={24} />
                {
                    canalesPromociones.map((item, posicion) => {
                        return (
                            <CanalPromociones
                                posicionCanal   = {posicion}
                                cscid           = {item.cscid}
                                nombreCanal     = {item.cannombre}
                                promociones     = {item.promociones}
                                porcentaje      = {item.porcentaje}
                                colorSeleciconadoPromo = {colorSeleciconadoPromo}
                                permisos        = {permisos}
                            />
                        )
                    })
                }
                {
                    seleccionoPromocion == true
                    ?<div style={{marginBottom:'0px', height:'0px'}} />
                    :<div style={{marginBottom:'50px', height:'50px'}} />
                }

                {
                    funPermiso(
                        PERMISO_BOTON_DESCARGAR_REPORTE_PAGOS, 
                        <div 
                            onClick={() => dispatch(ActivarModalReportePagosReducer(!mostrarModalReportePagos))}
                            className="hvr-buzz-out floating" 
                            id="Contenedor-Btn-Flotante-Reporte-Pagos-Promociones"
                        >
                            <img id="Icono-Flotante-Reporte-Pagos-Promociones" src={IconoRerportePagos} />
                        </div>
                    )
                }
                
            </Row>
        </Auxiliary>
    )
}

export default Promociones
