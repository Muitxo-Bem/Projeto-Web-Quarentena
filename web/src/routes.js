import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Inicial from './pages/Inicial';
import Login from './pages/Login';
import Signup from './pages/Signup';
import App from './pages/App';

const Routes = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Inicial} />  
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/app" component={App} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;