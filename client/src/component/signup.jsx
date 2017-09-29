import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../actions/authActions.js';

class Signup extends Component {
  constructor (props) {
    super(props); 
  }

  emailSignUp() {
    let email = document.getElementById('inputSignupEmail');
    let pw = document.getElementById('inputSignupPw');

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