// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKLv9LWMyugP8B8EXr9OLagQFHlcoLI8Q",
    authDomain: "netflix-clone-7c7fd.firebaseapp.com",
    projectId: "netflix-clone-7c7fd",
    storageBucket: "netflix-clone-7c7fd.appspot.com",
    messagingSenderId: "1083969472137",
    appId: "1:1083969472137:web:4934eab31a09d287bfe858",
    measurementId: "G-192QS78LMB"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }