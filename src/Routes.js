import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import ListToDo from "./pages/ListToDo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ToDoApp from "./ToDoApp";
import history from "./history";
import PrivateRoute from "./PrivateRoute";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" exact component={ToDoApp} />
          <PrivateRoute path="/ListToDo" component={ListToDo} />
        </Switch>
      </Router>
    );
  }
}
