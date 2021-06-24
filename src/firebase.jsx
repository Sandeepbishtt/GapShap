import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBILMYGFIvuZk0ZOZFwadBVKM7RDxX_8MQ",
    authDomain: "gapshap-ab2c7.firebaseapp.com",
    projectId: "gapshap-ab2c7",
    storageBucket: "gapshap-ab2c7.appspot.com",
    messagingSenderId: "935893187387",
    appId: "1:935893187387:web:71bb552d351153282a951e"
}).auth()