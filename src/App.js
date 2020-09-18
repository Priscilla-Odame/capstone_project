import React, { Component } from 'react';
import SignUp from './pages/SignUp';
import LogIn from './pages/logIn';
import Program from './pages/Program';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

//import SocialLogIn from './SocialLogIn';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="Body">
          <Route exact path="/" component={Main}/>
          <Route exact path="/login" component={LogIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/events" component={Program}/>
          <Route exact path="/dashboard" component={Dashboard}/>
      
        </div>
      </Router>
    );
  }
}



export default App;



