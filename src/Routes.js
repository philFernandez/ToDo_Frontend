import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import ListToDo from "./pages/ListToDo";
import ToDoApp from "./ToDoApp";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={ToDoApp} />
          <Route path="/ListToDo" component={ListToDo} />
        </Switch>
      </Router>
    );
  }
}
