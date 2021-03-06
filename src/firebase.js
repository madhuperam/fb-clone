import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDg4UpGZ3bf1jHWVGWKj_xzw6vR0gASMiE",
    authDomain: "facebook-clone-ef357.firebaseapp.com",
    projectId: "facebook-clone-ef357",
    storageBucket: "facebook-clone-ef357.appspot.com",
    messagingSenderId: "1088397435912",
    appId: "1:1088397435912:web:24659d87b06ea0ce6a9dbd",
    measurementId: "G-HQPQNCWFJB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;