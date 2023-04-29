import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBd2Ar5_gQC3nm4RD0nyEeWxjZgnshzMxs",
  authDomain: "desafio-itech.firebaseapp.com",
  projectId: "desafio-itech",
  storageBucket: "desafio-itech.appspot.com",
  messagingSenderId: "418733125420",
  appId: "1:418733125420:web:a116d73939f4e593d4c689",
};

let app = null;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

export default firebase;
