import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { logout } from "../firebase/auth";
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

import HomeView from './homeView.jsx';
import Login from './login.jsx';
import LandingPage from './landingPage.jsx';
import SignUp from './signup.jsx';

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
    // let { loggedIn } = this.props;

    // if(loggedIn) {
      //return (
        //<HomeView />
      //)
    // } else {

    // }
    return (
      <div>
        <Router>
          <div>
            <div className="ui pointing menu" >
              <a className="item"><Link to="/">FRIDGE-IT</Link></a>
              <a className="item"><Link to="/home">Temporary Home View</Link></a>
              <a className="item"><Link to="/login">Login</Link></a>
              <a className="item"><Link to="/signup">Sign Up</Link></a>
            </div>
              <Route exact path="/" render={() => (<LandingPage />)} />
              <Route path="/home" render={() => (<HomeView />)} />
              <Route path="/login" render={() => (<Login />)} />
              <Route path="/signup" render={() => (<SignUp />)} />
          </div>
        </Router>
      </div>
    )
  }
};

{/* <button onClick={this.handleLogout}>Log out</button> */}
export default connect(null, null)(App);