import React from "react";
import {Route, Switch} from "react-router-dom";
import Lista from './Lista/index'
import Nuevo from './Nuevo/index'

const Usuarios = ({match}) => (
  <Switch>
    <Route path={`${match.url}/lista`} component={Lista}/>
    <Route path={`${match.url}/nuevo`} component={Nuevo}/>
  </Switch>
);

export default Usuarios;
