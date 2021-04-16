import firebase from 'firebase';

import 'firebase/firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCFet2ffHh0qLNS2ZezB0Aq7DMOz3GnIRM",
    authDomain: "crwn-db-c358c.firebaseapp.com",
    projectId: "crwn-db-c358c",
    storageBucket: "crwn-db-c358c.appspot.com",
    messagingSenderId: "599803481355",
    appId: "1:599803481355:web:5881e9f2262fef3055260e",
    measurementId: "G-P9M268X5HB"
  };
 
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;