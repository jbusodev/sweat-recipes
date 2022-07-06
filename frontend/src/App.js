import React, { Component } from "react";
import "../static/frontend/style.scss";

// Page components
// import Footer from "./components/Footer";
import SwipePage from "./pages/Swipe"; // hooked with recipes Backend
import SearchPage from "./pages/Search"; // hooked with ingredients, recipes, cuisines, etc, Backend
import UserListsPage from "./pages/UserLists"; // hooked with recipes, users Backend
import ProfilePage from "./pages/Profile"; // hooked with users, settings Backend
import LoginPage from "./pages/Login"; // hooked with users, auth Backend
import SignupPage from "./pages/Signup";
import HomePage from "./pages/Home";
import Error404 from "./pages/Error404";
import Hello from "./components/hello";
import axiosInstance from "./axiosApi";

import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: localStorage.getItem("access_token")
                ? true
                : false,
            loaded: false,
        };

        // this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    async handleLogout() {
        try {
            const response = await axiosInstance.post("/blacklist/", {
                refresh_token: localStorage.getItem("refresh_token"),
            });
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            axiosInstance.defaults.headers["Authorization"] = null;
            this.setState({ isAuthenticated: false });
            window.location = "/home";
            return response;
        } catch (e) {
            console.log(e);
        }
    }

    // handleLogin() {
    //     try {
    //         // fetch Auth req and update state for render
    //         const isLoggedIn = localStorage.getItem("access_token")
    //             ? true
    //             : false;

    //         if (isLoggedIn) {
    //             this.setState(prevState => ({
    //                 isAuthenticated: !prevState.isAuthenticated,
    //             }));
    //             console.log("Login state change" + this.state.isAuthenticated);
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    componentDidMount() {
        // *****
        // Test to restrict acccess to views if not logged in. Better to do it with Axios in given views.
        // *****
        // if (
        //     !this.state.isAuthenticated &&
        //     window.location.pathname != "/home/"
        // ) {
        //     window.location = "/home";
        // }
    }

    render() {
        return (
            <div id="app">
                <Switch>
                    {/* Private Views */}
                    <Route
                        path="/recipes"
                        component={() => (
                            <SwipePage
                                isAuthenticated={this.state.isAuthenticated}
                                onHandleLogout={this.handleLogout}
                            />
                        )}
                    />
                    <Route
                        path="/search"
                        component={() => (
                            <SearchPage
                                isAuthenticated={this.state.isAuthenticated}
                                onHandleLogout={this.handleLogout}
                            />
                        )}
                    />
                    <Route
                        path="/lists"
                        component={() => (
                            <UserListsPage
                                isAuthenticated={this.state.isAuthenticated}
                                onHandleLogout={this.handleLogout}
                            />
                        )}
                    />
                    <Route
                        path="/profile"
                        component={() => (
                            <ProfilePage
                                isAuthenticated={this.state.isAuthenticated}
                                onHandleLogout={this.handleLogout}
                            />
                        )}
                    />

                    {/* Public Pages */}
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignupPage} />
                    <Route
                        path="/home"
                        component={() => (
                            <HomePage
                                // isAuthenticated={isAuthenticated}
                                onHandleLogout={this.handleLogout}
                            />
                        )}
                    />
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route exact path="/hello" component={Hello} />
                    <Route exact path="/page-not-found" component={Error404} />
                    <Route path="*">
                        <Redirect to="/page-not-found" />
                    </Route>
                </Switch>
                {/* {isAuthenticated ? null : <Redirect to="/login" />} */}
            </div>
        );
    }
}

export default App;
