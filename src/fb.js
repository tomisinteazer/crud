import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAjuZwjL6Ly0-K3JIjI65IOwVWle_9-tfw",
  authDomain: "profit-offer.firebaseapp.com",
  databaseURL: "https://profit-offer.firebaseio.com",
  projectId: "profit-offer",
  storageBucket: "profit-offer.appspot.com",
  messagingSenderId: "229705718060",
  appId: "1:229705718060:web:84c2dff7f5dc63f19eb489",
  measurementId: "G-Z4NJTTHJK7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;