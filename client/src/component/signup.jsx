import React from 'react';
// import {loginWithGoogle, redirect} from '../firebase/auth.js';
import firebase, {auth, googleProvider} from '../firebase/config.js'

class Signup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // user: JSON.parse(localStorage.getItem("user"))
      user: null
    }  
    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this); 
  }

  handleChange(e) {
  /* ... */
  }

  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
    console.log('this.state.user.displayname')
  }
    
  login() {
    auth.signInWithPopup(googleProvider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
        console.log(user);
      });
  }


  render() {
    return (
    <div className="wrapper">
      <h1>Fun Food Friends</h1>
      {this.state.user ?
        <button onClick={this.logout}>Log Out</button>                
        :
        <button onClick={this.login}>Log In</button>              
      }
    </div>
    )
  }
}
export default Signup;