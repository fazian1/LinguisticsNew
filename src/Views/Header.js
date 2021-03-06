import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <div>   
           
           <Navbar expand="lg" fixed="top" className="pt-2 mb-5 aaaa text-white">
                <Container>
                  
                  <Navbar.Brand className="text-white" href="/"> <h2 className="logo font-weight-bold text-white"><img src="assets/img/logo.png" alt="logo" height="50" width="50" /> Linguistics</h2> </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-5">
                      
                      <Nav.Link className="nav-link scrollto active text-warning" href="/#about"><h5 className="font-weight-bold" style={{color:'#ffc107'}}>About</h5></Nav.Link>
                      <Nav.Link className="nav-link scrollto active text-warning" href="/#services"><h5 className="font-weight-bold" style={{color:'#ffc107'}}>Services</h5></Nav.Link>
                      <Nav.Link className="nav-link scrollto active text-warning" href="/#portfolio"><h5 className="font-weight-bold" style={{color:'#ffc107'}}>Projects</h5></Nav.Link>
                      <Nav.Link className="nav-link scrollto active text-warning" href="/#pricing"><h5 className="font-weight-bold" style={{color:'#ffc107'}}>Courses</h5></Nav.Link>
                      <Nav.Link className="nav-link scrollto active text-warning" href="/#seminar"><h5 className="font-weight-bold" style={{color:'#ffc107'}}>Seminars</h5></Nav.Link>
                      <Nav.Link className="nav-link scrollto active text-warning" href="/#team"><h5 className="font-weight-bold" style={{color:'#ffc107'}}>Team</h5></Nav.Link>
                      <Nav.Link className="nav-link scrollto active text-warning" href="/#careers"><h5 className="font-weight-bold" style={{color:'#ffc107'}}>Careers</h5></Nav.Link>
                      <Nav.Link className="nav-link scrollto active text-warning" href="/#contact"><h5 className="font-weight-bold" style={{color:'#ffc107'}}>Contact</h5></Nav.Link>
                      <Nav.Link className="nav-link scrollto active text-warning" href="/apply"><h5 className="font-weight-bold" style={{color:'#ffc107'}}>Admissions</h5></Nav.Link>
                      <Nav.Link className="nav-link scrollto active text-warning" href="/login"><h5 className="font-weight-bold" style={{color:'#ffc107'}}>Login</h5></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
                {/* ======= Header ======= */}
            {/* <header id="header" className="fixed-top header-transparent">
              <div className="container-fluid text-center text-white m-0">
                <marquee behavior="scroll" direction="right"><h5 className="lead">STUDY-INTERNSHIP PROGRAM STARTING FROM 1 <sup>st</sup> DECEMBER, 2021</h5></marquee> 
              </div>
              <div className="container d-flex align-items-center justify-content-between">
                <h2 className="logo"><a href="/"> <img src="assets/img/logo.png" alt="logo" /> Linguistics</a></h2>
                
                <nav id="navbar" className="navbar">
                  <ul>
                    <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                    <li><a className="nav-link scrollto" href="#about">About</a></li>
                    <li><a className="nav-link scrollto" href="#services">Services</a></li>
                    <li><a className="nav-link scrollto " href="#portfolio">Projects</a></li>
                    <li><a className="nav-link scrollto" href="#pricing">Courses</a></li>
                    <li className="dropdown"><a className="nav-link scrollto" href="#pricing"><span>Study-Internship Program</span> <i className="bi bi-chevron-down" /></a>
                      <ul>
                        <li><a href="apply">Apply</a></li>
                        <li><a href="seminar">Seminar</a></li>
                      </ul>
                    </li>
                    <li><a className="nav-link scrollto" href="#team">Team</a></li>
                    <li><a className="nav-link scrollto" href="#careers">Careers</a></li>
                    <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                  </ul>
                  <i className="bi bi-list mobile-nav-toggle" />
                </nav>
              </div>
            </header> */}
            {/* End Header */}
        </div>
    )
}

export default Header
