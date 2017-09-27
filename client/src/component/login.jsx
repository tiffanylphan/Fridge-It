import React from 'react';
import firebase, {auth, googleProvider} from '../firebase/config.js'

class Login extends React.Component {
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

  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
      console.log('this.state.user.displayname')
    })
    .catch(function(error) {
      console.log('Error: ' + error)
    });
  }
    
  login() {
    auth.signInWithPopup(googleProvider) 
      .then((result) => {
        const token = result.credential.accessToken;
        const user = result.user;
        this.setState({
          user
        });
        console.log(token);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log('Error: ' + errorCode + ', ' + error)
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

export default Login;