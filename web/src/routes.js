import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import Inicial from './pages/Inicial';
import Login from './pages/Login';
import Signup from './pages/Signup';
import App from './pages/App';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Inicial} />  
      <Route exact path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/app" component={App} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;