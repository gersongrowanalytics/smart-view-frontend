import React from 'react'

const filtros = (props) => {
    
    const {
        sucursales, 
        fechas, 
        seleccionarSucursal,
        seleccionarDia,
        seleccionarMes,
        seleccionarAno
    } = props    

    return (
        <span className="gx-text-black gx-fs-md gx-pointer gx-ml-auto  " style={{paddingLeft: '10px'}}>
            <select 
                style={{border:'none', background:'transparent', marginLeft:'10px'}}
                onChange = {seleccionarSucursal}
            > 
                {
                    sucursales.length > 0
                    ?sucursales.map((sucursal, posicion) => {
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
                style={{border:'none', background:'transparent', marginLeft:'10px'}}
                onChange = {seleccionarDia}
            >
                
                {
                    fechas.dias.length > 0
                    ?fechas.dias.map((dia, posicion) => {
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
                style={{border:'none', background:'transparent', marginLeft:'10px'}}
                onChange = {seleccionarMes}
            >
                {
                    fechas.meses.length > 0
                    ?fechas.meses.map((mes, posicion) => {
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
                style={{border:'none', background:'transparent', marginLeft:'10px'}}
                onChange = {seleccionarAno}
            >
                {
                    fechas.anos.length > 0
                    ?fechas.anos.map((ano, posicion) => {
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
    )
}

export default filtros
