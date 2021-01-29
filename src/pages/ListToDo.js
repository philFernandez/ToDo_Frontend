import React, { Component } from "react";
import { Container } from "reactstrap";
import ToDoService from "../service/ToDoService";

class ListToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.getList();
  }
  getList() {
    ToDoService.getTodos().then((response) =>
      this.setState({ todos: response.data }, () => console.log(this.state))
    );
  }
  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

export default ListToDo;
