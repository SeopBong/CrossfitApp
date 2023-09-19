import React from "react";
import '../UI/NavBar.css';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavBar = () => {
    return(
        <div className="nav-bar">
            <Navbar className="bg" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">CROSSFIT ABLE</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#workout">WOD</Nav.Link>
                    <Nav.Link href="#Record">Record</Nav.Link>
                    <Nav.Link href="#Data">Data</Nav.Link>
                    <Nav.Link href="#Competition">Competition</Nav.Link>
                    <Nav.Link href="#Event">Event</Nav.Link>
                    <Nav.Link href="#pricing">Ranking</Nav.Link>
                </Nav>
                </Container>
      </Navbar>
        </div>
    )
};

export default NavBar;