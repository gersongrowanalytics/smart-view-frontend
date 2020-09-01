
import React, {Component} from 'react'
import './filtro.css'

class Filtros extends Component {
    constructor(){
        super();
        this.state = {

        }
        this.seleccionarFile = this.seleccionarFile.bind(this)
    }
    
    seleccionarFile(e) {
        this.refs.selectFiltroSucursal.click();
    }

    render() {
        return (
            <span className="gx-text-black gx-fs-md gx-pointer gx-ml-auto  " style={{paddingLeft: '10px'}}>
                <select 
                    ref="selectFiltroSucursal"
                    style={{border:'none', background:'transparent', marginLeft:'10px', fontFamily:'Roboto', fontStyle:'normal', fontWeight:'900', fontSize:'14px', lineHeight:'16px'}}
                    onChange = {this.props.seleccionarSucursal}
                    // onMouseEnter = {() => {this.seleccionarFile}}
                    onMouseEnter={this.seleccionarFile}
                    onClick={() => console.log('click')}
                > 
                    {
                        this.props.sucursales.length > 0
                        ?this.props.sucursales.map((sucursal, posicion) => {
                            return (
                                <option 
                                    key      = {sucursal.sucid} 
                                    value    = {sucursal.sucid}
                                >
                                    {sucursal.sucnombre}
                                </option>
                            )
                        })
                        :<option>Sucursales</option>
                    }
                </select>
                <select 
                    style={{border:'none', background:'transparent', marginLeft:'10px', fontFamily:'Roboto', fontStyle:'normal', fontWeight:'900', fontSize:'14px', lineHeight:'16px'}}
                    onChange = {this.props.seleccionarDia}
                >
                    
                    {
                        this.props.fechas.dias.length > 0
                        ?this.props.fechas.dias.map((dia, posicion) => {
                            return (
                                <option 
                                    key={dia} 
                                    value={dia}
                                >
                                    {dia}
                                </option>           
                            )
                        })
                        :<option>Día</option>
                    }
                </select>
                <select 
                    style={{border:'none', background:'transparent', marginLeft:'10px', fontFamily:'Roboto', fontStyle:'normal', fontWeight:'900', fontSize:'14px', lineHeight:'16px'}}
                    onChange = {this.props.seleccionarMes}
                >
                    {
                        this.props.fechas.meses.length > 0
                        ?this.props.fechas.meses.map((mes, posicion) => {
                            return (
                                <option 
                                    key={mes} 
                                    value={mes}
                                >
                                        {mes}
                                </option>           
                            )
                        })
                        :<option>Meses</option>
                    }
                    
                </select>
                <select 
                    style={{border:'none', background:'transparent', marginLeft:'10px', fontFamily:'Roboto', fontStyle:'normal', fontWeight:'900', fontSize:'14px', lineHeight:'16px'}}
                    onChange = {this.props.seleccionarAno}
                >
                    {
                        this.props.fechas.anos.length > 0
                        ?this.props.fechas.anos.map((ano, posicion) => {
                            return (
                                <option 
                                    key={ano} 
                                    value={ano}
                                >
                                    {ano}
                                </option>           
                            )
                        })
                        :<option>Año</option>
                    }
                    {/* <option>Año</option> */}
                </select>
            </span>
        );
    }
}

export default Filtros;
