
import './App.css';
import Session from '/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/pages/session.js';
import Study from '/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/pages/study.js';
import Home from '/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/pages/home.js';
import Login from '/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/pages/login.js'
import Register from '/Users/zainabimadulla/Desktop/HackHarvard/jumpstart/src/pages/register.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes> 
                  <Route exact path='/' element={< Home />}></Route> 
                  <Route exact path='/study' element={< Study />}></Route>
                  <Route exact path='/study/session' element={<Session />}> </Route>
                  <Route exact path='/login' element={<Login />}> </Route>
                  <Route exact path='/register' element={<Register />}> </Route>
          </Routes>
        </Router>  


    </div>
  );
}

export default App;
