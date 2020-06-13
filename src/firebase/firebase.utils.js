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

// store user into database

export const createUserProfileDocument = async (userAuth, additionalData) => {
  /* allows us to take that user off object that we got back
   * from authentication library and then store inside of our
   * database. The function is asynchronous.
   */

  if (!userAuth) return;
  /*if(!userAuth) return; -> if userAuth object doesn't exist, exit
  from this function
  */

  // query inside of firestore to see if it already exist

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // how do we get the snapshot

  const snapshot = await userRef.get();
  /* the snapshot only represents the data*/

  // if no snapshot, create a piece of data

  if (!snapshot.exists) {
    /* when we do a CRUD, we use the DocumentReference object, not the
     * snapshot. Snapshot represents the data */

    // which data we want to use to create this actual document

    const { displayName, email } = userAuth;
    const createdAt = new Date();
    /* when we made that document */

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
      /* creating the user data into database */
    } catch (error) {
      console.log("error created user", error.message);
    }
  }

  return userRef;
  /* we will use this userRef to do other things */
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
