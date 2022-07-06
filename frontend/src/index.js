import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "../static/frontend/index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
