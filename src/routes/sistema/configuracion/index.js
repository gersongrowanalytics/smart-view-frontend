import React from "react";
import {Route, Switch} from "react-router-dom";
import Usuarios from './usuarios/index'
import Rebate from './rebate/index'
import TiposUsuarios from './tiposUsuarios/index'
import PermisosTipoUsuario from './tiposUsuarios/permisos/index'

const Configuracion = ({match}) => (
  <Switch>
    <Route path={`${match.url}/usuarios`} component={Usuarios}/>
    <Route path={`${match.url}/rebate`} component={Rebate}/>
    <Route path={`${match.url}/tiposUsuarios`} component={TiposUsuarios}/>
    <Route path={`${match.url}/permisos`} component={PermisosTipoUsuario}/>
  </Switch>
);

export default Configuracion;
