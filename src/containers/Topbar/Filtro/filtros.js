import React, {Component} from 'react'
import './filtro.css'
import FiltroSucursal from './filtroSucursal'

class Filtros extends Component {
    constructor(){
        super();
        this.state = {
            nombreSucursal : 'Sucursales',
            nombreDia   : 'Día',
            nombreMes   : 'Meses',
            nombreAno   : 'Año',

            animacionMenuDesplegable : true,
            idZonaSeleccionado : 0
        }
        this.seleccionarFile     = this.seleccionarFile.bind(this)
        this.seleccionarSucursal = this.seleccionarSucursal.bind(this)
        this.seleccionarZona     = this.seleccionarZona.bind(this)
    }
    
    seleccionarFile(e) {
        this.refs.selectFiltroSucursal.click();
    }

    componentWillReceiveProps(nextProps){
        if(this.props.sucursales.length > 0 && this.state.nombreSucursal == 'Sucursales' ){
            this.setState({
                nombreSucursal : this.props.sucursales[0].sucnombre
            })
        }

        if(this.props.fechas.dias.length > 0 && this.state.nombreDia == 'Día' ){
            this.setState({
                nombreDia : this.props.fechas.dias[0]
            })
        }

        if(this.props.fechas.meses.length > 0 && this.state.nombreMes == 'Meses' ){
            this.setState({
                nombreMes : this.props.fechas.meses[0]
            })
        }

        if(this.props.fechas.anos.length > 0 && this.state.nombreAno == 'Año' ){
            this.setState({
                nombreAno : this.props.fechas.anos[0]
            })
        }
    }

    seleccionarZona(idZona){
        this.setState({
            idZonaSeleccionado : idZona
        })
    }

    seleccionarSucursal(nombreSucursalSeleccionada, idSucursalSeleccionada){
        this.setState({
            nombreSucursal : nombreSucursalSeleccionada,
            animacionMenuDesplegable : false
        })

        this.props.seleccionarSucursal(idSucursalSeleccionada)

        setTimeout(() => {
            this.setState({
                animacionMenuDesplegable : true
            })
          }, 500);
    }

    render() {
        return (
            <span className="gx-text-black gx-fs-md gx-pointer gx-ml-auto  " >
                {/* <div class="dropdown">
                    <button class="dropbtn">{this.state.nombreSucursal}</button>
                    <div class="dropdown-content">
                        {
                            this.props.sucursales.length > 0
                            ?this.props.sucursales.map((sucursal, posicion) => {
                                return (
                                    <a 
                                        onClick={() => {
                                            this.setState({
                                                nombreSucursal : sucursal.sucnombre
                                            })
                                            this.props.seleccionarSucursal(sucursal.sucid)
                                        }}
                                        key  = {sucursal.sucid} 
                                    >
                                        {
                                            sucursal.sucnombre
                                        }
                                    </a>
                                )
                            })
                            :<a>Sucursales</a>
                        }
                    </div>
                </div> */}

                <FiltroSucursal 
                    sucursalSeleccionada     = {this.state.nombreSucursal}
                    sucursales               = {this.props.sucursales}
                    seleccionarSucursal      = {this.seleccionarSucursal}
                    animacionMenuDesplegable = {this.state.animacionMenuDesplegable}
                    zonas                    = {this.props.zonas}
                    idZonaSeleccionado       = {this.state.idZonaSeleccionado}
                    seleccionarZona          = {this.seleccionarZona}
                />




{/* 
                <div class="dropdown">
                    <button class="dropbtn">{this.state.nombreDia}</button>
                    <div class="dropdown-content">
                        {
                            this.props.fechas.dias.length > 0
                            ?this.props.fechas.dias.map((dia, posicion) => {
                                return (
                                    <a 
                                        onClick={() => {
                                            this.setState({
                                                nombreDia : dia
                                            })
                                            this.props.seleccionarDia(dia)
                                        }}
                                        key  = {dia}
                                    >
                                        {dia}
                                    </a>
                                )
                            })
                            :<a>Día</a>
                        }
                    </div>
                </div> */}

                <div class="dropdown">
                    <button class="dropbtn">{this.state.nombreMes}</button>
                    <div class="dropdown-content">
                        {
                            this.props.fechas.meses.length > 0
                            ?this.props.fechas.meses.map((mes, posicion) => {
                                return (
                                    <a 
                                        onClick={() => {
                                            this.setState({
                                                nombreMes : mes
                                            })
                                            this.props.seleccionarMes(mes)
                                        }}
                                        key  = {mes}
                                    >
                                        {mes}
                                    </a>
                                )
                            })
                            :<a>Meses</a>
                        }
                    </div>
                </div>

                <div class="dropdown">
                    <button class="dropbtn">{this.state.nombreAno}</button>
                    <div class="dropdown-content">
                        {
                            this.props.fechas.anos.length > 0
                            ?this.props.fechas.anos.map((ano, posicion) => {
                                return (
                                    <a 
                                        onClick={() => {
                                            this.setState({
                                                nombreAno : ano
                                            })
                                            this.props.seleccionarAno(ano)
                                        }}
                                        key  = {ano}
                                    >
                                        {ano}
                                    </a>
                                )
                            })
                            :<a>Año</a>
                        }
                    </div>
                </div>
            </span>
        );
    }
}

export default Filtros;
