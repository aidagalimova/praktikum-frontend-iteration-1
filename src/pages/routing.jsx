import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MakeOrderPage from "./make-order-page";
import OrderPage from "./order-page";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MakeOrderPage} exact />
        <Route path="/order" component={OrderPage} exact />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default Routing;
