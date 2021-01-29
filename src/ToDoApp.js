import React, { Component } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import "./ToDoApp.css";
import ToDoService from "./service/ToDoService";

class ToDoApp extends Component {
  emptyTodo = {
    description: "",
    startDate: "",
    endDate: "",
    priority: "",
  };
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: this.emptyTodo,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    console.log(evt);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState(
      {
        newTodo: {
          description: evt.target[0].value,
          startDate: evt.target[1].value,
          endDate: evt.target[2].value,
          priority: evt.target[3].value,
        },
      },
      () => {
        ToDoService.postTodo(this.state.newTodo).then((res) =>
          this.setState({ newTodo: res })
        );
        Array.from(evt.target).map((e) => (e.value = ""));
      }
    );
  }

  showAllTodo() {
    ToDoService.getTodos().then((res) => {
      this.setState({ todos: res.data });
    });
  }
  render() {
    // const item = this.state.newTodo;
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
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="description" className="label">
                What do you need ToDo?
              </Label>
              <Input
                type="text"
                id="description"
                name="description"
                // value={item.description || ""}
                // onChange={this.handleChange}
                autoComplete="description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="startDate" className="label">
                When do you need to start?
              </Label>
              <Input type="text" id="startDate" />
            </FormGroup>
            <FormGroup>
              <Label for="endDate" className="label">
                When do you need to finish?
              </Label>
              <Input type="text" id="endDate" />
            </FormGroup>
            <FormGroup>
              <Label for="priority" className="label">
                What is the priority?
              </Label>
              <select className="form-control" id="priority">
                <option value="0">Low</option>
                <option value="1">Medium</option>
                <option value="2">High</option>
              </select>
            </FormGroup>
            <FormGroup>
              <Button style={{ marginRight: "1rem" }}>Save ToDo</Button>
            </FormGroup>
          </Form>
          <Button onClick={() => this.showAllTodo()}>Show All</Button>
        </Container>
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
