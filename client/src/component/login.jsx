import React from 'react';
import {loginWithGoogle} from '../firebase/auth.js'
// import semantic from 'semantic-ui';

const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "appToken";


class Login extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // from example.
  handleGoogleLogin() {
    console.log("handleGoogleLogin")
    loginWithGoogle()
      .catch(function (error) {
        alert(error); // or show toast
        localStorage.removeItem(firebaseAuthKey);
      });
      localStorage.setItem(firebaseAuthKey, "1");
    }

  handleSubmit(event) {
    event.preventDefault();
    console.log('button was clicked')
    this.handleGoogleLogin();
  }

  render() {
    return (
    
    <div>
      <form >
        <div >
          <label>First Name</label>
          <input type="text" placeholder="Username"></input>
        </div>
        <div >
          <label>Last Name</label>
          <input type="text" placeholder="Password"></input>
        </div>
        <button  type="button" onClick={this.handleSubmit}>Submit</button>
      </form>    
    </div>

    )
  }
}
export default Login;