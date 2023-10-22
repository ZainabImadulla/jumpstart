import React from "react";
import './session.css'
import Countdown from '/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/components/countdown.js'
import TodoList from '/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/components/TodoList.js';
export default function Session (){
    return (
    <div> 
        <div className = "topHeading">
            <h2><b>Biology Study Session</b></h2>
        </div>
        <div className = "studying">
            <Countdown className = "count"/>
            <TodoList className = "list"/>
        </div>
        
    </div>
    )

}