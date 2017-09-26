import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Search from './searchView';
import Home from './home';

class HomeView extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    <div>
      <Router>
        <div>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/search">Recipes</Link></li>
          </ul>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
      </Router>
    </div>
  }
};

export default connect(null, null)(HomeView);