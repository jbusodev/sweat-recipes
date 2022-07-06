import React, { Component, Fragment } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import {
    Button,
    Form,
    FormGroup,
    Label,
    Alert,
    Input,
    Container,
    FormFeedback,
} from "reactstrap";
import NavBar from "./navbar";
import Footer from "./footer";
import axiosInstance from "../axiosApi";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            message: "",
            messageUser: "",
            messagePwd: "",
            isHidden: true, // showing error message
            isSpinner: false, // showing spinner on success login
            isError: true,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            // updating state on field modification
            [event.target.name]: event.target.value,
            // cleaning error messages displayed to user after typing
            message: "",
            messagePwd: "",
            messageUser: "",
            isHidden: true,
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        // attributing component obj to self because 'this' refers to axios object in scope
        var self = this;
        try {
            const res = await axiosInstance.post("/token/obtain/", {
                username: this.state.username,
                password: this.state.password,
            });
            axiosInstance.defaults.headers["Authorization"] =
                "JWT " + res.data.access;
            localStorage.setItem("access_token", res.data.access);
            localStorage.setItem("refresh_token", res.data.refresh);
            // setting success state message
            self.setState({
                message:
                    "Successfully Logged in! You'll be redirected shortly.",
                isHidden: false,
                isSpinner: true,
                isError: false,
            });
            console.log(JSON.stringify(this.state.isHidden));
            // redirect after 3s
            setTimeout(() => {
                window.location = "/recipes";
            }, 3000);
        } catch (error) {
            // setting error data in 'res' for ease of access
            let res = error.response.data;
            // if either/all fields are blank
            if (error.response.status === 400) {
                self.setState({
                    messageUser: res.username,
                    messagePwd: res.password,
                });
                // if credentials are incorrect
            } else if (error.response.status === 401) {
                self.setState({
                    message: res.detail,
                    isHidden: false,
                });
            }
            throw error;
        }
    }

    render() {
        return (
            <Fragment>
                <Container id="contentLogin" fluid className="p-0">
                    <div className="orange-gradient form-bg">
                        {/* ideally, isAuth prop to be passed from parent App component */}
                        <NavBar noTabs light />
                        <Form
                            onSubmit={this.handleSubmit}
                            className="m-form p-lg-4 p-3 rounded"
                        >
                            <h3>Log in</h3>
                            <FormGroup>
                                <Alert
                                    className={
                                        this.state.isHidden ? "hidden" : null
                                    }
                                    color={classNames({
                                        success: this.state.isSpinner,
                                        danger: this.state.isError,
                                    })}
                                >
                                    {this.state.message}
                                </Alert>
                                <div
                                    className={classNames("spin", {
                                        hidden: !this.state.isSpinner,
                                    })}
                                ></div>
                            </FormGroup>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input
                                    type="text"
                                    name="username"
                                    value={this.state.username}
                                    placeholder="Enter username"
                                    onChange={this.handleChange}
                                    invalid={
                                        this.state.messageUser !== ""
                                            ? true
                                            : false
                                    }
                                />
                                <FormFeedback invalid>
                                    {this.state.messageUser}
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    placeholder="Enter password"
                                    onChange={this.handleChange}
                                    invalid={
                                        this.state.messagePwd !== ""
                                            ? true
                                            : false
                                    }
                                />
                                <FormFeedback invalid>
                                    {this.state.messagePwd}
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck1"
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="customCheck1"
                                    >
                                        Remember me
                                    </Label>
                                </div>
                            </FormGroup>
                            <Button
                                type="submit"
                                className="btn btn-dark btn-md btn-block"
                                onSubmit={this.handleSubmit}
                            >
                                Sign in
                            </Button>
                            <p className="signup text-right">
                                New User?{" "}
                                <Link to="/signup">Create an account</Link>
                            </p>
                            <p className="forgot-password text-right">
                                Forgot <Link to="#">password?</Link>
                            </p>
                        </Form>
                    </div>
                </Container>
                <Footer />
            </Fragment>
        );
    }
}

export default Login;
