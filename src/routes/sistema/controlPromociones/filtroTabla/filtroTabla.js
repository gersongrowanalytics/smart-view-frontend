import React from 'react'
import {Col, Row, Card, Button, Select, Input} from "antd";

// IMPORTAR DATE PICKER
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import DatePicker from "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es);


class FiltroTablaControlPromociones extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sucnombre       : "",
            catsid          : [],
            codigoPromocion : ""
        }
        this.cambioSucursal = this.cambioSucursal.bind(this)
        this.cambioCategoria = this.cambioCategoria.bind(this)
        this.cambioPromocion = this.cambioPromocion.bind(this)
    }
    
    cambioSucursal(e){
        this.setState({
            sucnombre : e.target.value
        })
        // this.props.obtenerListaPromos(this.props.startDate, e.target.value, this.state.catsid, this.props.codigoPromocion)
    }

    cambioCategoria(e){
        this.setState({
            catsid : e
        })
        this.props.obtenerListaPromos(this.props.startDate, this.state.sucnombre, e, this.props.codigoPromocion)
    }

    cambioPromocion(e){
        this.setState({
            codigoPromocion : e.target.value
        })
        // this.props.obtenerListaPromos(this.props.startDate, this.state.sucnombre, this.state.catsid, e.target.value)
    }
    
    render() {
    
        return (
            <Row>
                <Col xl={4} md={4} sm={4} xs={4}>
                    Fecha:<br/>
                    <DatePicker
                        locale="es"
                        selected={this.props.startDate}
                        onChange={date => this.props.obtenerListaPromos(date, )}
                        dateFormat="yyyy/MM"
                        showMonthYearPicker
                        autoComplete={"off"}
                        
                    />
                </Col>
                <Col xl={6} md={6} sm={6} xs={6}>
                    Sucursal:
                    <Input 
                        className="gx-mb-3 gx-w-100" 
                        onChange={(e) => this.cambioSucursal(e)}
                    />
                </Col>
                <Col xl={6} md={6} sm={6} xs={6}>
                    Categoría:
                    <Select
                        mode="multiple"
                        style={{width: '100%'}}
                        onChange={(e) => this.cambioCategoria(e)}
                        className="gx-mb-3 gx-w-100" >
                            {
                                this.props.cats.map((cat) => {
                                    return(
                                        <Select.Option value={cat.catid}>{cat.catnombre}</Select.Option>
                                    )
                                })
                            }
                    </Select>
                </Col>
                <Col xl={6} md={6} sm={6} xs={6}>
                    Codigo de Promoción:
                    <Input 
                        className="gx-mb-3 gx-w-100" 
                        onChange={(e) => this.cambioPromocion(e)}
                    />
                </Col>
                <Col xl={2} md={2} sm={2} xs={2}>
                    <br/>
                    <Button 
                        onClick={() => this.props.obtenerListaPromos(this.props.startDate, this.state.sucnombre, this.state.catsid, this.props.codigoPromocion)}
                        type={"primary"}>
                        Buscar
                    </Button>
                </Col>
            </Row>
                    
        )
    }
}
  
  export default FiltroTablaControlPromociones