import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const firebaseInstance = firebase
export const config = {
    apiKey: "AIzaSyBYcoYpeRmhTWcskN4CaqIgpOITdx5xcCM",
    authDomain: "levelup-db38e.firebaseapp.com",
    databaseURL: "https://levelup-db38e-default-rtdb.firebaseio.com",
    projectId: "levelup-db38e",
    storageBucket: "levelup-db38e.appspot.com",
    messagingSenderId: "468483023250",
    appId: "1:468483023250:web:303856080a758f3ea3a14b",
    measurementId: "G-2SDC5CTZV5"
};

export function initializeFirebase(){
    firebaseInstance.initializeApp(config)
    // firebaseInstance.firestore()
}
