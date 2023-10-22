import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "./login.css"
// code follows a tutorial by Lama Dev but changes much of it
const Login = () => {
    return (
        <div className = "auth">
            <container className="login-container">
            <h1 className="login-header">Login</h1>
                <container>
                    <form className="form-container">
                        <input type = "text" placeholder = 'Username'/>
                        <input type = "password" placeholder = 'Password'/>
                        <button className="login-button">Login</button>
                        <Nav className = "register">
                            <span> Don't have an account? <Nav.Link href= "/register"> Register </Nav.Link> </span>
                        </Nav>
                    </form>
                </container>
            </container>
        </div>
    )
}

export default Login