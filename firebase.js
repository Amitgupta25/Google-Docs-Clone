import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBGtyYDV5ZPnDMgW8mYPwSI6JvtOxCupMQ",
    authDomain: "docs-589fa.firebaseapp.com",
    projectId: "docs-589fa",
    storageBucket: "docs-589fa.appspot.com",
    messagingSenderId: "4552065705",
    appId: "1:4552065705:web:46a05a6bff70114edcdfb8"
  };


  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();

  export {db};