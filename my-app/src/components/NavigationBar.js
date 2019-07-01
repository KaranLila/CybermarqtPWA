import React  from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
// applies styles to the components

const Styles = styled.div`
    .navbar {
        background-color: #999;
    }

     a.navbar-brand, a.navbar-nav, a.nav-link{
        color: #bbb;

        &:hover {
            color: white;
        }
    }

    

    
`;
// NavigationBar
export const NavigationBar = () => (
    <Styles>
        <Navbar expand ="lg">
            <Navbar.Brand href="/"></Navbar.Brand>
            <Navbar.Toggle aria-controls ="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex flex-column">
                    <Nav.Item><Nav.Link href ="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href ="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href ="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
    
)