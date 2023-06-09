/* Component Header */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const Header: React.FC = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Portfolio Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#about">About Me</Nav.Link>
                    <Nav.Link href="#skills">My Skills</Nav.Link>
                    <Nav.Link href="#projects">My Projects</Nav.Link>
                    <Nav.Link href="#certifications">My Certifications</Nav.Link>
                    <Nav.Link href="#blogs">My Blogs</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export {}; // Add this line to make the file a module