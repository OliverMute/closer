import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDoJEXwv__NKNSGfDXE_P52FSfjYbSnMK4",
  authDomain: "closer-451bb.firebaseapp.com",
  databaseURL: "https://closer-451bb.firebaseio.com",
  projectId: "closer-451bb",
  storageBucket: "closer-451bb.appspot.com",
  messagingSenderId: "753550652531",
  appId: "1:753550652531:web:32da8dc37ca7d24424a606",
  measurementId: "G-1TXFC0N7ZF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication utility

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
/* we always want to trigger the google popup whenever we
 * use this GoogleAuthProvider for authentication and signup */
export const signInWithGoogle = () => auth.signInWithPopup(provider);
/* there are different types of popups. We only want the google one.*/

export default firebase;
