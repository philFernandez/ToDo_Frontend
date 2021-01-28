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
    console.log(this.state.todos);
    return (
      <div className="container">
        <h1>All ToDo</h1>
        <hr />
        <ul>
          {this.state.todos.map((todo) => (
            <div key={todo.id}>
              <h3>{todo.description}</h3>
              <ul>
                <li>Priority : {todo.priority}</li>
                <li>Start : {todo.startDate}</li>
                <li>End : {todo.endDate}</li>
              </ul>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default AllToDo;
