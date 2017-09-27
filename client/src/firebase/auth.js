import {auth, googleProvider} from "./config";
import firebase from 'firebase';


export function loginWithGoogle() {

  console.log('auth sign in with redirect')
  return auth().signInWithRedirect(googleProvider);
  //return authenticate(loginWithFirebase(googleProvider));
}

export function logout() {
  console.log('signout')
  return auth().signOut();
}

// export function redirect() {
// auth().getRedirectResult().then(function(result) {
//   if (result.user) {
//   console.log("GoogleLogin Redirect result");
//   if (result.credential) {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   let token = result.credential.accessToken;

// }
//   // The signed-in user info.
//   let user = result.user;
//   // console.log("user:", JSON.stringify(user));
//   }
//   }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;

//   alert(error);
//   })
//  ;

//  /**
//   * We have appToken relevant for our backend API
//   */
//  if (localStorage.getItem(appTokenKey)) {
//      this.props.history.push("/app/home");
//      return;
//  }

//  auth().onAuthStateChanged(user => {
//      if (user) {
//         //  console.log("User signed in: ", JSON.stringify(user));

//          localStorage.removeItem(firebaseAuthKey);

//          // here you could authenticate with you web server to get the
//          // application specific token so that you do not have to
//          // authenticate with firebase every time a user logs in
//          localStorage.setItem(appTokenKey, user.uid);

//          // store the token
//         //  this.props.history.push("/app/home")
//      }
//  });
// }


//   // from example.
//   handleGoogleLogin() {
//     // console.log(localStorage)
//     loginWithGoogle()
//     .catch(function (error) {
//       alert(error); // or show toast
//       localStorage.removeItem(firebaseAuthKey);
//     });
//     localStorage.setItem(firebaseAuthKey, "1");
//     // need to get the username off the page and save it on local storage
//     // localStorage.setItem(user, "username");
//     }

//   handleSubmit(event) {
//     event.preventDefault();
//     console.log('button was clicked')
    
//   }



//   test()  {
//     firebaseAuth().onAuthStateChanged(user => {
//       if (user) {
//           console.log("User signed in: ", JSON.stringify(user));
  
//           localStorage.removeItem(firebaseAuthKey);
  
//           // here you could authenticate with you web server to get the
//           // application specific token so that you do not have to
//           // authenticate with firebase every time a user logs in
//           localStorage.setItem(appTokenKey, user.uid);
  
//           // store the token
//           this.props.history.push("/app/home")
//       }
//   });
//   }