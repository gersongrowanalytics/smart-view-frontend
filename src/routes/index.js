import React from "react";
import {Route, Switch} from "react-router-dom";
import Sistema from "./sistema/index";



const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}sistema`} component={Sistema}/>
    </Switch>
  </div>
);

export default App;
