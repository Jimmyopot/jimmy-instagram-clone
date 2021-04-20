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



// service cloud.firestore {
//     match /databases/{database}/documents {
//       match /{document=**} {
//         allow read: if isLoggedIn();
//         allow create: if isLoggedIn() && isValidMessage();
//         allow update, delete: if false;
//       }
//     }
//     function isLoggedIn() {
        //    return request.auth != null;
// }
//     function isValidMessage() {
        //    return request.resource.data.uid == request.auth.uid;
// }
// 
//   }