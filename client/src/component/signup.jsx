import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../actions/authActions.js';

class Signup extends Component {
  constructor (props) {
    super(props); 
  }

<<<<<<< HEAD
  emailAuth(email, pw) {
    firebase.auth().createUserWithEmailAndPassword(email, pw).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Error: ' + errorCode, ', ' + errorMessage);
    })
    .then(result => {
      localStorage.setItem('name', result.email);
      localStorage.setItem('userid', result.uid);
      // console.log(result);
    })
  }
=======
  emailSignUp() {
    let email = document.getElementById('inputSignupEmail');
    let pw = document.getElementById('inputSignupPw');
>>>>>>> [Edit] Refactor to implement redux

    this.props.actions.emailSignUp(email.value, pw.value);
  }

  render() {
    return (
    <div className="wrapper">
      <h1>Sign Up</h1>
      <form>
        <label>
          Email: 
          <input type="text" id="inputSignupEmail" />
        </label>
      </form>
      <form>
        <label>
          Password: 
          <input type="password" id="inputSignupPw" />
        </label>
      </form>
        <button onClick={(e) => {
          e.preventDefault();
          this.emailSignUp();
          }}
        >Submit</button>     
    </div>
    )
  }
};

const signupDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}
export default connect(null, signupDispatch)(Signup);