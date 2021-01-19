import React, {Component} from 'react'
import './filtro.css'
import FiltroSucursal from './filtroSucursal'

class Filtros extends Component {
    constructor(){
        super();
        this.state = {
            nombreSucursal : 'Sucursales',
            nombreGrupo : 'Grupos',
            nombreCanal : 'Canales',
            nombreDia   : 'Día',
            nombreMes   : 'Meses',
            nombreAno   : 'Año',

            animacionMenuDesplegable : true,
            idZonaSeleccionado : 0,
            idSucursalSeleccionado : 0,
            idCanalSeleccionado : 0,
            idGrupoSeleccionado : 0
        }
        this.seleccionarFile     = this.seleccionarFile.bind(this)
        this.seleccionarSucursal = this.seleccionarSucursal.bind(this)
        this.seleccionarZona     = this.seleccionarZona.bind(this)
        this.seleccionarCanal     = this.seleccionarCanal.bind(this)
        this.seleccionarGrupo     = this.seleccionarGrupo.bind(this)
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

    seleccionarZona(idZona, nombreZona){
        if(this.state.idZonaSeleccionado == idZona){
            this.setState({
                idZonaSeleccionado  : 0,
                nombreSucursal      : nombreZona,
            })
            // this.props.seleccionarZona(0)
        }else{
            this.setState({
                idZonaSeleccionado  : idZona,
                nombreSucursal      : nombreZona,
            })
            this.props.seleccionarZona(idZona)
        }
    }

    seleccionarSucursal(nombreSucursalSeleccionada, idSucursalSeleccionada){
        this.setState({
            nombreSucursal : nombreSucursalSeleccionada,
            animacionMenuDesplegable : false,
            idSucursalSeleccionado : idSucursalSeleccionada
        })

        this.props.seleccionarSucursal(idSucursalSeleccionada)

        setTimeout(() => {
            this.setState({
                animacionMenuDesplegable : true
            })
          }, 500);
    }

    seleccionarCanal(nombreCanal, idCanalSeleccionado){
        if(this.state.idCanalSeleccionado == idCanalSeleccionado){
            this.setState({
                nombreCanal : nombreCanal,
                idCanalSeleccionado : 0
            })
        }else{
            this.setState({
                nombreCanal : nombreCanal,
                idCanalSeleccionado : idCanalSeleccionado
            })
        }
        
    }

    seleccionarGrupo(nombreGrupo, idGrupoSeleccionado){
        if(this.state.idGrupoSeleccionado == idGrupoSeleccionado){
            this.setState({
                nombreGrupo : nombreGrupo,
                idGrupoSeleccionado : 0
            })
        }else{
            this.setState({
                nombreGrupo : nombreGrupo,
                idGrupoSeleccionado : idGrupoSeleccionado
            })
        }
    }

    render() {
        return (
            <span className="gx-text-black gx-fs-md gx-pointer gx-ml-auto  " >

                <FiltroSucursal 
                    sucursalSeleccionada     = {this.state.nombreSucursal}
                    sucursales               = {this.props.sucursales}
                    seleccionarSucursal      = {this.seleccionarSucursal}
                    seleccionarGrupo         = {this.seleccionarGrupo}
                    seleccionarCanal         = {this.seleccionarCanal}
                    animacionMenuDesplegable = {this.state.animacionMenuDesplegable}
                    zonas                    = {this.props.zonas}
                    cass                     = {this.props.cass}
                    gsus                     = {this.props.gsus}
                    idZonaSeleccionado       = {this.state.idZonaSeleccionado}
                    seleccionarZona          = {this.seleccionarZona}
                    idSucursalSeleccionado   = {this.state.idSucursalSeleccionado}
                    idCanalSeleccionado      = {this.state.idCanalSeleccionado}
                    idGrupoSeleccionado      = {this.state.idGrupoSeleccionado}
                />

                <div class="dropdown">
                    <div id="tituloFiltro">Mes</div>
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
