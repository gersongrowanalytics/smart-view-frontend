import React from 'react'
import {Col, Row} from "antd";
import './estilos/CardRebate.css'
import config from 'config'
import NumberFormat from 'react-number-format';
import funFomratoDecimal from '../../funciones/funFormatoDecimal.js'
import { useSelector} from "react-redux";

const CardRebate = (props) => {

    const {
        nombreTipoPromocion, 
        rebateValorizado, 
        trrs, 
        cumplimientoPorcentaje, 
        realValorizado, 
        objetivoValorizado,
    } = props

    const {
        tieneRebateTrimestral,
        tsuobjetivotrimestral,
        tsurealtrimestral,
        tsufacturartrimestral,
        tsucumplimientotrimestral,
        tsurebatetrimestral,
        nombreTrimestre
    } = props.tsu

    const {mesFiltroSelec} = useSelector(({fechas}) => fechas);



    return (
        <div style={{
            background:'#5A7DD5', 
            width:'100%',
            height: nombreTipoPromocion.includes("Out") == true ?'120px' : tieneRebateTrimestral == true ?'140px' :'120px', 
            marginBottom:'20px', 
            paddingRight:'15px', 
            borderRadius:'20px', 
            boxShadow: '9px 6px 9px -1px rgba(0, 0, 0, 0.2)',
            paddingLeft: '31px',
            paddingTop:'18px'
        }} >
            <Row>
                <Col 
                    xl={nombreTipoPromocion.includes("Out") == true ? 24 : tieneRebateTrimestral == true ?14 : 24} 
                    md={nombreTipoPromocion.includes("Out") == true ? 24 : tieneRebateTrimestral == true ?14 : 24} 
                    sm={nombreTipoPromocion.includes("Out") == true ? 24 : tieneRebateTrimestral == true ?14 : 24} 
                    xs={nombreTipoPromocion.includes("Out") == true ? 24 : tieneRebateTrimestral == true ?14 : 24} 
                    id={nombreTipoPromocion.includes("Out") == true ? "" : tieneRebateTrimestral == true ? "primerBloqueRebate": ""}>
                    <Row>
                        {
                            nombreTipoPromocion.includes("Out") == true
                            ?<Col xl={14} md={14} sm={14} xs={14} >
                                <div id="txtRebateTipo" className="nombreTipoPromocionRebate">REBATE {nombreTipoPromocion}:</div>
                            </Col>
                            : tieneRebateTrimestral == true
                                ?<Col xl={24} md={24} sm={24} xs={24} >
                                    <div id="txtRebateTipo" className="nombreTipoPromocionRebate">REBATE {nombreTipoPromocion}:</div>
                                </Col>
                                :<Col xl={14} md={14} sm={14} xs={14} >
                                    <div id="txtRebateTipo" className="nombreTipoPromocionRebate">REBATE {nombreTipoPromocion}:</div>
                                </Col>
                        }
                        <Col xl={10} md={10} sm={10} xs={10} >
                            <div id="txtRebateData">MENSUAL </div>
                        </Col>
                    </Row>

                    
                    {
                        trrs.map((escala, posicion) => {
                            return(
                                trrs.length <= 3
                                ?<Row>
                                    <Col xl={14} md={14} sm={14} xs={14} >
                                        <div id="txtRebateData">
                                            Escala {posicion+1 +"  "} 
                                            {escala.rtpporcentajedesde}% - 
                                            {
                                                escala.rtpporcentajehasta > 300
                                                ?" +"
                                                :escala.rtpporcentajehasta
                                            }%</div>
                                    </Col>
                                    <Col xl={10} md={10} sm={10} xs={10} >
                                        <div id="txtRebateData">
                                            = S/
                                            {
                                                escala.realTotal
                                                ? <NumberFormat value={
                                                    funFomratoDecimal(
                                                        escala.realTotal , 0
                                                    )} displayType={'text'} thousandSeparator={true} />

                                                :escala.rtpporcentajehasta > 300
                                                    ?<NumberFormat value={
                                                        funFomratoDecimal(
                                                        (((objetivoValorizado * escala.rtpporcentajedesde)/100) * escala.rtpporcentajerebate) /100 , 0
                                                    )} displayType={'text'} thousandSeparator={true} />

                                                    :<NumberFormat value={
                                                        funFomratoDecimal(
                                                            (((objetivoValorizado * escala.rtpporcentajehasta)/100) * escala.rtpporcentajerebate) /100 , 0
                                                    )} displayType={'text'} thousandSeparator={true} />
                                            }
                                            

                                        </div>
                                    </Col>
                                </Row>
                                :posicion+1 > trrs.length-3 
                                    ?<Row>
                                        <Col xl={14} md={14} sm={14} xs={14} >
                                            <div id="txtRebateData">
                                                Escala {posicion+1 +"  "} 
                                                {escala.rtpporcentajedesde}% - 
                                                {
                                                    escala.rtpporcentajehasta > 300
                                                    ?" +"
                                                    :escala.rtpporcentajehasta
                                                }%</div>
                                        </Col>
                                        <Col xl={10} md={10} sm={10} xs={10} >
                                            <div id="txtRebateData">
                                                = S/
                                                {/* {
                                                    cumplimientoPorcentaje >= escala.rtpporcentajedesde 
                                                    ?<NumberFormat value={
                                                        funFomratoDecimal(
                                                            (realValorizado * escala.rtpporcentajerebate) /100 , 0
                                                        )} displayType={'text'} thousandSeparator={true} />
                                                    :"0.0"
                                                } */}

                                            {
                                                escala.rtpporcentajehasta > 300
                                                ?<NumberFormat value={
                                                    funFomratoDecimal(
                                                        (((objetivoValorizado * escala.rtpporcentajedesde)/100) * escala.rtpporcentajerebate) /100 , 0
                                                    )} displayType={'text'} thousandSeparator={true} />
                                                :<NumberFormat value={
                                                    funFomratoDecimal(
                                                        (((objetivoValorizado * escala.rtpporcentajehasta)/100) * escala.rtpporcentajerebate) /100 , 0
                                                    )} displayType={'text'} thousandSeparator={true} />
                                            }

                                            </div>
                                        </Col>
                                    </Row>
                                    :null
                                
                            )
                        })
                    }
                    


                    <div id="resultadoRebate"></div>
                    <Row>
                        <Col xl={14} md={14} sm={14} xs={14} >
                            <div id="txtRebateTipo">Rebate Real </div>
                        </Col>
                        <Col xl={10} md={10} sm={10} xs={10} >
                            <div id="txtRebateTipo">
                            = S/<NumberFormat 
                                value={
                                    mesFiltroSelec == "SET"
                                    ?funFomratoDecimal((rebateValorizado), 0)
                                    :funFomratoDecimal((rebateValorizado), 0)
                                } 
                                displayType={'text'} 
                                thousandSeparator={true} />
                            </div>
                        </Col>
                    </Row>
                </Col>
                
                {
                    nombreTipoPromocion.includes("Out") == true
                    ? null
                    :   
                    
                        tieneRebateTrimestral == true
                        ?<Col xl={10} md={10} sm={10} xs={10} id="segundoBloqueRebate">
                            <Row>
                                <Col xl={24} md={24} sm={24} xs={24}>
                                    <div id="txtRebateDataTrimestre">
                                        TRIMESTRE - {nombreTrimestre}
                                    </div>
                                </Col>


                                <Col xl={10} md={10} sm={10} xs={10}>
                                    <div id="txtRebateDataTrimestre">
                                        Objetivo: 
                                    </div>
                                </Col>
                                <Col xl={14} md={14} sm={14} xs={14}>
                                    <div id="txtRebateDataTrimestre">
                                        <NumberFormat value={
                                            funFomratoDecimal(tsuobjetivotrimestral , 0)} displayType={'text'} thousandSeparator={true} />
                                    </div>
                                </Col>


                                <Col xl={10} md={10} sm={10} xs={10}>
                                    <div id="txtRebateDataTrimestre">
                                        Real:
                                    </div>
                                </Col>

                                <Col xl={14} md={14} sm={14} xs={14}>
                                    <div id="txtRebateDataTrimestre">
                                        <NumberFormat value={
                                            funFomratoDecimal(tsurealtrimestral , 0)} displayType={'text'} thousandSeparator={true} />
                                    </div>
                                </Col>



                                <Col xl={10} md={10} sm={10} xs={10}>
                                    <div id="txtRebateDataTrimestre">
                                        Facturar:
                                    </div>
                                </Col>

                                <Col xl={14} md={14} sm={14} xs={14}>
                                    <div id="txtRebateDataTrimestre">
                                        <NumberFormat value={
                                            funFomratoDecimal(tsufacturartrimestral , 0)} displayType={'text'} thousandSeparator={true} />
                                    </div>
                                </Col>

                                <Col xl={10} md={10} sm={10} xs={10}>
                                    <div id="txtRebateDataTrimestre">
                                        Cump.:
                                    </div>
                                </Col>

                                <Col xl={14} md={14} sm={14} xs={14}>
                                    <div id="txtRebateDataTrimestre">
                                        {funFomratoDecimal(tsucumplimientotrimestral , 0)}%
                                    </div>
                                </Col>
                                
                                
                            </Row>
                            <div id="separadorRebateTrimestre"></div>
                            <Row>
                                <Col xl={10} md={10} sm={10} xs={10}>
                                    <div id="txtRebateTipo">
                                        Real {nombreTrimestre}
                                    </div>
                                </Col>
                                <Col xl={14} md={14} sm={14} xs={14}>
                                    <div id="txtRebateTipo">
                                        <NumberFormat value={
                                            funFomratoDecimal(tsurebatetrimestral , 0)} displayType={'text'} thousandSeparator={true} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        :null
                }
                
                
            </Row>        
        </div>
    )
}

export default CardRebate




























// import React from 'react'
// import {Col, Row} from "antd";
// import './estilos/CardRebate.css'
// import config from 'config'
// import NumberFormat from 'react-number-format';
// import funFomratoDecimal from '../../funciones/funFormatoDecimal.js'
// import { useSelector} from "react-redux";

// const CardRebate = (props) => {

//     const {nombreTipoPromocion, rebateValorizado} = props
//     const {mesFiltroSelec} = useSelector(({fechas}) => fechas);

//     return (
//         <div style={{background:'#5A7DD5', width:'100%', marginBottom:'20px', paddingRight:'15px', borderRadius:'20px', boxShadow: '9px 6px 9px -1px rgba(0, 0, 0, 0.2)'}} >
//             <Row>
//                 <Col xl={6} md={8} sm={6} xs={12} >
//                     <div style={{width:'127px', height:'120px', backgroundImage: "url('"+config.api+"Sistema/abs/img/rebate.png')", backgroundSize: 'cover', backgroundPosition:'center', }} />
//                 </Col>
//                 <Col xl={18} md={16} sm={18} xs={12}>
//                     <Row style={{paddingTop:'20px',}}>
//                         <Col xl={24} md={24} sm={24} xs={24}>
//                             <h2 className="gx-text-white" id="tituloRebate">Rebate {nombreTipoPromocion}</h2>
//                         </Col>
//                         <Col xl={8} md={8} sm={8} xs={24} style={{ borderRightStyle:'solid', borderRightColor:'white', paddingRight:'1px', alignSelf:'center', textAlignLast: 'left', height:'43px', paddingTop:'10px'}}>
//                             <span className="gx-text-center gx-text-white" id="textoRebate">
//                                 S/.<NumberFormat 
//                                     value={
//                                         mesFiltroSelec == "SET"
//                                         ?funFomratoDecimal((rebateValorizado), 2)
//                                         :funFomratoDecimal((rebateValorizado/100), 2)
//                                     } 
//                                     displayType={'text'} 
//                                     thousandSeparator={true} />
//                             </span>
//                         </Col>
//                         <Col xl={16} md={16} sm={16} xs={24}>
//                             <span className="gx-text-white" id="textoRebate">El pago de Rebate se ejecutará, de llegar a la cuota establecida</span>
//                         </Col>
//                     </Row>
//                 </Col>
//             </Row>        
//         </div>
//     )
// }

// export default CardRebate
