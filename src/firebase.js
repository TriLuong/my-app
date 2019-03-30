import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAmeGhMEl7zf2Tc60a3w2FYwdgWV1VPnJw",
  authDomain: "my-app-65aad.firebaseapp.com",
  databaseURL: "https://my-app-65aad.firebaseio.com",
  projectId: "my-app-65aad",
  storageBucket: "my-app-65aad.appspot.com",
  messagingSenderId: "563932793054"
};
export default firebase.initializeApp(config);
