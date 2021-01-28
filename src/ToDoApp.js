import React, { Component } from "react";
import { Button, Form, Input, Label } from "reactstrap";
import "./ToDoApp.css";

class ToDoApp extends Component {
  render() {
    return (
      <div>
        <hr />
        <div className="header" align="center">
          <h1>ToDo App</h1>
          <h4>Backend Powered by Spring Rest Endpoint</h4>
          <h4>Frontend Powerd by ReactJS</h4>
        </div>
        <hr />
        <div className="container">
          <Form>
            <Label for="newTodo" className="label">
              Task Name
            </Label>
            <Input type="text" id="newTodo" />
          </Form>
        </div>
      </div>
    );
  }
}

class Fred extends Component {
  render() {
    return <h2>I am Fred</h2>;
  }
}

export default ToDoApp;
