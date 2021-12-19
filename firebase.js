import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD7L3wopmKrU5bsxDnFDVi80MH-xIjyJvc",
  authDomain: "shipping-8eaed.firebaseapp.com",
  databaseURL: "https://shipping-8eaed-default-rtdb.firebaseio.com",
  projectId: "shipping-8eaed",
  storageBucket: "shipping-8eaed.appspot.com",
  messagingSenderId: "1000456317200",
  appId: "1:1000456317200:web:b49955b30070fd49b25d95"
};

let app;
if(firebase.apps.length ===0 ){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export {db, auth};