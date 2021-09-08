import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import OrderPage from "./order-page";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={OrderPage} exact />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default Routing;
