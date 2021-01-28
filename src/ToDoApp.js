import React, { Component } from "react";
import { Button, Form, Input, Label } from "reactstrap";
import "./ToDoApp.css";
import AllToDo from "./AllToDo";

class ToDoApp extends Component {
  render() {
    return (
      <div>
        <hr />
        <div className="header container-fluid" align="center">
          <h1 className="display-1">ToDo App</h1>
          <h4>Powered by Java and Spring on the backend</h4>
          <h4>JavaScript and React on the frontend</h4>
          <h6>Brought to you by Phil Fernandez by way of HCL America</h6>
        </div>
        <hr />
        <div className="container">
          <Form>
            <Label for="newTodo" className="label">
              Task Name
            </Label>
            <Input type="text" id="newTodo" />
            <br />
            <div>
              <Button>Save ToDo</Button>
            </div>
            <div>
              <Button>List Saved</Button>
            </div>
          </Form>
        </div>
        <br />
        <br />
        <br />
        <div>
          <AllToDo />
        </div>
      </div>
    );
  }
}

export default ToDoApp;
