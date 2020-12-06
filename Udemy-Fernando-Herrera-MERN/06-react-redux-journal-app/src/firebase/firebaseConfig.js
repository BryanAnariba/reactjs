import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCmfM5b09_92AjPhHPlujBSbHb24rW4kCw",
    authDomain: "react-app-curso-fceef.firebaseapp.com",
    databaseURL: "https://react-app-curso-fceef.firebaseio.com",
    projectId: "react-app-curso-fceef",
    storageBucket: "react-app-curso-fceef.appspot.com",
    messagingSenderId: "12360421363",
    appId: "1:12360421363:web:b509e68fdb7d21a1cf8c86"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos
const db = firebase.firestore();

// Autentificacion con google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// exportamos lo que ocuparemos
export {
    db,
    googleAuthProvider,
    firebase
};