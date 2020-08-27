import React from "react";
import {Route, Switch} from "react-router-dom";
// import Sellin from "./SellIn/SellIn";
import Metrics from "./Metrics";
import Dashboard from "./dashboard";
import Layouts from "./Layouts";
import asyncComponent from "../../util/asyncComponent";

const Main = ({match}) => (
  <Switch>
    {/* <Route path={`${match.url}/sell-in`} component={Sellin}/> */}

    <Route path={`${match.url}/dashboard`} component={Dashboard}/>
    <Route path={`${match.url}/metrics`} component={Metrics}/>
    <Route path={`${match.url}/layouts`} component={Layouts}/>
    <Route path={`${match.url}/algolia`} component={asyncComponent(() => import('../algolia'))}/>
  </Switch>
);

export default Main;
