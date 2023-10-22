import React, { useState } from "react";
import "./welcome.css"
import Toast from 'react-bootstrap/Toast';


export default function Welcome (){
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

    return (
        <div className = "welcome">
            <Toast className = "welcomeMessage" show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    <img className = "logo" src= {require ('/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/images/Logo.png')} className="rounded me-2" alt="" />
                    <strong className="me-auto">Welcome</strong>
                </Toast.Header>
                <Toast.Body> Hello! Welcome to JumpStart. To start a study session just click the plus-sign. Happy Studying!</Toast.Body>
            </Toast>
        </div>

    )

}