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
    this.test = this.test.bind(this);
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
  test() {
    firebase.database().ref('users/').set({
      name: 'testing',
      pw: 'hehe'
    }).then(()=>{
      firebase.database().ref('users/name').once('value').then(value => {console.log(child)})
    })
    
  }
//   var userId = firebase.auth().currentUser.uid;
// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// });

  render() {
    return (
    <div className="wrapper">
      <h1>Fun Food Friends</h1>
      {this.state.user ?
        <button onClick={this.logout}>Log Out</button>                
        :
        <button onClick={this.login}>Sign in With Google</button>              
      }
      <button onClick={this.test}>Unknown</button>              

    </div>
    )
  }
}

export default Login;