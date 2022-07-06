import React from "react";
import { Link } from "react-router-dom";

import { Container } from "reactstrap";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function Error404() {
    return (
        <>
            <NavBar />
            <Container id="contentLogin" fluid className="p-0">
                <div className="content">
                    <h3>Page not Found</h3>
                    <div className="rounded border-1 active">404</div>
                    <div className="centered">
                        Oops ! We could not find the page you were looking for.
                        <Link to="/home">Return to homepage</Link>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
}
