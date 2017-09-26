import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBqIoEd9aUE3whBSe-nYqsdPAPUnewQwu4",
    authDomain: "fridgit-82db7.firebaseapp.com",
    databaseURL: "https://fridgit-82db7.firebaseio.com",
    projectId: "fridgit-82db7",
    storageBucket: "fridgit-82db7.appspot.com",
    messagingSenderId: "614537900777"
  };
  
firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth;
