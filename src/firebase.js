import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
    apiKey: "AIzaSyC9pcpEY-V8ML9ppwvU3AHD82EPECI8v0g",
    authDomain: "next-drive2.firebaseapp.com",
    projectId: "next-drive2",
    storageBucket: "next-drive2.appspot.com",
    messagingSenderId: "1042874729889",
    appId: "1:1042874729889:web:8a767e24aabb49f67877e0"

})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
