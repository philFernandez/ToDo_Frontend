import React, { Component } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import AuthService from "../service/AuthService";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
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

    handleLogin(e) {
        e.preventDefault();
        this.setState({
            message: "",
            loading: true,
        });

        AuthService.login(this.state.username, this.state.password).then(
            () => {
                this.props.history.push("/");
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                this.setState({
                    loading: false,
                    message: resMessage,
                });
            }
        );
    }

    render() {
        return (
            <Container>
                <h1 align="center" className="display-4" style={{paddingTop: 48}}>Login Existing User</h1>
                <Form onSubmit={this.handleLogin}>
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
                            Login
                        </Button>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}
