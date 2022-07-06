import React, { Component } from "react";

import { Link } from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
    FormFeedback,
    Label,
    Input,
} from "reactstrap";
import axiosInstance from "../axiosApi";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            message: "",
            messageEmail: "",
            messageUser: "",
            messagePwd: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearMessages = this.clearMessages.bind(this);
    }

    handleChange(event) {
        this.setState({
            // updating state on field modification
            [event.target.name]: event.target.value,
            // clearing error messages
            message: "",
            messageEmail: "",
            messagePwd: "",
            messageUser: "",
        });
    }

    clearMessages() {
        this.setState({
            username: "",
            password: "",
            email: "",
            messageEmail: "",
            messagePwd: "",
            messageUser: "",
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.clear();
        var self = this;
        try {
            const response = await axiosInstance.post("/user/create/", {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            });
            console.log(JSON.stringify(response));
            // setting success message
            if (response.status === 201) {
                self.setState({
                    message: "Successfully Registered! You may now login",
                });
                self.clearMessages();
            }
            return response;
        } catch (error) {
            // setting error data in 'res' for ease of access
            let res = error.response.data;
            // if either/all fields are blank
            if (error.response.status === 400) {
                console.log(JSON.stringify(res));
                self.setState({
                    messageEmail: res.email,
                    messageUser: res.username,
                    messagePwd: res.password,
                });
                // if credentials are incorrect
            } else if (error.response.status === 401) {
                self.setState({
                    message: res.detail,
                });
            }
        }
    }

    render() {
        return (
            <Form
                onSubmit={this.handleSubmit}
                className="m-form p-lg-4 p-3 rounded"
            >
                <h3>Register</h3>
                <FormGroup className="hidden">
                    <Label className="text-succcess">
                        {this.state.message}
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        name="email"
                        value={this.state.email}
                        placeholder="Enter email"
                        onChange={this.handleChange}
                        invalid={this.state.messageEmail !== "" ? true : false}
                    />
                    <FormFeedback invalid>
                        {this.state.messageEmail}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label>Username</Label>
                    <Input
                        type="text"
                        name="username"
                        value={this.state.username}
                        placeholder="Enter username"
                        onChange={this.handleChange}
                        invalid={this.state.messageUser !== "" ? true : false}
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
                        invalid={this.state.messagePwd !== "" ? true : false}
                    />
                    <FormFeedback invalid>{this.state.messagePwd}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <div className="custom-control custom-checkbox">
                        <input
                            required
                            type="checkbox"
                            name="terms"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <Label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                        >
                            I have read and accepted the{" "}
                            <Link to="/terms-and-conditions">
                                Terms and Conditions
                            </Link>
                        </Label>
                    </div>
                </FormGroup>
                <Button type="submit" className="btn btn-dark btn-md btn-block">
                    Sign up
                </Button>
                <p className="signup text-right">
                    Already have an account? <Link to="/login">login</Link>
                </p>
            </Form>
        );
    }
}

export default Signup;
