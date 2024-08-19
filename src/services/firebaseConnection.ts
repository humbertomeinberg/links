import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTajbrygCbDzco4jX5cnB92dq0PCRqjec",
  authDomain: "reactlinks-c16a1.firebaseapp.com",
  projectId: "reactlinks-c16a1",
  storageBucket: "reactlinks-c16a1.appspot.com",
  messagingSenderId: "595905400122",
  appId: "1:595905400122:web:d72cc9e12a9d0b148fd403"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth,db}