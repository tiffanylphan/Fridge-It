import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

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
        <Router>
          <div>
            <div className="ui pointing menu">
              <a className="item"><Link to="/home">Home</Link></a>
              <a className="item"><Link to="/search">Recipes</Link></a>
              <a className="item" onClick={(e) => {
                e.preventDefault();
                this.props.actions.logoutUser();
                }}>Logout</a>
            </div>
            <Route exact path="/home" render={() => {return <Home />}}/>
            <Route path="/search" render={() => {return <Search />}}/>
          </div>
        </Router>
      );
    } else {
      <Redirect exact to={{ pathname: '/login'}} />
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

export default withRouter(connect(homeState, homeDispatch)(HomeView));