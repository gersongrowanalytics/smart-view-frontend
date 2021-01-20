import React from 'react'
import {
    descargarInformacionPromocionesReducer, 
    ActivarModalDescargas
} from 'appRedux/actions/Promociones'

import {
    SeleccionarSucursalDescargasReducer,
    SeleccionarSucursalesZonaReducerReducer,
    SeleccionarTodasSucursalesDescargasReducer
} from 'appRedux/actions/Sucursales'
import 'styles/Sistema/Promociones/BotonDescargar.css'
import {useDispatch, useSelector} from "react-redux";
import ReactExport from 'react-data-export';
import ModalDescargas from '../Promociones/ModalDescargas'
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
        promocionesExcelEspecifico
    }= useSelector(({promociones}) => promociones);

    const { 
        sucursalesUsuario, 
        zonas 
    } = useSelector(({sucursales}) => sucursales)

    return (
        <>  
            <ExcelFile 
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
            </ExcelFile>
            {/* <button 
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
                    width="20px" 
                    height="20px"
                />
            </button> */}

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
            />
        </>        
    )
}

export default BotonDescargar
