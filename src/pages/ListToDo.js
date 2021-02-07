import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import ToDoService from "../service/ToDoService";
import history from "../history";

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
            this.setState({ todos: response.data })
        );
    }
    render() {
        return (
            <Container>
                <div className="container">
                    <table className="table table-dark table-striped">
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
                <Button
                    className="btn-success"
                    onClick={() => history.push("/")}
                    style={{width: 200}}
                >
                    Home
                </Button>
            </Container>
        );
    }
}

export default ListToDo;
