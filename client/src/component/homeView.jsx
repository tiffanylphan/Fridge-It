import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import {Button, Menu, Container } from 'semantic-ui-react';

import Search from './searchView.jsx';
import Home from './home.jsx';
import * as authActions from '../actions/authActions.js';

class HomeView extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    if(localStorage.getItem('userid')) {
      return (
        <div>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.home-form {
            padding-top: 3%;
            padding-left: 5%;
            padding-right: 5%;
          }
        `}</style>
        <Router history={this.props.history}>
          <div>
            <Menu fixed='top' size='large'>
              <Container>
                <Menu.Item>
                  <Link to="/home">
                    <Button color={'blue'} content={'Home'} />
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/search">
                    <Button color={'blue'} content={'Recipe'} />
                  </Link>
                </Menu.Item>
                <Menu.Item position={'right'} >
                  <Button as='a' color={'blue'} content={'Logout'}
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.actions.logoutUser();
                    }} />
                </Menu.Item>
              </Container>
            </Menu>
            <Route exact path="/home" render={() => {return <Home />}}/>
            <Route path="/search" render={() => {return <Search />}}/>
          </div>
        </Router>
        </div>
      );
    } else {
      return (
        <div>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
            padding-top: 80px;
          }
        `}</style>
        <Redirect exact to={{ pathname: '/login'}} />
        </div>
      )
    }
  }
};

const homeState = (store) => {
  return {
    username: store.auth.username,
  }
}

const homeDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
};

export default connect(homeState, homeDispatch)(HomeView);