import React from 'react';
import firebase, {auth, googleProvider} from '../firebase/config.js'

class Signup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: null
    }  
    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this); 
  }

  handleChange(e) {
  /* ... */
  }


  emailSignup() {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }


  render() {
    return (
    <div className="wrapper">
      <h1>KaWhy?</h1>
        <button onClick={this.login}>Submit</button>     
    </div>
    )
  }
}
export default Signup;