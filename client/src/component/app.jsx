import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
=======
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { logout } from "../firebase/auth";
>>>>>>> [Edit] Change render condition to local storage
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

import HomeView from './homeView.jsx';
import Login from './login.jsx';
import LandingPage from './landingPage.jsx';
import SignUp from './signup.jsx';
import * as authActions from '../actions/authActions.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(localStorage.getItem('userid')) {
      return (
        <HomeView />
      )
    } else {
      return (
        <div>
          <Router>
            <div>
              <div className="ui pointing menu" >
                <a className="item"><Link to="/">FRIDGE-IT</Link></a>
                <a className="item"><Link to="/login">Login</Link></a>
                <a className="item"><Link to="/signup">Sign Up</Link></a>
              </div>
                <Route exact path="/" render={() => (<LandingPage />)} />
                <Route path="/login" render={() => (<Login />)} />
                <Route path="/signup" render={() => (<SignUp />)} />
            </div>
          </Router>
        </div>
      );
    }
  }
};

const appState = (store) => {
  return {
    username: store.auth.username,
  }
}

const appDispatch =(dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}
export default withRouter(connect(appState, appDispatch)(App));
