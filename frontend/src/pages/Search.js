import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

// Custom Components
import { Divider } from "../components/divider";
import ViewControls from "../components/viewControls";
import SearchesOutput from "../components/searchesOutput";
import SearchBar from "../components/searchBar";
import SearchCount from "../components/searchCount";
import NavBar from "../components/navbar";
import Tabs from "../components/tabs";
import axiosInstance from "../axiosApi";

export default function SearchPage(props) {
    const { onHandleLogout } = props;
    const [isLoggedIn, setRender] = useState(false);

    // Switch to Grid / List
    const [isList, setView] = useState(false);
    const ListView = () => {
        setView(true);
    };
    const gridView = () => {
        setView(false);
    };

    // Search count - updated by search query
    const [count, setCount] = useState(0);

    // update search count by database query total
    const search = () => {
        setCount(c => c + 1);
    };

    const searchEnter = e => {
        //it triggers by pressing the enter key
        if (e.keyCode == 13 || e.which == 13) {
            search();
        }
    };

    // table icons
    const icons = [
        { key: "info", name: "info" },
        { key: "save", name: "save" },
        { key: "favorite", name: "favorite" },
    ];

    const accessView = async () => {
        try {
            let response = await axiosInstance.get("/search/");
            console.log(response.status);
            if (response.status === 200) {
                setRender(true);
            }
        } catch (error) {
            console.log("Error: ", JSON.stringify(error, null, 4));
            throw error;
        }
    };

    // Executed when componenent is mounted
    useEffect(() => {
        accessView();
    }, []);

    const res =
        isLoggedIn === true ? (
            <>
                <Row>
                    <SearchBar
                        onSearchClick={search}
                        onSearchPress={searchEnter}
                    />
                </Row>
                <Row className="justify-content-between p-2">
                    <Col className="text-start">
                        <SearchCount count={count} />
                    </Col>
                    <Col className="text-end">
                        <ViewControls
                            isList={isList}
                            ongridView={gridView}
                            onListView={ListView}
                        />
                    </Col>
                </Row>
                <Divider fullwidth depth="2px" />
                <Row>
                    <SearchesOutput icons={icons} isList={isList} />
                </Row>
            </>
        ) : (
            <h4>
                You need to <Link to="/login">login</Link> to access this page.
            </h4>
        );

    return (
        <>
            <NavBar onHandleLogout={onHandleLogout} />
            <div className="content">{res}</div>
            <Tabs />
        </>
    );
}
