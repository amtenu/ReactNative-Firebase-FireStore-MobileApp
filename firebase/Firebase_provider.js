import React, { createContext } from "react";

export const FirebaseContext = createContext();
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_NATIVE_FIREBASE_API_KEY,
  authDomain: "my-app1-87894.firebaseapp.com",
  projectId: process.env.REACT_NATIVE_FIREBASE_projectId,
  storageBucket: "my-app1-87894.appspot.com",
  messagingSenderId: "398788667552",
  appId: process.env.REACT_NATIVE_FIREBASE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function Firebase_provider(props) {
  const children = props.children;
  const theValues = { app };

  return <FirebaseContext.Provider value={theValues}>{children}</FirebaseContext.Provider>;
}
export default Firebase_provider;
