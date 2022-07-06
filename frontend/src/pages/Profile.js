import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

// import Custom Components
import NavBar from "../components/navbar";
import Tabs from "../components/tabs";
import axiosInstance from "../axiosApi";

export default function ProfilePage(props) {
    const { onHandleLogout } = props;
    const [viewContent, setViewContent] = useState("");
    const view = "/profile/";

    const accessView = async () => {
        try {
            let response = await axiosInstance.get("/profile/");
            console.log(response.status);
            if (response.status === 200) {
                setViewContent(
                    <>
                        <Row>
                            <h4 className="">
                                Here will be displayed the info about the user.
                            </h4>
                        </Row>
                    </>
                );
            }
        } catch (error) {
            console.log("Error: ", JSON.stringify(error, null, 4));
            setViewContent(
                <h4>
                    You need to <Link to="/login">login</Link> to access this
                    page.
                </h4>
            );
            throw error;
        }
    };

    // Executed when componenent is mounted
    useEffect(() => {
        accessView();
    }, []);

    return (
        <>
            <NavBar onHandleLogout={onHandleLogout} />
            <Container className="content">{viewContent}</Container>
            <Tabs />
        </>
    );
}
