import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import ListToDo from "./pages/ListToDo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ToDoApp from "./ToDoApp";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={ToDoApp} />
          <Route path="/ListToDo" component={ListToDo} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    );
  }
}
