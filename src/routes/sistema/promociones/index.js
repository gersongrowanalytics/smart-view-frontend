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
import './nuevocanalpromociones.css'
import funFomratoDecimal from '../../../funciones/funFormatoDecimal'
import NumberFormat from 'react-number-format';
import { wait } from '@testing-library/dom'
import IconoNoPromocion from '../../../assets/images/nopromocion.png'

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
        mostrarModalReportePagos,
        mostrarDisenioPromocionesPrincipal
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
                {/* <button onClick={() => console.log(canalesPromociones)}>click</button> */}
                <Col xl={24} md={24} sm={24} xs={24} />


                {
                    mostrarDisenioPromocionesPrincipal == true
                    ?canalesPromociones.map((item, posicion) => {
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
                    :null
                }


                {/* NUEVO VISTADO DE CANALES POR PROMOCIONES */}


                

                {
                    mostrarDisenioPromocionesPrincipal == true
                    ?null
                    :<div id="Contenedor-Canales-Promociones">
                        <div className="scenes">
                            
                            {
                                canalesPromociones.map((canal) => {

                                    // let subiendo = false

                                    // while(subiendo == true){
                                    //     document.getElementById('Contenedor-Canales-Promociones').scrollTop = document.getElementById('Contenedor-Canales-Promociones').scrollTop - 10
                                    // }

                                    return (
                                        <div className="Fila-Canal-Promocion">
                                            <div
                                                // onClick={() => console.log(colorSeleciconadoPromo)} 
                                                className="Cabecera-Canal-Promocion"
                                                style={{
                                                    background:colorSeleciconadoPromo
                                                }}
                                                onClick={() => {
                                                    
                                                }}
                                                onMouseEnter={() => {
                                                    
                                                    while(document.getElementById('Contenedor-Canales-Promociones').scrollTop = 0){
                                                        document.getElementById('Contenedor-Canales-Promociones').scrollTop = document.getElementById('Contenedor-Canales-Promociones').scrollTop - 10
                                                        wait(1000)
                                                    }

                                                }}
                                                onMouseLeave={() => {
                                                    // subiendo = false
                                                }}
                                            >
                                                {canal.cannombre}
                                            </div>

                                            <div>
                                            {
                                                canal.promocionesOrdenadas.map((promocion, posicionPromocion) => {
                                                    return(
                                                        posicionPromocion+1 == canal.promocionesOrdenadas.length
                                                        ?promocion.cspid == 0
                                                            ?null
                                                            :<CardPromocionClass 
                                                                promocion = {promocion}
                                                                posicionPromocion = {posicionPromocion}
                                                                colorSeleciconadoPromo = {
                                                                    promocion.cspid == 0 || promocion.prmmecanica == ""
                                                                    ?"red"
                                                                    :colorSeleciconadoPromo
                                                                }
                                                            />
                                                        :<CardPromocionClass 
                                                            promocion = {promocion}
                                                            posicionPromocion = {posicionPromocion}
                                                            colorSeleciconadoPromo = {
                                                                promocion.cspid == 0 || promocion.prmmecanica == ""
                                                                ?"red"
                                                                :colorSeleciconadoPromo
                                                            }
                                                        />
                                                    )
                                                })
                                            }
                                            </div>
                                            
                                        </div>
                                    )
                                })
                            }

                            
                        </div>
                    </div>
                }



























                {/* FINAL DE NUEVO VISTADO DE CANALES POR PROMOCIONES */}







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

class CardPromocionClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            txtValorizado : this.props.promocion.cspvalorizado,
            editando : false,
            inputPlanchas : this.props.promocion.cspplanchas,
        }
        this.obtenerValorizado = this.obtenerValorizado.bind(this)
    }


    obtenerValorizado(e){
        let nuevoValor;
        if(e.target.value == ""){
            nuevoValor = 0
        }else{
            nuevoValor = parseInt(e.target.value)
        }
        
         
        this.setState({
            inputPlanchas : nuevoValor
        })
    
        if(this.props.promocion.cspcantidadplancha == 'NA'){
            this.setState({
                txtValorizado : 0
            })
        }else{
            if(nuevoValor <= this.props.promocion.cspcantidadplancha){
                let nuevoValorizado = nuevoValor*this.props.promocion.csptotalplancha
                this.setState({
                    txtValorizado : nuevoValorizado
                })
            }else{
                let nuevoValorizado = this.props.promocion.cspcantidadplancha*this.props.promocion.csptotalplancha
                this.setState({
                    txtValorizado : nuevoValorizado
                })
            }
        }
    }

    render() {
        
        const promocion = this.props.promocion
        const colorSeleciconadoPromo = this.props.colorSeleciconadoPromo
        // const cspidPromocionSelec = promocion.cspid == 0
        const cspidPromocionSelec = promocion.cspid

        return (
            <div 
                className="Card-Promocion"
                style={{
                    border: "1px solid "+colorSeleciconadoPromo
                }}
            >
                {
                    promocion.cspid == 0 || promocion.prmmecanica == ""
                    ?<div
                        style={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlignLast: "center"
                        }}
                    >
                        <div>
                            <img 
                                src={IconoNoPromocion}  
                                width= {"63px"}
                                height={"63px"}
                            /> 
                            <div
                                style={{color:'red'}}
                            > No hay promoción </div>
                        </div>
                        
                    </div>
                    : <>

                    <div 
                        className="Titulo-Card-Promocion"
                        style={{color:colorSeleciconadoPromo}}
                    >
                        {
                            promocion.cspcantidadplancha == 'NA'
                            ?0
                            :<NumberFormat value={funFomratoDecimal(promocion.cspcantidadplancha, 0)} displayType={'text'} thousandSeparator={true} />
                        } Planchas
                    </div>
                    <div className="Subtitulo-Card-Promocion" style={{color:colorSeleciconadoPromo}}>
                        Total de Combos
                        {
                            promocion.cspcantidadcombo == 'NA'
                            ?0
                            :<>{": "}
                                <NumberFormat value={funFomratoDecimal(promocion.cspcantidadcombo, 0)} displayType={'text'} thousandSeparator={true} />
                            </>
                        }
                    </div>
                    <div className="Nombre-Tipo-Promocion-Card-Promocion">{promocion.tprnombre}</div>

                    <div className="Cuerpo-Card-Promocion">
                        {
                            promocion.productos.map((producto, posicionProducto) => {
                                return(
                                    posicionProducto == 0
                                    ?<div className="Primera-Cuerpo-Card-Promocion">
                                        <img 
                                            src={producto.prpimagen} 
                                            className="Imagen-Card-Promocion"
                                        />
                                        <div className="Nombre-Producto-Card-Promocion">{producto.prpproductoppt}</div>
                                        <div className="Descripcion-Producto-Card-Promocion" title={producto.prpcomprappt} >
                                        {
                                            producto.prpcomprappt.substr(0, 25)
                                        }
                                        </div>

                                        <div
                                            style={{
                                                marginTop:'10px',
                                            }} 
                                            className="Descripcion-Producto-Card-Promocion" 
                                        >Planchas</div>
                                        <div className="Valor-Producto-Card-Promocion">
                                            {
                                                this.state.editando == true
                                                ?<input 
                                                    id="inputPlanchas" 
                                                    type="number"
                                                    value={this.state.inputPlanchas}
                                                    onChange={this.obtenerValorizado}
                                                />
                                                :promocion.cspplanchas
                                            }
                                        </div>
                                    </div>
                                    :null
                                )
                            })
                        }
                        {
                            promocion.productosbonificados.map((bonificado, posicionBonificado) => {
                                return (
                                    posicionBonificado == 0
                                    ?<div className="Segunda-Cuerpo-Card-Promocion">
                                        {
                                            promocion.cspgratis == 1
                                            ?<div className="Contenedor-Descripcion-Gratis-Card-Promocion">
                                                <img src={require('assets/images/regalo.png')} alt='' className="Icono-Gratis-Card-Promocion"/>
                                                <div className="Descripcion-Gratis-Card-Promocion">Gratis</div>
                                            </div>
                                            :null
                                        }
                                        <img 
                                            src={bonificado.prbimagen} 
                                            className="Imagen-Card-Promocion"
                                        />
                                        <div className="Nombre-Producto-Card-Promocion">{bonificado.prbproductoppt}</div>
                                        <div className="Descripcion-Producto-Card-Promocion" title={bonificado.prbcomprappt}>
                                            {
                                                bonificado.prbproductoppt == "Dscto"
                                                ?<div>
                                                    {funFomratoDecimal((bonificado.prbcomprappt*100), 2)}% (S/{<NumberFormat value={funFomratoDecimal(((bonificado.prbcomprappt*100) * promocion.csptotal), 2)} displayType={'text'} thousandSeparator={true} /> })
                                                </div>
                                                :bonificado.prbcomprappt.substr(0, 25)
                                            }
                                        </div>
                                        <div
                                            style={{marginTop:'10px'}}  
                                            className="Descripcion-Producto-Card-Promocion" >Valorizado</div>
                                        <div className="Valor-Producto-Card-Promocion">
                                                S/
                                                <NumberFormat value={
                                                    funFomratoDecimal(this.state.txtValorizado, 2)} displayType={'text'} thousandSeparator={true} 
                                                />
                                        </div>
                                    </div>
                                    :null
                                )
                            })
                        }
                    </div>

                    <div 
                        className="Contenedor-Btn-Editar-Card-Promocion"
                        style={{
                            background: colorSeleciconadoPromo,
                            border: "1px solid "+colorSeleciconadoPromo
                        }}
                    >
                        <div 
                            className="Btn-Editar-Card-Promocion"
                            onClick={() => {
                                if(this.state.editando == false){
                                    this.setState({
                                        editando : true
                                    })
                                }else{
                                    // editarPromocion(posicionPromocion)
                                }
                            }}
                        >
                            Calcular
                        </div>
                    </div>
                

                </>
                
                
                }
               
                
            
            </div>
        )
    }
}












export default Promociones
