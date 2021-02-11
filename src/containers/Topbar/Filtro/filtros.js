import React, {Component} from 'react'
import './filtro.css'
import FiltroSucursal from './filtroSucursal'

class Filtros extends Component {
    constructor(){
        super();
        this.state = {
            nombreSucursal : 'Sucursales',
            nombreZona  : 'Zonas',
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

            // this.seleccionarSucursal(
            //     this.props.sucursales[0].sucnombre, 
            //     this.props.sucursales[0].sucid,
            //     this.state.idGrupoSeleccionado,
            //     this.state.idZonaSeleccionado,
            //     this.state.idCanalSeleccionado,

            // )

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
            
            idZona = 0

            this.setState({
                idZonaSeleccionado : 0,
                nombreSucursal     : nombreZona,
                nombreZona         : nombreZona,
                idSucursalSeleccionado : 0
            })

            if(this.state.idGrupoSeleccionado != 0 && this.state.idCanalSeleccionado != 0 ){
                this.setState({
                    nombreSucursal : this.state.nombreCanal+" - "+this.state.nombreGrupo
                })
            }else if(this.state.idGrupoSeleccionado != 0){
                this.setState({
                    nombreSucursal : this.state.nombreGrupo
                })
            }else if(this.state.idCanalSeleccionado != 0){
                this.setState({
                    nombreSucursal : this.state.nombreCanal
                })
            }else{
                this.setState({
                    nombreSucursal :"Sucursales"
                })
            }
        }else{
            this.setState({
                idZonaSeleccionado : idZona,
                idSucursalSeleccionado : 0,
                nombreZona         : nombreZona,
            })

            if(this.state.idGrupoSeleccionado != 0 && this.state.idCanalSeleccionado != 0 ){
                this.setState({
                    nombreSucursal : this.state.nombreCanal+" - "+nombreZona+" - "+this.state.nombreGrupo
                })
            }else if(this.state.idGrupoSeleccionado != 0){
                this.setState({
                    nombreSucursal : nombreZona+" - "+this.state.nombreGrupo
                })
            }else if(this.state.idCanalSeleccionado != 0){
                this.setState({
                    nombreSucursal : this.state.nombreCanal+" - "+nombreZona
                })
            }else{
                this.setState({
                    nombreSucursal : nombreZona
                })
            }
        }

        if(idZona == 0 && this.state.idGrupoSeleccionado == 0 && this.state.idCanalSeleccionado == 0){
            this.setState({
                nombreSucursal : this.props.sucursales[0].sucnombre
            })

            this.seleccionarSucursal(
                this.props.sucursales[0].sucnombre, 
                this.props.sucursales[0].sucid,
                0,
                0,
                0,

            )
        }else{
            this.props.seleccionarZona(idZona, this.state.idGrupoSeleccionado, this.state.idCanalSeleccionado)
        }
    }

    seleccionarSucursal(
        nombreSucursalSeleccionada, 
        idSucursalSeleccionada,
        idGrupo,
        idZona,
        idCanal,
        nombreGrupo,
        nombreZona,
        nombreCanal
    ){
        this.setState({
            nombreSucursal : nombreSucursalSeleccionada,
            animacionMenuDesplegable : false,
            idSucursalSeleccionado : idSucursalSeleccionada,
            idCanalSeleccionado : idCanal,
            idGrupoSeleccionado : idGrupo,
            idZonaSeleccionado  : idZona,
            nombreZona  : nombreZona,
            nombreGrupo : nombreGrupo,
            nombreCanal : nombreCanal
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
            idCanalSeleccionado = 0
            this.setState({
                nombreCanal : nombreCanal,
                idCanalSeleccionado : 0,
                idSucursalSeleccionado : 0
            })

            if(this.state.idZonaSeleccionado != 0 && this.state.idGrupoSeleccionado != 0 ){
                this.setState({
                    nombreSucursal : this.state.nombreZona+" - "+this.state.nombreGrupo
                })
            }else if(this.state.idZonaSeleccionado != 0){
                this.setState({
                    nombreSucursal : this.state.nombreZona
                })
            }else if(this.state.idGrupoSeleccionado != 0){
                this.setState({
                    nombreSucursal : this.state.nombreGrupo
                })
            }else{
                this.setState({
                    nombreSucursal :"Sucursales"
                })
            }

        }else{
            this.setState({
                nombreCanal : nombreCanal,
                idCanalSeleccionado : idCanalSeleccionado,
                idSucursalSeleccionado : 0
            })

            if(this.state.idZonaSeleccionado != 0 && this.state.idGrupoSeleccionado != 0 ){
                this.setState({
                    nombreSucursal : nombreCanal+" - "+this.state.nombreZona+" - "+this.state.nombreGrupo
                })
            }else if(this.state.idZonaSeleccionado != 0){
                this.setState({
                    nombreSucursal : nombreCanal+" - "+this.state.nombreZona
                })
            }else if(this.state.idGrupoSeleccionado != 0){
                this.setState({
                    nombreSucursal : nombreCanal+" - "+this.state.nombreGrupo
                })
            }else{
                this.setState({
                    nombreSucursal : nombreCanal
                })
            }
        }

        if(this.state.idZonaSeleccionado == 0 && this.state.idGrupoSeleccionado == 0 && idCanalSeleccionado == 0){
            this.setState({
                nombreSucursal : this.props.sucursales[0].sucnombre
            })

            this.seleccionarSucursal(
                this.props.sucursales[0].sucnombre, 
                this.props.sucursales[0].sucid,
                0,
                0,
                0,

            )
        }else{
            this.props.seleccionarZona(this.state.idZonaSeleccionado, this.state.idGrupoSeleccionado, idCanalSeleccionado)
        }
        
    }

    seleccionarGrupo(nombreGrupo, idGrupoSeleccionado){
        if(this.state.idGrupoSeleccionado == idGrupoSeleccionado){
            idGrupoSeleccionado = 0
            this.setState({
                nombreGrupo : nombreGrupo,
                idGrupoSeleccionado : 0,
                idSucursalSeleccionado : 0
            })

            if(this.state.idZonaSeleccionado != 0 && this.state.idCanalSeleccionado != 0 ){
                this.setState({
                    nombreSucursal : this.state.nombreCanal+" - "+this.state.nombreZona
                })
            }else if(this.state.idZonaSeleccionado != 0){
                this.setState({
                    nombreSucursal : this.state.nombreZona
                })
            }else if(this.state.idCanalSeleccionado != 0){
                this.setState({
                    nombreSucursal : this.state.nombreCanal
                })
            }else{
                this.setState({
                    nombreSucursal :"Sucursales"
                })
            }

        }else{
            this.setState({
                nombreGrupo : nombreGrupo,
                idGrupoSeleccionado : idGrupoSeleccionado,
                idSucursalSeleccionado : 0
            })

            if(this.state.idZonaSeleccionado != 0 && this.state.idCanalSeleccionado != 0 ){
                this.setState({
                    nombreSucursal : this.state.nombreCanal+" - "+this.state.nombreZona+" - "+nombreGrupo
                })
            }else if(this.state.idZonaSeleccionado != 0){
                this.setState({
                    nombreSucursal : this.state.nombreZona+" - "+nombreGrupo
                })
            }else if(this.state.idCanalSeleccionado != 0){
                this.setState({
                    nombreSucursal : this.state.nombreCanal+" - "+nombreGrupo
                })
            }else{
                this.setState({
                    nombreSucursal :nombreGrupo
                })
            }
        }

        if(this.state.idZonaSeleccionado == 0 && idGrupoSeleccionado == 0 && this.state.idCanalSeleccionado == 0){
            this.setState({
                nombreSucursal : this.props.sucursales[0].sucnombre
            })

            this.seleccionarSucursal(
                this.props.sucursales[0].sucnombre, 
                this.props.sucursales[0].sucid,
                0,
                0,
                0,

            )
        }else{
            this.props.seleccionarZona(this.state.idZonaSeleccionado, idGrupoSeleccionado, this.state.idCanalSeleccionado)
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
