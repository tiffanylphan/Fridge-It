import React from 'react';
import {loginWithGoogle, redirect} from '../firebase/auth.js';
import firebase, {auth, ref} from '../firebase/config.js'

// const firebaseAuthKey = "firebaseAuthInProgress";
// const appTokenKey = "appToken";
// const user = '';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // user: JSON.parse(localStorage.getItem("user"))
      user: null
    }
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    this.test = this.test.bind(this);
  }



  render() {
    console.log(localStorage)
    return (
      <div>
    
    <div>
      <form >
        <div >
          <label> First Name </label>
          <input type="text" placeholder="Username"></input>
        </div>
        <div >
          <label> Last Name </label>
          <input type="text" placeholder="Password"></input>
        </div>
        <button  type="button" onClick={this.test}>Submit</button>
      </form>    
    </div>
        <div>
          <button onClick={this.handleGoogleLogin}>Sign in with Google</button>
        </div>
      </div>
    )
  }
}
export default Login;