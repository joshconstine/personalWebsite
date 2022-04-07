import React, { Component, Fragment } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/home" component={Home} />
        <Route path="/" component={Home} />
        <Redirect to="/home" />
      </div>
    );
  }
}

/**
 * CONTAINER
 */

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default Routes;
