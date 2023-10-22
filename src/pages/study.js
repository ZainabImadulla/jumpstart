import React, {useState} from "react";
import "./study.css"
import NewSession from '/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/components/newsession.js';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Welcome from '/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/components/welcome.js'
import Nav from 'react-bootstrap/Nav';

export default function Study (){
    const [showB, setShowB] = useState(false);
    const toggleShowB = () => setShowB(!showB);

    return (
        <div>
            <h2  className = "topHeader"> Study Sessions</h2>
            <div className = "studySessions">
                <Card className = "studyCard">
                    <Card.Img className = "addImg" onClick= {toggleShowB} variant="top" src= {require ('/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/images/new.png')} /> 
                </Card>

                <Nav>
                    <Nav.Link href="/study/session">
                        <Card className = "studyCard">
                            <Card.Img className = "topImg" variant="top" src= {require ('/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/images/biology.jpg')} />
                            <Card.Body>
                                <Card.Text className = "cardtext">
                                    <div className =  "heading" > BIOL111 - Biological Sciences </div>
                                    <div className = "description" > 10/9/23 - 5/11 complete</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Nav.Link>
                </Nav>

                <Card className = "studyCard">
                    <Card.Img className = "topImg" variant="top" src= {require ('/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/images/binary.jpeg')} />
                    <Card.Body>
                        <Card.Text className = "cardtext">
                            <div className =  "heading" > CS2500 - Fundamentals of CS </div>
                            <div className = "description" > 9/13/23 - 1/6 complete</div>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className = "studyCard">
                    <Card.Img className = "topImg" variant="top" src= {require ('/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/images/math.jpeg')} />
                    <Card.Body>
                        <Card.Text className = "cardtext">
                            <div className =  "heading" > MATH1350 - Math Reasoning </div>
                            <div className = "description" > 8/2/23 - 5/5 complete</div>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className = "studyCard">
                    <Card.Img className = "topImg" variant="top" src= {require ('/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/images/Reading.jpeg')} />
                    <Card.Body>
                        <Card.Text className = "cardtext">
                            <div className =  "heading" > COMS101 - Communications</div>
                            <div className = "description" > 5/1/23 - 2/3 complete</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            <div className = "popUp">
                <Toast className = "makeSession" show={showB} onClose={toggleShowB}>
                    <Toast.Header>
                        
                    </Toast.Header>
                    <NewSession/>
                </Toast>
            </div>
            

            
            
            

            <div className = "welcomeMessage">
                <Welcome/>
            </div>
                

            

        </div>
    )

}

// Douglas on Github
