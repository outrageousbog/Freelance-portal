import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";




class NavBar extends Component {
    render() {
        return(
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/">Freelancer</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#/market">Market</Nav.Link>
                        <Nav.Link href="#/login">Log in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;


/*
<div className="navbar bg-light">
                <div className="navbar-brand">Freelancer</div>
                <div className="nav mr-auto">
                    <div className="nav-link" >Home</div>
                    <div className="nav-link">Features</div>
                    <div className="nav-link" >Pricing</div>
                </div>
            </div>
            */