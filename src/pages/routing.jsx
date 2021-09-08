import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import makeOrderPage from "./make-order-page";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={makeOrderPage} exact />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default Routing;
