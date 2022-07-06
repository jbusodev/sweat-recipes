import React from "react";

import { Container } from "reactstrap";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function HomePage(props) {
    const { onHandleLogout } = props;

    return (
        <>
            <Container id="contentHome" fluid className="p-0">
                <NavBar noTabs onHandleLogout={onHandleLogout} />
                <div className="content">
                    <h3>Welcome Page.</h3>
                </div>
            </Container>
            <Footer />
        </>
    );
}
