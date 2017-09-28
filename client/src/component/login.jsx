import React from 'react';
import {loginWithGoogle} from '../firebase/auth.js'
// import semantic from 'semantic-ui';

const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "appToken";
const user = '';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      pw: ''
    }  
    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this); 
    this.test = this.test.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePw = this.handlePw.bind(this);
  }
  handleName(event) {
    this.setState({user: event.target.value});
  }

  handlePw(event) {
    this.setState({pw: event.target.value});
  }

  logout() {
    auth.signOut()
    .then(() => {
      localStorage.removeItem('userid')
      this.setState({
        user: '',
        pw: ''
      });
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
        localStorage.setItem('userid', user.uid)
        console.log(user)
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log('Error: ' + errorCode + ', ' + errorMessage)
      });
  }

  emailSignin(email, pw) {
    console.log('emailsignin function')
    firebase.auth().signInWithEmailAndPassword(email, pw).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Error: ' + errorMessage)
    })
    .then(result => {
      localStorage.setItem('userid', result.uid)
      console.log(result);
    })
  }

  test() {
    this.emailSignin(this.state.user, this.state.pw)
    console.log('test function')
  }
  getinfo() {
    console.log(localStorage.userid);
  }

  render() {
    return (
    <div className="wrapper">
      <h1>Fun Food Friends</h1>
      <form>
        <label>
          Email: 
          <input type="text" name="name" onChange={this.handleName}/>
        </label>
      </form>
      <form>
        <label>
          Password: 
          <input type="password" name="pw" onChange={this.handlePw}/>
        </label>
      </form>
        <button onClick={this.test}>Log In</button>     
      
        <button onClick={this.logout}>Log Out</button>                
        
        <button onClick={this.login}>Sign in With Google</button>              
      
      <button onClick={this.getinfo}>Show User Info</button>              

    </div>
        <div>
          <button onClick={this.handleGoogleLogin}>Sign in with Google</button>
        </div>
      </div>
    )
  }
}
export default Login;