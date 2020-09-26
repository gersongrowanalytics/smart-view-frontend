import React from 'react'
import './Estilos/Tooltip.css'
import NumberFormat from 'react-number-format';

const TooltipCardImagen = (props) => {

    const { titulo, cantidad, esSellIn, tprcolortooltip, esIzquierda, porcumplimiento } = props

    return (
        <div className={esIzquierda == true ?"tooltip" : "tooltipDerecha"}>
            <div 
                style={{background: tprcolortooltip}} 
                id={
                    esIzquierda == true
                    ? porcumplimiento > 40
                        ? esSellIn == true
                            ? "tooltiptextIzquierdaSellIn"
                            : "tooltiptextIzquierdaSellOut"
                            // ? "tooltiptext"
                            // : "tooltiptext"
                            
                        : esSellIn == true
                            ? "tooltiptextIzquierdaSellInMenor"
                            : "tooltiptextIzquierdaSellOutMenor"
                            // ? "tooltiptextMenor"
                            // : "tooltiptextMenor"

                    : porcumplimiento > 60
                        ? esSellIn == true
                            ? "tooltiptextDerechaMenor"
                            : "tooltiptextDerechaSellOutMenor"
                        : esSellIn == true
                            ? "tooltiptextDerecha"
                            : "tooltiptextDerechaSellOut"
                }
            >
                {titulo}
                {
                    titulo.includes('Por Facturar')
                    ? cantidad <= 0
                        ?0
                        :<NumberFormat value={cantidad} displayType={'text'} thousandSeparator={true} />
                    : <NumberFormat value={cantidad} displayType={'text'} thousandSeparator={true} />
                }
            </div>
        </div>
    )
}

export default TooltipCardImagen
