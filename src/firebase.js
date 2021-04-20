import firebase from "firebase";
import dotenv from 'dotenv';
 
dotenv.config()

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "jimmy-instagram-clone.firebaseapp.com",
    projectId: "jimmy-instagram-clone",
    storageBucket: "jimmy-instagram-clone.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

const db = firebaseApp.firestore();
const auth = firebase.auth();  // authentication
const storage = firebase.storage();  // static files-> photos

export { db, auth, storage };