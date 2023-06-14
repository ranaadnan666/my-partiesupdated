
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAYjX8-KoDCrIqCw2FEZdgtZm9fUlskA50",
  authDomain: "myparties-9c430.firebaseapp.com",
  projectId: "myparties-9c430",
  storageBucket: "myparties-9c430.appspot.com",
  messagingSenderId: "450397217185",
  appId: "1:450397217185:web:011bd40dc9ac630d9eebe0"
};
// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const messaging = getMessaging(app);
const db = getFirestore(app);
const storage = getStorage();
export {app,auth,messaging,db,storage}
