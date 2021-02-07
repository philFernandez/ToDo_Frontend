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
                this.setState(
                    {
                        message: response.data.message,
                        successful: true,
                    },
                    () => {
                        this.props.history.push("/login");
                    }
                );
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
                <h1 align="center" className="display-4" style={{paddingTop: 48}}>Register New User</h1>
                <Form onSubmit={this.handleRegister}>
                    {!this.state.successful && (
                        <Container>
                            <FormGroup>
                                <Label for="username" className="label">
                                    Username
                                </Label>
                                <Input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                    required
                                    autoComplete="username"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password" className="label">
                                    Password
                                </Label>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    required
                                    autoComplete="current-password"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button style={{ width: 200 }}>
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
