import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC3tFUJSTgdTnxxUGCo9bPPF2IkndCvIaI",
    authDomain: "bible-app-f6a3f.firebaseapp.com",
    projectId: "bible-app-f6a3f",
    storageBucket: "bible-app-f6a3f.appspot.com",
    messagingSenderId: "1064435137423",
    appId: "1:1064435137423:web:9e10981b4e8e8ce164e9fa",
    measurementId: "G-MM4TDXTCNY"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
