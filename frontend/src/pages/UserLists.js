import React, { useState, useEffect } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";

// Custom Components
import { Divider } from "../components/divider";
// import SearchBar from "../components/searchBar";
import SearchCount from "../components/searchCount";
import SearchesOutput from "../components/searchesOutput";
import NavBar from "../components/navbar";
import Tabs from "../components/tabs";
import axiosInstance from "../axiosApi";

export default function UserListsPage(props) {
    const { onHandleLogout } = props;
    const [viewContent, setViewContent] = useState("");
    const view = "/lists/";

    // Switch Tabs
    const [activeTab, setActiveTab] = useState("1");

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
        setCount(c => c + 1); // refresh count, c + 1 to be replaced by query res.
    };

    // Update result count
    const [count, setCount] = useState(0);

    // table icons
    const iconsSaved = [{ key: "favorite", name: "favorite" }];
    const iconsFav = [{ key: "save", name: "save" }];

    const accessView = async () => {
        try {
            let response = await axiosInstance.get("/lists/");
            // console.log(JSON.stringify(response));
            console.log(response.status);
            if (response.status === 200) {
                setViewContent(
                    <>
                        <Row className="justify-content-between py-2">
                            <SearchCount count={count} />
                            {/* count is updated onSearch */}
                        </Row>
                        <Divider fullwidth depth="2px" />
                        <Row>
                            <Nav tabs>
                                <NavItem className="col">
                                    <NavLink
                                        className={classnames({
                                            active: activeTab === "1",
                                        })}
                                        onClick={() => {
                                            toggle("1");
                                        }}
                                    >
                                        Saved
                                    </NavLink>
                                </NavItem>
                                <NavItem className="col">
                                    <NavLink
                                        className={classnames({
                                            active: activeTab === "2",
                                        })}
                                        onClick={() => {
                                            toggle("2");
                                        }}
                                    >
                                        Favorite
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <SearchesOutput icons={iconsSaved} />
                                </TabPane>
                                <TabPane tabId="2">
                                    <SearchesOutput icons={iconsFav} />
                                </TabPane>
                            </TabContent>
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
            <div className="content">{viewContent}</div>
            <Tabs />
        </>
    );
}
