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
                this.props.history.push("/profile");
                window.location.reload();
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
                <Form onSubmit={this.handleLogin}>
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
                            Login
                        </Button>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}
