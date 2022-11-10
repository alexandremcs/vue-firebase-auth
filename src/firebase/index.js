// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKKu_4YzgKadZ_aMN0ACeUDz0U3_JsqEg",
  authDomain: "vue-firebase-auth-bab77.firebaseapp.com",
  projectId: "vue-firebase-auth-bab77",
  storageBucket: "vue-firebase-auth-bab77.appspot.com",
  messagingSenderId: "567125563671",
  appId: "1:567125563671:web:c5c681fd61786d8299bf52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export { auth }