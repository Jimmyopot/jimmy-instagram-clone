import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA54ZXNCC6F3b4yRgVoRdxez1WSFY6KVDI",
    authDomain: "jimmy-instagram-clone.firebaseapp.com",
    projectId: "jimmy-instagram-clone",
    storageBucket: "jimmy-instagram-clone.appspot.com",
    messagingSenderId: "804491575231",
    appId: "1:804491575231:web:98293a4f16cb96eb98ab0a",
    measurementId: "G-ZXN6MDF412"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();  // authentication
const storage = firebase.storage();  // static files-> photos

export { db, auth, storage };