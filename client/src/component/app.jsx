import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase, { auth, provider } from './firebase.js';

class App extends Component {
  constructor(props) {
    super(props);
    // from the example I'm modeling off of.
    this.state = {
      user: null
    }
  }

// log in function.  Not sure if the async keyword needs to be here.
async login() {
  const result = await auth().signInWithPopup(provider)
  this.setState({user: result.user});
}

// log out function
logout() {
  await auth().signOut()
  this.setState({user: null});
}

  render() {
    return (
      <div>
        Hello?
        <HomeView />
      </div>
    )
  }
};

export default connect(null, null)(App);