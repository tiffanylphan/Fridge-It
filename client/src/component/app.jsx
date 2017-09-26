import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomeView from './homeView';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomeView />
      </div>
    )
  }
};

export default connect(null, null)(App);