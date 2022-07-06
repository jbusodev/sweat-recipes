import React, { useState, useEffect } from "react";
import {
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";
import LogoAlt from "./logoAlt";

export default function NavBar(props) {
    const isAuthenticated = localStorage.getItem("access_token") ? true : false;
    const onHandleLogout = props.onHandleLogout ? props.onHandleLogout : null;
    // prop for mobile bottom tabs view
    const noTabs = props.noTabs ? props.noTabs : false;

    // toggle function for mobile collapsed menu
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        // testing props values etc
    }, []);

    const alignment =
        noTabs && isAuthenticated
            ? "justify-content-between"
            : "justify-content-end";

    // Structuring menu items based on login and page conditions
    const menuItems = (
        <>
            <NavbarToggler onClick={toggle} />
            <Collapse
                isOpen={isOpen}
                navbar
                id="collapse-nav"
                className={`${alignment}`}
            >
                {/* Testing purpose. To be refactored based on Token Auth */}
                {noTabs && isAuthenticated ? (
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/recipes">
                                Recipes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/search">
                                Search
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/lists">
                                Lists
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/profile">
                                Profile
                            </NavLink>
                        </NavItem>
                    </Nav>
                ) : null}
                {/* Display Login & Signup or Logout links. To be Refactored based on Token Auth */}
                {isAuthenticated ? (
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <a
                                className="nav-link btn-orange"
                                onClick={onHandleLogout}
                            >
                                Logout
                            </a>
                        </NavItem>
                    </Nav>
                ) : (
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/signup">
                                Sign Up
                            </NavLink>
                        </NavItem>
                    </Nav>
                )}
            </Collapse>
        </>
    );

    return (
        <>
            <Navbar color="light" light expand="md" id="navbar">
                <div className="wrapper">
                    <NavLink to="/home">
                        {props.light ? (
                            <LogoAlt />
                        ) : (
                            <img src={logo} alt="Sweat" />
                        )}
                    </NavLink>
                    {menuItems}
                </div>
            </Navbar>
        </>
    );
}
