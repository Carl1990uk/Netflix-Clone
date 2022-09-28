// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmrtSFEc6eWLa6O-t6xQG0le1_QWkbU4A",
  authDomain: "netflix-clone-ty.firebaseapp.com",
  projectId: "netflix-clone-ty",
  storageBucket: "netflix-clone-ty.appspot.com",
  messagingSenderId: "145171614988",
  appId: "1:145171614988:web:d3d6eb4a136656c1548d29"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }