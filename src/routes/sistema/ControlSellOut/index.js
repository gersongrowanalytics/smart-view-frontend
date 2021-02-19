import React from "react";
import {Route, Switch} from "react-router-dom";
import ControlSellOut from "./ControlSellOut"
import ControlSellOutCalendario from "./Calendario/Calendario"

const ControlSellOutRoutes = ({match}) => (
  <Switch>
    <Route path={`${match.url}/administracion`} component={ControlSellOut}/>
    <Route path={`${match.url}/calendario`} component={ControlSellOutCalendario}/>
  </Switch>
);

export default ControlSellOutRoutes;
