import React, { useState } from "react";
import axiosInstance from "../axiosApi";
import { Link } from "react-router-dom";

function Unauthorized(props) {
    const { view } = props;
    const [data, setData] = useState("");

    const getMessage = async () => {
        try {
            let response = await axiosInstance.get(view);
            // console.log(JSON.stringify(response));
            const message = response.data.query;
            setData(message);
            return message;
        } catch (error) {
            console.log("Error: ", JSON.stringify(error, null, 4));
            throw error;
        }
    };

    const viewContent = (
        <>
            {/* Testing purpose. To be refactored based on Token Auth */}
            {data == "" ? (
                <h4>
                    You need to <Link to="/login">login</Link> to access this
                    page.
                </h4>
            ) : (
                data
            )}
        </>
    );

    return { viewContent };
}

export default Unauthorized;
