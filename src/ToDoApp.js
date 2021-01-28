import React, { Component } from "react";
import { Button, Form, Input, Label } from "reactstrap";
import "./ToDoApp.css";
import AllToDo from "./AllToDo";
import ToDoService from "./service/ToDoService";

class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  showAllTodo() {
    ToDoService.getTodos().then((res) => {
      this.setState({ todos: res.data });
    });
    console.log(this.state.todos);
  }
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
              <Button onClick={() => this.showAllTodo()}>Show All</Button>
            </div>
          </Form>
        </div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>ToDo</th>
                <th>Start</th>
                <th>End</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.startDate}</td>
                  <td>{todo.endDate}</td>
                  <td>{todo.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ToDoApp;
