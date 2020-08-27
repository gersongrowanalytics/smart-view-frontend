import React from "react";
import {Route, Switch} from "react-router-dom";
import Sellin from "./sellIn/";
import Promociones from "./promociones"
import CargaArchivoPromociones from "./cargaArchivos"
import Tutorial from "./tutorial"

const Sistema = ({match}) => (
  <Switch>
    <Route path={`${match.url}/ventas`} component={Sellin}/>
    <Route path={`${match.url}/promociones`} component={Promociones}/>
    <Route path={`${match.url}/cargaArchivos/promociones`} component={CargaArchivoPromociones}/>
    <Route path={`${match.url}/tutorial`} component={Tutorial}/>
  </Switch>
);

export default Sistema;
