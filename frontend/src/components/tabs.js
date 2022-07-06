import React from "react";
import { Container, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import { GiMeal } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Tabs = () => {
    return (
        <Container fluid className="tabs p-0">
            <div className="wrapper">
                <Col className="tab p-x-0">
                    <NavLink
                        to="/recipes"
                        className="icon-wrapper p-3"
                        activeClassName="active"
                    >
                        <GiMeal />
                    </NavLink>
                </Col>
                <Col className="tab p-x-0">
                    <NavLink
                        to="/search"
                        className="icon-wrapper p-3"
                        activeClassName="active"
                    >
                        <AiOutlineSearch />
                    </NavLink>
                </Col>
                <Col className="tab p-x-0">
                    <NavLink
                        to="/lists"
                        className="icon-wrapper p-3"
                        activeClassName="active"
                    >
                        <AiOutlineUnorderedList />
                    </NavLink>
                </Col>
                <Col className="tab p-x-0">
                    <NavLink
                        to="/profile"
                        className="icon-wrapper p-3"
                        activeClassName="active"
                    >
                        <CgProfile />
                    </NavLink>
                </Col>
            </div>
        </Container>
    );
};

export default Tabs;
