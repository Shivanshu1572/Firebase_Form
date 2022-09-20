// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// import firebase from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKiTluZSpEC2SFtpt_iUUAnyxzG4g06R0",
  authDomain: "fir-login-75f17.firebaseapp.com",
  projectId: "fir-login-75f17",
  storageBucket: "fir-login-75f17.appspot.com",
  messagingSenderId: "818152672927",
  appId: "1:818152672927:web:84103c22d09a0e88b39caa"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
    console.log(app)
}else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};