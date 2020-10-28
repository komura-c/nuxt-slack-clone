import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyBs_IGv1FnO92IdrSKAScNSN3m1HXEu5AY",
    authDomain: "nuxt-slack-clone-a95d8.firebaseapp.com",
    databaseURL: "https://nuxt-slack-clone-a95d8.firebaseio.com",
    projectId: "nuxt-slack-clone-a95d8",
    storageBucket: "nuxt-slack-clone-a95d8.appspot.com",
    messagingSenderId: "1024660805445",
    appId: "1:1024660805445:web:a8f99a168112fa89c8d02c",
    measurementId: "G-T0X0LHCJ6E"
  };
  firebase.initializeApp(config);
}

const db = firebase.firestore();
export { firebase, db };
