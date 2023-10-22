import React from "react";
import "./home.css"
import Card from 'react-bootstrap/Card';


export default function Home (){
    return (
        <div className="learn-container">
            <h2 className = "topHeader"> Increasing Student Productivity</h2>
            <div class="column-container">
                    <Card className = "studyCard">
                        <Card.Img className = "topImg" variant="top" src= {require ('/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/images/personalized.png')} />
                        <Card.Body>
                            <Card.Text className = "cardtext">
                            <h3 className="heading">Personalized To-Do Lists</h3>
                            <p>Create your own to-do lists with personal tasks you wish to accomplish during your study session. With our easy, user-friendly tools, you'll be able to break down large tasks while staying organized.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className = "studyCard">
                        <Card.Img className = "topImg" variant="top" src= {require ('/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/images/timers.png')} />
                        <Card.Body>
                            <Card.Text className = "cardtext">
                            <h3 className="heading"> Pomodoro Method Timers</h3>
                            <p>The Pomodoro Method involves 25-minute periods of concentrated work followed by five-minute breaks. After completing four consecutive work intervals, longer breaks of usually 15 to 30 minutes are taken.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className = "studyCard">
                        <Card.Img className = "topImg" variant="top" src= {require ('/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/images/stats.png')} />
                        <Card.Body>
                            <Card.Text className = "cardtext">
                            <h3 className="heading">Individualized Stats</h3>
                            <p>Receive your personal statistics on a particular study session. This includes where you study best and how many tasks were accomplished using the Pomodoro Method timers.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </div>
         </div>
    )
}