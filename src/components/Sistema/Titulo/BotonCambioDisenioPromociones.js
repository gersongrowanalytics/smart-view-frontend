import React from 'react'
import IconoCambiarDisenioUno from 'assets/images/promociones/cambiaruno.png'
import IconoCambiarDisenioDos from 'assets/images/promociones/cambiardos.png'

const BotonCambioDisenioPromociones = (props) => {
    return (
        <>
            <button 
                type="button" 
                // class="ant-btn ant-btn-lg btnDescargar"
                id="Btn-Cambiar-Disenio-Promociones"
                onClick={() => props.CambiarDisenioPromocionesReducer()}
            >
                <img 
                    alt="" 
                    src={
                        props.mostrarDisenioPromocionesPrincipal == true
                        ?IconoCambiarDisenioUno
                        :IconoCambiarDisenioDos
                    }
                    style={{marginLeft:'10px'}} 
                    width="30px" 
                    // height="20px"
                />
            </button>  
        </>
    )
}

export default BotonCambioDisenioPromociones
