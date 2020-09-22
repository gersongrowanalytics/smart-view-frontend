import React from 'react'
import {descargarInformacionPromocionesReducer} from 'appRedux/actions/Promociones'
import {useDispatch, useSelector} from "react-redux";
import ReactExport from 'react-data-export';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const BotonDescargar = () => {
    const dispatch = useDispatch();
    const descargarPromociones = async () =>  {
        await dispatch(descargarInformacionPromocionesReducer())
    }

    const { promocionesExcel}= useSelector(({promociones}) => promociones);

    return (
        <>
            <ExcelFile 
                // onClick = {() => alert('xd')}
                filename="PROMOCIONES"
                element={
                    <button 
                        type="button" 
                        class="ant-btn ant-btn-lg btnDescargar"
                        onClick={() => {descargarPromociones()}}
                        
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
            {/*  */}
        </>
    )
}

export default BotonDescargar
