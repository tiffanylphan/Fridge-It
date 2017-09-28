import React from 'react';
import {
  Button,
  Container,
  Menu,
} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { logout } from "../firebase/auth";

import HomeView from './homeView.jsx';
import Login from './login.jsx';
import LandingPage from './landingPage.jsx';
import SignUp from './signup.jsx';
import * as authActions from '../actions/authActions.js';

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Router>
        <div>
          <div>
          <Menu.Item as='a' active>
            <Link to="/">FRIDGE-IT</Link>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Button as='a'><Link to="/login">Log In</Link></Button>
            </Menu.Item>
            <Menu.Item>
              <Button as='a'><Link to="/signup">Sign Up</Link></Button>
            </Menu.Item>
          </Menu.Menu>
          </div>
          <div>
            <Route exact path="/" render={() => (<LandingPage />)} />
            <Route path="/login" render={() => (<Login />)} />
            <Route path="/signup" render={() => (<SignUp />)} />
          </div>
        </div>
      </Router>
    </Container>
  </Menu>
)

export default FixedMenu;