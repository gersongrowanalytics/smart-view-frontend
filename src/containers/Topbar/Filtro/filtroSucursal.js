import React from 'react'
import './filtroSucursal.css'

const FiltroSucursal = (props) => {

    const {sucursalSeleccionada, sucursales, seleccionarSucursal, animacionMenuDesplegable, zonas, idZonaSeleccionado, seleccionarZona} = props



    return (
    <div id="contMenuDesplegableGrande">
        <nav>
            <ul id="menu">
                <li><a href="#" id="sucursalTexto">{sucursalSeleccionada}</a>
                    {
                        animacionMenuDesplegable == true
                        ?<div id="mega">
                            <div id="campoDiferencia"></div>
                            <div id="itemsMenuDesplegable">
                                <ul>
                                    <li><a href="#">Zona</a></li>
                                    {
                                        zonas.length > 0
                                        ?zonas.map((zona, posicion) => {
                                            return (
                                                <li  id={ idZonaSeleccionado == zona.zonid ?"itemZonaSeleccionado" :"itemZona"}>
                                                    <a 
                                                        onClick = {() => seleccionarZona(zona.zonid)}
                                                        key = {zona.zonid}
                                                    >
                                                        {zona.zonnombre}
                                                    </a>
                                                </li>
                                            )
                                        })
                                        :null
                                    }
                                    {/* <li><a href="#">Windows Desktop Computers</a></li>
                                    <li><a href="#">iMacs</a></li>
                                    <li><a href="#">Laptops &amp; Macbooks</a></li>
                                    <li><a href="#">Monitors</a></li>
                                    <li><a href="#">Software &amp; Accessories</a></li> */}
                                </ul>
                                <ul>
                                    <li><a href="#">Distribuidora</a></li>
                                    {
                                        sucursales.length > 0
                                        ?sucursales.map((sucursal, posicion) => {
                                            return (
                                                idZonaSeleccionado == sucursal.zonid
                                                ?<li>
                                                    <a 
                                                        onClick={() => seleccionarSucursal(sucursal.sucnombre, sucursal.sucid)}
                                                        key  = {sucursal.sucid} 
                                                    >
                                                    {
                                                        sucursal.sucnombre
                                                    }
                                                    </a>
                                                </li>
                                                :null
                                            )
                                        })
                                        :<li><a href="#">Sucursales</a></li>
                                    }
                                </ul>
                                <img 
                                    src={require('assets/images/fondomenudesplegable.png')} alt=''  id="fondomenudesplegable" />
                            </div>
                        </div>
                        :null
                    }
                </li>
            </ul>

        </nav>
    </div>
    );
}

export default FiltroSucursal;
