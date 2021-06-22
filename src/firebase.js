// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCDZMRvB-xGJWrISA2_TX6Pum-O9C46YJY",
  authDomain: "netflix-redux-11109.firebaseapp.com",
  projectId: "netflix-redux-11109",
  storageBucket: "netflix-redux-11109.appspot.com",
  messagingSenderId: "659852919627",
  appId: "1:659852919627:web:9fc487f8327b230c4f1ece"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;
