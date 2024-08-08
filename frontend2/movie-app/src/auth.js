import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

//old config
// const firebaseConfig = {
//   apiKey: "AIzaSyCiT-hH7W-QfYG31LUUEJqlFQl-1B7PFuI",
//   authDomain: "hw11-c04ee.firebaseapp.com",
//   projectId: "hw11-c04ee",
//   storageBucket: "hw11-c04ee.appspot.com",
//   messagingSenderId: "720655693097",
//   appId: "1:720655693097:web:1fec66df2a7f633c91b338"
// };

//new config, added 8/8/24
const firebaseConfig = {
  apiKey: "AIzaSyClmcXcad6jsn5N_2nQSXxQgNCfZE7oAUc",
  authDomain: "hw11-db521.firebaseapp.com",
  projectId: "hw11-db521",
  storageBucket: "hw11-db521.appspot.com",
  messagingSenderId: "315838940489",
  appId: "1:315838940489:web:28c0c3888eee55d933c698",
  measurementId: "G-TG3Q5PVXCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
};