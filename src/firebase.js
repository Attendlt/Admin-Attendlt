import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHDrvaJfxauO6dK6F9YFzgyRJkBelISUU",
  authDomain: "forum-8f2e6.firebaseapp.com",
  databaseURL: "https://forum-8f2e6.firebaseio.com",
  projectId: "forum-8f2e6",
  storageBucket: "forum-8f2e6.appspot.com",
  messagingSenderId: "328481382959",
  appId: "1:328481382959:web:bf5a9d1b5cb4e260439cda",
  measurementId: "G-91CCYWEDRH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth, db };
