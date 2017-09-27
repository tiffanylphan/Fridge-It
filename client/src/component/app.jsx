import React, { Component } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
// import {logout} from "../firebase/auth";
import HomeView from './homeView.jsx'
=======
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {logout} from "../firebase/auth";

import HomeView from './homeView.jsx';
import Login from './login.jsx';
import LandingPage from './landingPage.jsx';
>>>>>>> [Update] Create routes

// const appTokenKey = "appToken";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: JSON.parse(localStorage.getItem("user"))
    }
    // this.handleLogout = this.handleLogout.bind(this);
  }

  // handleLogout() {
  //   logout().then(function () {
  //       localStorage.removeItem(appTokenKey);
  //       // this.props.history.push("/login"); 
  //       console.log("user signed out from firebase", localStorage);
  //   })
  // };

  render() {
    return (
      <div>
<<<<<<< HEAD
        <HomeView />
=======
        <Router>
          <div>
            <button><Link to="/">FRIDGE-IT</Link></button>
            <button><Link to="/home">Home</Link></button>
            <button><Link to="/login">Login</Link></button>
            <button onClick={this.handleLogout}>Log out</button>
            <Route exact path="/" render={() => (<LandingPage />)} />
            <Route path="/home" render={() => {return false ? <Redirect to={{ pathname: '/login'}} /> : <HomeView />}} />
            <Route path="/login" render={() => (<Login />)} />
          </div>
        </Router>
>>>>>>> [Update] Create routes
      </div>
    )
  }
};

{/* <button onClick={this.handleLogout}>Log out</button> */}
export default connect(null, null)(App);