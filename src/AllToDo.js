import React, { Component } from "react";
import ToDoService from "./service/ToDoService";

class AllToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    ToDoService.getTodos().then((res) => {
      this.setState({ todos: res.data });
    });
  }

  render() {
    return (
      <ul>
        {this.state.todos.map((todo) => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ul>
    );
  }
}

export default AllToDo;
