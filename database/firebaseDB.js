import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import {
    FIREBASE_APIKEY,
    FIREBASE_AUTHDOMAIN,
    FIREBASE_PROJECTID,
    FIREBASE_STORAGEBUCKET,
    FIREBASE_MESSENGERID,
    FIREBASE_APPID,
    FIREBASE_MEASUREMENTID
} from "@env"

var firebaseConfig = {
    apiKey: FIREBASE_APIKEY,
    authDomain: FIREBASE_AUTHDOMAIN,
    projectId: FIREBASE_PROJECTID,
    storageBucket: FIREBASE_STORAGEBUCKET,
    messagingSenderId: FIREBASE_MESSENGERID,
    appId: FIREBASE_APPID,
    measurementId: FIREBASE_MEASUREMENTID
}

if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig)

export default firebase