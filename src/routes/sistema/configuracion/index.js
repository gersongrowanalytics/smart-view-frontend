import React from "react";
import {Route, Switch} from "react-router-dom";
import Usuarios from './usuarios/index'

const Configuracion = ({match}) => (
  <Switch>
    <Route path={`${match.url}/usuarios`} component={Usuarios}/>
  </Switch>
);

export default Configuracion;
