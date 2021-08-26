
import React from 'react'
import './filtroSucursal.css'
import useSound from 'use-sound';
import boopSfx from 'assets/video/click.mp3';
import logoMenu from 'assets/images/logos/menuTop.png'

const FiltroSucursal = (props) => {
    const [play] = useSound(boopSfx);
    const {

        sucursalSeleccionada, 
        sucursales, 
        seleccionarSucursal, 
        seleccionarGrupo, 
        seleccionarCanal, 
        animacionMenuDesplegable, 
        zonas, 
        idZonaSeleccionado, 
        idSucursalSeleccionado, 
        seleccionarZona,
        cass,
        gsus,
        idCanalSeleccionado,
        idGrupoSeleccionado
    } = props

    return (
    <div id="contMenuDesplegableGrande" >
        <nav>
            <ul id="menu">
                <li><a href="#" id="sucursalTexto">{sucursalSeleccionada}</a>
                    {
                        animacionMenuDesplegable == true
                        ?<div id="mega">
                            <div id="campoDiferencia"></div>
                            <div id="itemsMenuDesplegable">

                                <ul>
                                    <li><a href="#">Región</a></li>
                                    {
                                        cass.length > 0
                                        ?cass.map((cas) => {
                                            return (
                                                idZonaSeleccionado > 0
                                                ?cas.zonas.map((caszona) => {
                                                    return (
                                                        caszona == idZonaSeleccionado
                                                        ?<li onMouseEnter={play} id={idCanalSeleccionado == cas.casid ? "itemSucursalSeleccionado" : "itemSucursal" }>
                                                            <a 
                                                                onClick={() => seleccionarCanal(cas.casnombre, cas.casid)}
                                                                key  = {cas.casid} 
                                                            >
                                                            {
                                                                cas.casnombre
                                                            }
                                                            </a>
                                                        </li>
                                                        :null
                                                    )
                                                })


                                                : idGrupoSeleccionado > 0
                                                    ?cas.grupos.map((casgrupo) => {
                                                        return(
                                                            casgrupo == idGrupoSeleccionado
                                                                ?<li onMouseEnter={play} id={idCanalSeleccionado == cas.casid ? "itemSucursalSeleccionado" : "itemSucursal" }>
                                                                    <a 
                                                                        onClick={() => seleccionarCanal(cas.casnombre, cas.casid)}
                                                                        key  = {cas.casid} 
                                                                    >
                                                                    {
                                                                        cas.casnombre
                                                                    }
                                                                    </a>
                                                                </li>
                                                                :null

                                                        )
                                                    })
                                                    
                                                    :<li onMouseEnter={play} id={idCanalSeleccionado == cas.casid ? "itemSucursalSeleccionado" : "itemSucursal" }>
                                                        <a 
                                                            onClick={() => seleccionarCanal(cas.casnombre, cas.casid)}
                                                            key  = {cas.casid} 
                                                        >
                                                        {
                                                            cas.casnombre
                                                        }
                                                        </a>
                                                    </li>
                                            )
                                        })
                                        :<li><a href="#">Regiones</a></li>
                                    }
                                </ul>

                                <ul>
                                    <li><a href="#">Zona</a></li>
                                    {
                                        zonas.length > 0
                                        ?zonas.map((zona) => {
                                            return (
                                                idCanalSeleccionado > 0
                                                ?idCanalSeleccionado == zona.casid 
                                                    ?<li  
                                                        onMouseEnter={play}
                                                        id={ idZonaSeleccionado == zona.zonid ?"itemZonaSeleccionado" :"itemZona"}>
                                                            <a 
                                                                onClick = {() => seleccionarZona(zona.zonid, zona.zonnombre)}
                                                                key = {zona.zonid}
                                                            >
                                                                {zona.zonnombre}
                                                            </a>
                                                        </li>
                                                    :null
                                                : idGrupoSeleccionado > 0
                                                    ? zona.gsus.map((zonagsu) => {
                                                        return (
                                                            zonagsu == idGrupoSeleccionado
                                                            ?<li  
                                                                onMouseEnter={play}
                                                                id={ idZonaSeleccionado == zona.zonid ?"itemZonaSeleccionado" :"itemZona"}>
                                                                    <a 
                                                                        onClick = {() => seleccionarZona(zona.zonid, zona.zonnombre)}
                                                                        key = {zona.zonid}
                                                                    >
                                                                        {zona.zonnombre}
                                                                    </a>
                                                                </li> 
                                                            :null
                                                        )
                                                    })
                                                    :<li  
                                                        onMouseEnter={play}
                                                        id={ idZonaSeleccionado == zona.zonid ?"itemZonaSeleccionado" :"itemZona"}>
                                                            <a 
                                                                onClick = {() => seleccionarZona(zona.zonid, zona.zonnombre)}
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
                                    <li><a href="#">Grupos</a></li>
                                    {
                                        gsus.length > 0
                                        ?gsus.map((gsu) => {
                                            return (
                                                idZonaSeleccionado > 0
                                                ?gsu.zonas.map((gsuzona) => {
                                                    return(
                                                        gsuzona == idZonaSeleccionado
                                                        ?<li onMouseEnter={play} id={idGrupoSeleccionado == gsu.gsuid ? "itemSucursalSeleccionado" : "itemSucursal" }>
                                                            <a 
                                                                onClick={() => seleccionarGrupo(gsu.gsunombre, gsu.gsuid)}
                                                                key  = {gsu.gsuid} 
                                                            >
                                                            {
                                                                gsu.gsunombre
                                                            }
                                                            </a>
                                                        </li>
                                                        :null
                                                    )
                                                })

                                                :idCanalSeleccionado > 0
                                                    ?gsu.canales.map((gsucanal) => {

                                                        return(
                                                            gsucanal == idCanalSeleccionado
                                                            ?<li onMouseEnter={play} id={idGrupoSeleccionado == gsu.gsuid ? "itemSucursalSeleccionado" : "itemSucursal" }>
                                                                <a 
                                                                    onClick={() => seleccionarGrupo(gsu.gsunombre, gsu.gsuid)}
                                                                    key  = {gsu.gsuid} 
                                                                >
                                                                {
                                                                    gsu.gsunombre
                                                                }
                                                                </a>
                                                            </li>
                                                            :null
                                                        )
                                                        
                                                    })  
                                                    :<li onMouseEnter={play} id={idGrupoSeleccionado == gsu.gsuid ? "itemSucursalSeleccionado" : "itemSucursal" }>
                                                        <a 
                                                            onClick={() => seleccionarGrupo(gsu.gsunombre, gsu.gsuid)}
                                                            key  = {gsu.gsuid} 
                                                        >
                                                        {
                                                            gsu.gsunombre
                                                        }
                                                        </a>
                                                    </li>
                                                
                                                
                                            )
                                        })
                                        :<li><a href="#">Grupos</a></li>
                                    }
                                </ul>

                                <ul>
                                    <li><a href="#">Distribuidora</a></li>
                                    {
                                        sucursales.length > 0
                                        ?sucursales.map((sucursal) => {
                                            return (
                                                idGrupoSeleccionado > 0 && idZonaSeleccionado > 0
                                                ?idZonaSeleccionado == sucursal.zonid && idGrupoSeleccionado == sucursal.gsuid
                                                    ?<li onMouseEnter={play} id={idSucursalSeleccionado == sucursal.sucid ? "itemSucursalSeleccionado" : "itemSucursal" }>
                                                        <a 
                                                            onClick={() => seleccionarSucursal(
                                                                sucursal.sucnombre, 
                                                                sucursal.sucid, 
                                                                sucursal.gsuid, 
                                                                sucursal.zonid, 
                                                                sucursal.casid,
                                                                sucursal.gsunombre,
                                                                sucursal.zonnombre,
                                                                sucursal.casnombre
                                                            )}
                                                            key  = {sucursal.sucid} 
                                                        >
                                                        {
                                                            sucursal.sucnombre
                                                        }
                                                        {
                                                            // " ("+sucursal.sucsoldto+")"
                                                        }
                                                        </a>
                                                    </li>
                                                    :null
                                                :idGrupoSeleccionado > 0
                                                    ?idGrupoSeleccionado == sucursal.gsuid
                                                        ?<li onMouseEnter={play} id={idSucursalSeleccionado == sucursal.sucid ? "itemSucursalSeleccionado" : "itemSucursal" }>
                                                            <a 
                                                                onClick={() => seleccionarSucursal(
                                                                    sucursal.sucnombre, 
                                                                    sucursal.sucid, 
                                                                    sucursal.gsuid, 
                                                                    sucursal.zonid, 
                                                                    sucursal.casid,
                                                                    sucursal.gsunombre,
                                                                    sucursal.zonnombre,
                                                                    sucursal.casnombre
                                                                )}
                                                                key  = {sucursal.sucid} 
                                                            >
                                                            {
                                                                sucursal.sucnombre
                                                            }
                                                            {
                                                                // " ("+sucursal.sucsoldto+")"
                                                            }
                                                            </a>
                                                        </li>
                                                        :null
                                                    :idZonaSeleccionado == sucursal.zonid
                                                        ?<li onMouseEnter={play} id={idSucursalSeleccionado == sucursal.sucid ? "itemSucursalSeleccionado" : "itemSucursal" }>
                                                            <a 
                                                                onClick={() => seleccionarSucursal(
                                                                    sucursal.sucnombre, 
                                                                    sucursal.sucid, 
                                                                    sucursal.gsuid, 
                                                                    sucursal.zonid, 
                                                                    sucursal.casid,
                                                                    sucursal.gsunombre,
                                                                    sucursal.zonnombre,
                                                                    sucursal.casnombre
                                                                )}
                                                                key  = {sucursal.sucid} 
                                                            >
                                                            {
                                                                sucursal.sucnombre
                                                            }
                                                            {
                                                                // " ("+sucursal.sucsoldto+")"
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
                                    // src={require('assets/images/fondomenudesplegable.png')} alt=''  id="fondomenudesplegable" />
                                    src={logoMenu} alt=''  id="fondomenudesplegable" />
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
