import React from "react";
import {Route, Switch} from "react-router-dom";
import Usuarios from './usuarios/index'
import Rebate from './rebate/index'

const Configuracion = ({match}) => (
  <Switch>
    <Route path={`${match.url}/usuarios`} component={Usuarios}/>
    <Route path={`${match.url}/rebate`} component={Rebate}/>
  </Switch>
);

export default Configuracion;
