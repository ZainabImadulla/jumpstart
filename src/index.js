import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; //<-- Add this 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fontsource-variable/dm-sans';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className = "brand"> JumpStart </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className = "justify-content-end">
              <Nav className="navlinks ">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/study">Study</Nav.Link>
                  <Nav.Link href="/Login">Login</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();