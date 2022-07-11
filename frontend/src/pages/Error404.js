import React from "react";
import { Link, useHistory } from "react-router-dom";

import { Button, Container } from "reactstrap";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function Error404() {
    const history = useHistory();
    return (
        <>
            <NavBar />
            <Container id="contentLogin" fluid className="p-0">
                <div className="content">
                    <h3>Page not Found</h3>
                    <div className="rounded border-1 active">404</div>
                    <div className="centered">
                        Oops ! We could not find the page you were looking for.
                        <button
                            className="link"
                            onClick={() => history.goBack()}
                        >
                            Return to previous page.
                        </button>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
}
