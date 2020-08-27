import React from 'react'
import {Row} from "antd";
import CardPromocion from 'components/Admin/CardPromocion'
import './estilos/CarouselPromocion.css'

const CarouselPromocion = () => {
    return (
        <Row className="contenedorCarouselPromocion">
            <figure>
                <CardPromocion />
                <div className="capa">
                    
                    <h2>Promociones Totales: 20</h2>
                    
                </div>
            </figure>
        </Row>
    )
}

export default CarouselPromocion
