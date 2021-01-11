import React from "react";
import {Route, Switch} from "react-router-dom";
import Sellin from "./sellIn/";
import Promociones from "./promociones"
import CargaArchivoPromociones from "./cargaArchivos"
import controlCargaArchivos from "./controlCargaArchivos/controlCargaArchivos"
import controlVentas from "./controlVentas/controlVentas"
import Tutorial from "./tutorial"
import Configuracion from "./configuracion/index"
import ControlPromociones from "./controlPromociones/index"
import ControlSellOut from "./ControlSellOut/ControlSellOut"

const Sistema = ({match}) => (
  <Switch>
    <Route path={`${match.url}/ventas`} component={Sellin}/>
    <Route path={`${match.url}/promociones`} component={Promociones}/>
    <Route path={`${match.url}/cargaArchivos/promociones`} component={CargaArchivoPromociones}/>
    <Route path={`${match.url}/cargaArchivos/control`} component={controlCargaArchivos}/>
    <Route path={`${match.url}/controlVentas`} component={controlVentas}/>
    <Route path={`${match.url}/control/promociones`} component={ControlPromociones}/>
    <Route path={`${match.url}/tutorial`} component={Tutorial}/>
    <Route path={`${match.url}/configuracion`} component={Configuracion}/>
    <Route path={`${match.url}/control/sellout`} component={ControlSellOut}/>
  </Switch>
);

export default Sistema;
