import firebase from 'firebase';
require('dotenv').config();

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: "fridgit-82db7",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "614537900777"
  };
  
firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth;
