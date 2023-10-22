import React from "react";
import './session.css'
import Countdown from '../components/countdown.js'
import TodoList from '../components/TodoList.js';
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