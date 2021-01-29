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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // make sure evt.target[..].value's arent empty
  /** 
  handleSubmit(evt) {
    evt.preventDefault();
    const userInputs = Array.from(evt.target).map((e) => e.value);
    console.log(userInputs);
    const userInput = {
      description: userInputs[0],
      startDate: userInputs[1],
      endDate: userInputs[2],
      priority: userInputs[3],
    };
    ToDoService.postTodo(userInput).then((res) =>
      this.setState({ newTodo: res })
    );
    Array.from(evt.target).map((e) => (e.value = ""));
  }
  */
  handleSubmit(event) {
    // prevent GET request from button press
    event.preventDefault();
    // Call post method in ToDoService
    // passing in object literal with the form
    // inputs as the values to the object.
    // The HTMLCollection is converted to an array,
    // then each element mapped to only its own "value" property.
    // Slice off the last element because it is a form button
    // and has no value property (not any useful to me anyway).
    // Map the resulting values array to an array of arrays
    // each containing [key, value] pairs. These are then converted
    // into the object literal that ToDoService.postTodo is expecting
    ToDoService.postTodo(
      Object.fromEntries(
        Array.from(event.target)
          .map((val) => val.value)
          .slice(0, 4)
          .map((values, index) => [
            Object.keys({
              description: "",
              startDate: "",
              endDate: "",
              priority: "",
            })[index],
            values,
          ])
      )
    ).then((response) => this.setState({ newTodo: response }));
    // clear text from input boxes
    Array.from(event.target).map((e) => (e.value = ""));
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
              <Input type="text" id="description" name="description" required />
            </FormGroup>
            <FormGroup>
              <Label for="startDate" className="label">
                When do you need to start?
              </Label>
              <Input type="text" id="startDate" required />
            </FormGroup>
            <FormGroup>
              <Label for="endDate" className="label">
                When do you need to finish?
              </Label>
              <Input type="text" id="endDate" required />
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
