import React, {useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import "./register.css"
import axios from "axios"
const Register = () => {
    //from Lama Dev Tutorial
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    })

    const handleChange = e =>{
        setInputs(prev =>({...prev, [e.target.name]: e.target.value}))

    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            const res = await axios.post("/auth/register", inputs)
            console.log(res)
        }catch(err){
            console.log(err)
        }
        



    }
    return (
        <div className = "auth">
            <h1>Register</h1>
            <form className="form-container">
                <input required type = "email" placeholder = 'email' name = 'email' onChange = {handleChange}/>
                <input required type = "text" placeholder = 'username' name = 'username' onChange = {handleChange}/>
                <input required type = "password" placeholder = 'password' name = 'password' onChange = {handleChange}/>
                <button className="register-button" onClick = {handleSubmit} >Register</button>
            </form>
            <Nav >
                <span className = "accountHave"> Have an account? <Nav.Link href= "/login"> Login </Nav.Link> </span>
            </Nav>
        </div>
    )
}

export default Register