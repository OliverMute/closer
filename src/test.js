import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { auth } from "./firebase/firebase.utils";

const Test = () => {
  const firestore = firebase.firestore();

  // get shop and doc

  firestore
    .collection("users")
    .doc("Ds8ziLVmfZbSCMXasReb")
    .collection("cartItems")
    .doc("PLQuICfyqyMxmJFNEdKd");

  // other way

  firestore.doc("/users/Ds8ziLVmfZbSCMXasReb/cartItems/PLQuICfyqyMxmJFNEdKd");
  /* get the doc */

  firestore.collection("/users/Ds8ziLVmfZbSCMXasReb/cartItems");
  /* get the shop */
  console.log(auth);
  return <div>test</div>;
};

export default Test;
