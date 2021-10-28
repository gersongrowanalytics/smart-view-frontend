import React from 'react'
import {
    descargarInformacionPromocionesReducer, 
    ActivarModalDescargas,

    ActivarModalReportePagosReducer,
    ObtenerReportesPagosDescargaEspecifica,
} from 'appRedux/actions/Promociones'
import funPermiso from 'funciones/funPermiso.js'
import {PERMISO_BOTON_DESCARGAR_REPORTE_PAGOS_CUADRADO} from 'constants/PermisosTypes'
import {
    SeleccionarSucursalDescargasReducer,
    SeleccionarSucursalesZonaReducerReducer,
    SeleccionarTodasSucursalesDescargasReducer,

    SeleccionarGrupoSucursalesDescargarReducer
} from 'appRedux/actions/Sucursales'
import 'styles/Sistema/Promociones/BotonDescargar.css'
import {useDispatch, useSelector} from "react-redux";
import ReactExport from 'react-data-export';
import ModalDescargas from '../Promociones/ModalDescargas'
import ModalReporetePagos from '../Promociones/ModalReporetePagos';
import IconoRerportePagos from 'assets/images/iconos/reportePagos.png'
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const BotonDescargar = () => {
    const dispatch = useDispatch();
    const descargarPromociones = async () =>  {
        await dispatch(descargarInformacionPromocionesReducer())
    }

    const { 
        promocionesExcel,
        mostrarModalDescargas,
        promocionesExcelEspecifico,

        mostrarModalReportePagos,
        reportePagosExcelEspecifico,
        reconocimientoExcelEspecifico,
        promocionesliquidacionesExcelEspecifico,
        fechaActualizacionReportePago,
        cargandoReportePagos,
        cargando_descarga_excel_promociones
    }= useSelector(({promociones}) => promociones);

    const { 
        sucursalesUsuario, 
        zonas,
        gsus
    } = useSelector(({sucursales}) => sucursales)

    return (
        <>  
            {/* <ExcelFile 
                filename="PROMOCIONES"
                element={
                    <button 
                        type="button" 
                        class="ant-btn ant-btn-lg btnDescargar"
                        id="Boton-BotonDescargar"
                    >
                        <span>Descargar</span> 
                        <img 
                            alt="" 
                            src={require("assets/images/iconoDescargar.png")} 
                            style={{marginLeft:'10px'}} 
                            width="20px" 
                            height="20px"
                        />
                    </button>
                }>
                <ExcelSheet 
                    dataSet={promocionesExcel} 
                    name="Organization"
                />
            </ExcelFile> */}
            <button 
                type="button" 
                class="ant-btn ant-btn-lg btnDescargar"
                id="Boton-BotonDescargar"
                onClick={() => {dispatch(ActivarModalDescargas(true))}}
            >
                <span>Descargar</span> 
                <img 
                    alt="" 
                    src={require("assets/images/iconoDescargar.png")} 
                    style={{marginLeft:'10px'}} 
                    width="30px" 
                    // height="20px"
                />
            </button>


            {
                funPermiso(
                    PERMISO_BOTON_DESCARGAR_REPORTE_PAGOS_CUADRADO, 
                    <button 
                        type="button" 
                        class="ant-btn ant-btn-lg "
                        id="Boton-BotonDescargar-Reporte-Pagos"
                        onClick={() => dispatch(ActivarModalReportePagosReducer(!mostrarModalReportePagos))}
                    >
                        <span>Reporte Pagos</span> 
                        <img 
                            alt="" 
                            src={IconoRerportePagos} 
                            style={{marginLeft:'10px'}} 
                            width="35px" 
                            // height="20px"
                        />
                    </button>
                )
            }

            {/* <button onClick={() => {dispatch(ActivarModalDescargas(true))}} id="Boton-Personalizado-BotonDescargar" type="button" class="ant-btn ant-btn-primary ant-btn-icon-only">-</button> */}

            <ModalDescargas
                mostrarModalDescargas = {mostrarModalDescargas}
                ActivarModalDescargas = {ActivarModalDescargas}
                sucursalesUsuario     = {sucursalesUsuario}
                zonas                 = {zonas}
                SeleccionarSucursalDescargasReducer        = {SeleccionarSucursalDescargasReducer}
                SeleccionarSucursalesZonaReducerReducer    = {SeleccionarSucursalesZonaReducerReducer}
                SeleccionarTodasSucursalesDescargasReducer = {SeleccionarTodasSucursalesDescargasReducer}
                promocionesExcelEspecifico = {promocionesExcelEspecifico}
                cargando_descarga_excel_promociones = {cargando_descarga_excel_promociones}
            />

            <ModalReporetePagos
                mostrarModalDescargas = {mostrarModalReportePagos}
                ActivarModalDescargas = {ActivarModalReportePagosReducer}
                sucursalesUsuario     = {sucursalesUsuario}
                zonas                 = {zonas}
                SeleccionarSucursalDescargasReducer        = {SeleccionarSucursalDescargasReducer}
                SeleccionarSucursalesZonaReducerReducer    = {SeleccionarSucursalesZonaReducerReducer}
                SeleccionarTodasSucursalesDescargasReducer = {SeleccionarTodasSucursalesDescargasReducer}
                promocionesExcelEspecifico = {reportePagosExcelEspecifico}
                reconocimientoExcelEspecifico = {reconocimientoExcelEspecifico}
                promocionesliquidacionesExcelEspecifico = {promocionesliquidacionesExcelEspecifico}
                gsus = {gsus}
                SeleccionarGrupoSucursalesDescargarReducer = {SeleccionarGrupoSucursalesDescargarReducer}
                fechaActualizacionReportePago = {fechaActualizacionReportePago}
                ObtenerReportesPagosDescargaEspecifica = {ObtenerReportesPagosDescargaEspecifica}
                cargandoReportePagos = {cargandoReportePagos}
            />
        </>        
    )
}

export default BotonDescargar
