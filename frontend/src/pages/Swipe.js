import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import NavBar from "../components/navbar";
import Tabs from "../components/tabs";

import { Link } from "react-router-dom";
import axiosInstance from "../axiosApi";

function SwipePage(props) {
    const { onHandleLogout } = props;
    const [htmlMessage, setHtmlMessage] = useState("");
    const view = "/recipes/";

    const accessView = async () => {
        try {
            let response = await axiosInstance.get("/recipes/");
            // console.log(JSON.stringify(response));
            console.log(response.status);
            if (response.status === 200) {
                setHtmlMessage(<h4>Woops. No recipes to show yet!</h4>);
            }
        } catch (error) {
            console.log("Error: ", JSON.stringify(error, null, 4));
            setHtmlMessage(
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
            <div className="content">
                <Row>{htmlMessage}</Row>
            </div>
            <Tabs />
        </>
    );
}

export default SwipePage;
