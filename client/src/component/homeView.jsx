import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

import Search from './searchView.jsx';
import Home from './home.jsx';
<<<<<<< HEAD
import Login from './login.jsx';
import Signup from './signup.jsx';
=======
>>>>>>> [Update] Move over views over to app

class HomeView extends Component {
  constructor(props) {
    super(props);
  
  };

  render() {
    return (
      <Router>
        <div>
<<<<<<< HEAD
          <div className="ui pointing menu">
            <a className="item"><Link to="/">Home</Link></a>
            <a className="item"><Link to="/search">Recipes</Link></a>
            <a className="item"><Link to="/signup">Sign Up</Link></a>
            <a className="item"><Link to="/login">Log In</Link></a>
          </div>
          <Route exact path="/" render={() => {return <Home />}}/>
          <Route path="/search" render={() => {return <Search />}}/>
          <Route path="/signup" render={() => {return <Signup />}}/>
          <Route path="/login" render={() => {return <Login />}}/>
=======
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/search">Recipes</Link></li>
          </ul>
          <Route exact path="/home" render={() => {return <Home />}}/>
          <Route path="/search" render={() => {return <Search />}}/>
>>>>>>> [Update] Move over views over to app
        </div>
      </Router>
    );
  }
};

export default connect(null, null)(HomeView);