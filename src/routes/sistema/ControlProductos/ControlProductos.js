import React, {useEffect, useState} from 'react'
import {Col, Row, Card, Button, Select, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
    ObtenerProductosReducer,
    AsignarImagenProductoReducer
} from 'appRedux/actions/ControlProductos/ControlProductos'
import 'styles/Sistema/ControlProductos/ControlProductos.css'
import IconoPendiente from 'assets/images/ControlProductos/pendiente.png'
import IconoConfirmado from 'assets/images/ControlProductos/confirmado.png'
import IconoCalendario from 'assets/images/ControlProductos/calendario.png'
import IconoSeleccionarImagen from 'assets/images/ControlProductos/seleccionarImagen.png'
import FileImgProducto from '../../../components/Sistema/ControlProductos/FileImgProducto';
import {seleccionarCargaArchivosReducer} from "appRedux/actions/CargaArchivos";
import {seleccionarVistaPromocionReducer} from 'appRedux/actions/Promociones'
import {seleccionarVistaVentasReducer} from 'appRedux/actions/VentasTpr'

const ControlProductos = () => {

    const {
        cargando_productos_ControlProductos,
        prosSinImagenes_ControlProductos,
        prosConImagenes_ControlProductos,
    } = useSelector(({controlProductos}) => controlProductos);

    const dispatch = useDispatch();

    const {cargaArchivosSeleccionado} = useSelector(({cargaArchivos}) => cargaArchivos);
    const {vistaPromocionSeleccionado} = useSelector(({promociones}) => promociones);
    const {vistaVentasSeleccionado}= useSelector(({ventasTpr}) => ventasTpr);
    
    useEffect(() => {
        
        if(cargaArchivosSeleccionado == true){
            dispatch(seleccionarCargaArchivosReducer(false))
        }
    
        if(vistaPromocionSeleccionado == true){
            dispatch(seleccionarVistaPromocionReducer(false))
        }
    
        if(vistaVentasSeleccionado == true){
            dispatch(seleccionarVistaVentasReducer(false))
        }

        dispatch(ObtenerProductosReducer())

    }, [])

    const [seleccionarPendientes, setSeleccionarPendientes] = useState(true)
    const [txtBuscarSku, setTxtBuscarSku] = useState("")

    const AsignarImagen = async (sku, imagen) => {
        // console.log(sku)
        // console.log(imagen)
        return await dispatch(AsignarImagenProductoReducer(sku, imagen))
    }

    return (
        <div>

            <Row style={{marginBottom:'30px'}}>
                {/* <Col xl={6}> */}
                    {/* <div className="Contenedor-Filtro-Mes">

                    </div> */}
                {/* </Col> */}

                <Col xl={18}>
                    <div className="Contenedor-Buscador-Producto">
                        <input 
                            onChange={(e) => setTxtBuscarSku(e.target.value)}
                            placeholder="Buscar SKU" id="Input-Buscar-Producto-Control-Productos" />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xl={24}>
                    <div id="Contenedor-Tab-Control-Productos">
                        <div 
                            className={seleccionarPendientes == true ? "Tab-Pendiente-Control-Productos Tab-Seleccionado-Control-Productos" :"Tab-Pendiente-Control-Productos"}
                            onClick={() => setSeleccionarPendientes(true)}
                        >
                            <img src={IconoPendiente} className="Icono-Tab-Control-Productos" />
                            Pendiente
                        </div>

                        <div 
                            className={seleccionarPendientes == false ? "Tab-Confirmado-Control-Productos Tab-Seleccionado-Control-Productos" :"Tab-Confirmado-Control-Productos"}
                            onClick={() => setSeleccionarPendientes(false)}
                        >
                            <img src={IconoConfirmado} className="Icono-Tab-Control-Productos" />
                            Confirmado
                        </div>
                    </div>
                </Col>
            </Row>

            <table className="tabla tbl-st6">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Sku</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Fecha de Edición</th>
                        <th>Imagen de Producto</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        seleccionarPendientes == true
                        ?prosSinImagenes_ControlProductos.map((productos, posicion) => {

                            const newDate = new Date(productos.updated_at)
                            const dia = newDate.getDate();
                            let mes = newDate.getMonth() + 1;
                            const anio = newDate.getFullYear();

                            if(mes == 1){
                                mes = "Enero"
                            }else if(mes == 2){
                                mes = "Febrero"
                            }else if(mes == 3){
                                mes = "Marzo"
                            }else if(mes == 4){
                                mes = "Abril"
                            }else if(mes == 5){
                                mes = "Mayo"
                            }else if(mes == 6){
                                mes = "Junio"
                            }else if(mes == 7){
                                mes = "Julio"
                            }else if(mes == 8){
                                mes = "Agosto"
                            }else if(mes == 9){
                                mes = "Setiembre"
                            }else if(mes == 10){
                                mes = "Octubre"
                            }else if(mes == 11){
                                mes = "Noviembre"
                            }else if(mes == 12){
                                mes = "Diciembre"
                            }

                            return (
                                productos.prosku.includes(txtBuscarSku)
                                ?<tr style={{alignItems: "center"}} onClick={() => console.log(prosConImagenes_ControlProductos)}>
                                    <td>{posicion+1}</td>
                                    <td>{productos.prosku}</td>
                                    <td>{productos.pronombre}</td>
                                    <td>{productos.catnombre}</td>
                                    {/* <td>{productos.updated_at}</td> */}
                                    <td>{dia} de {mes} del {anio}</td>
                                    <td>
                                        <FileImgProducto 
                                            productos = {productos}
                                            AsignarImagen = {(imagen) => AsignarImagen(productos.prosku, imagen)}
                                        />
                                        {/* <img src={productos.proimagen} className="Imagen-Producto-Control-Productos" /> */}
                                    </td>
                                </tr>
                                :null
                            )
                        })
                        
                        :prosConImagenes_ControlProductos.map((productos, posicion) => {

                            const newDate = new Date(productos.updated_at)
                            const dia = newDate.getDate();
                            let mes = newDate.getMonth() + 1;
                            const anio = newDate.getFullYear();

                            if(mes == 1){
                                mes = "Enero"
                            }else if(mes == 2){
                                mes = "Febrero"
                            }else if(mes == 3){
                                mes = "Marzo"
                            }else if(mes == 4){
                                mes = "Abril"
                            }else if(mes == 5){
                                mes = "Mayo"
                            }else if(mes == 6){
                                mes = "Junio"
                            }else if(mes == 7){
                                mes = "Julio"
                            }else if(mes == 8){
                                mes = "Agosto"
                            }else if(mes == 9){
                                mes = "Setiembre"
                            }else if(mes == 10){
                                mes = "Octubre"
                            }else if(mes == 11){
                                mes = "Noviembre"
                            }else if(mes == 12){
                                mes = "Diciembre"
                            }

                            return (
                                productos.prosku
                                ?productos.prosku.includes(txtBuscarSku)
                                    ?<tr style={{alignItems: "center"}}>
                                        <td>{posicion+1}</td>
                                        <td>{productos.prosku}</td>
                                        <td>{productos.pronombre}</td>
                                        <td>{productos.catnombre}</td>
                                        {/* <td>{"productos.catnombre"}</td> */}
                                        <td>{dia} de {mes} del {anio}</td>
                                        <td>
                                            <FileImgProducto 
                                                productos = {productos}
                                                imagen    = {productos.proimagen}
                                                AsignarImagen = {(imagen) => AsignarImagen(productos.prosku, imagen)}
                                            />
                                            {/* <img src={productos.proimagen} className="Imagen-Producto-Control-Productos" /> */}
                                        </td>
                                    </tr>
                                :null
                                :null
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ControlProductos
