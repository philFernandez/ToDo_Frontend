import React, { Component } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import AuthService from "../service/AuthService";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            successful: false,
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }
    handleRegister(e) {
        e.preventDefault();

        this.setState({
            message: "",
            successful: false,
        });


        AuthService.register(this.state.username, this.state.password).then(
            (response) => {
                this.setState({
                    message: response.data.message,
                    successful: true,
                });
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    successful: false,
                    message: resMessage,
                });
            }
        );
    }
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleRegister}>
                    {!this.state.successful && (
                        <Container>
                            <FormGroup>
                                <Label for="username" className="label">
                                    username
                                </Label>
                                <Input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password" className="label">
                                    password
                                </Label>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button style={{ marginRight: "1rem" }}>
                                    Register
                                </Button>
                            </FormGroup>
                        </Container>
                    )}
                </Form>
            </Container>
        );
    }
}
