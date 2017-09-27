import React from 'react';
import firebase, {auth, googleProvider} from '../firebase/config.js'

class Signup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      pw: ''
    }  
    this.emailSignup = this.emailSignup.bind(this);
    this.handleName = this. handleName.bind(this);
    this.handlePw = this. handlePw.bind(this); 
    this.handle = this.handle.bind(this);   
  }

  handleName(event) {
    this.setState({user: event.target.value});
  }

  handlePw(event) {
    this.setState({pw: event.target.value});
  }

  emailSignup(email, pw) {
    firebase.auth().createUserWithEmailAndPassword(email, pw).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    })
  }

  handle() {
    this.emailSignup(this.state.user, this.state.pw);
  }

  render() {
    return (
    <div className="wrapper">
      <h1>KaWhy?</h1>
      <form>
        <label>
          Email:
          <input type="text" name="name" onChange={this.handleName}/>
        </label>
      </form>
      <form>
        <label>
          Password:
          <input type="text" name="pw" onChange={this.handlePw}/>
        </label>
      </form>
        <button onClick={this.handle}>Submit</button>     
    </div>
    )
  }
}
export default Signup;