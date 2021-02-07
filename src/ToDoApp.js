import React, { Component } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import "./ToDoApp.css";
import ToDoService from "./service/ToDoService";
import history from "./history";

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
            newTodo: this.emptyTodo,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * See (*1) at bottom of page for documentation
     * @param {Form} event
     */
    handleSubmit(event) {
        // prevent GET request from button press
        event.preventDefault();
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

    render() {
        // const item = this.state.newTodo;
        return (
            <div>
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
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="startDate" className="label">
                                When do you need to start?
                            </Label>
                            <Input type="date" id="startDate" required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="endDate" className="label">
                                When do you need to finish?
                            </Label>
                            <Input type="date" id="endDate" required />
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
                            <Button
                                style={{ width: 200 }}
                                className="btn-success"
                            >
                                Save ToDo
                            </Button>
                        </FormGroup>
                    </Form>
                    <Button
                        onClick={() => history.push("/ListToDo")}
                        style={{ marginRight: "1rem", width: 200 }}
                        className="btn-warning"
                    >
                        Show All
                    </Button>
                </Container>
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default ToDoApp;

// (*1) =========================================================
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
// ==============================================================
