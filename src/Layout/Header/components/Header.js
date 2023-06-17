//Libraries
import React from 'react'
//components
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
//css
import './styles/header.css'
import LOGO from '../../../Assets/Images/onepercentlogo.jpg'

function Header() {
    return (
        <header className='header-wrap'>
            <Navbar collapseOnSelect expand="lg" style={{ padding: '0px' }} >
                <Container>
                <Navbar.Brand href="/" className='uncollapse-brand'><img className='brand-img' src={LOGO} alt='brand' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{ justifyContent: 'flex-end' }}>
                            <Link className="nav-link" to="/program">Program</Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Navbar.Brand href="/"><img className='brand-img' src={LOGO} alt='brand' /></Navbar.Brand>
                        </Nav>
                        <Nav style={{ justifyContent: 'flex-start' }}>
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <p className='brand-description'>ONE PERCENT BETTER EVERYDAY</p>
        </header>
    )
}

export default Header