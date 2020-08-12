import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration , Con esto haces la conexion de firebasr
var firebaseConfig = {
    apiKey: "AIzaSyBXA50FywysV_RKb7LvLR402saVBnavdbE",
    authDomain: "fb-restapi-react.firebaseapp.com",
    databaseURL: "https://fb-restapi-react.firebaseio.com",
    projectId: "fb-restapi-react",
    storageBucket: "fb-restapi-react.appspot.com",
    messagingSenderId: "115010813777",
    appId: "1:115010813777:web:4fa3a265a36b822f605d70"
};

// Initialize Firebase in a const
const fb = firebase.initializeApp(firebaseConfig);
export const connection = fb.firestore();
