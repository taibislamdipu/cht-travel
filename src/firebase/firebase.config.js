import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1neM4porQQjC7uLIVxlouq6xMoUcOoro",
  authDomain: "cht-travel.firebaseapp.com",
  projectId: "cht-travel",
  storageBucket: "cht-travel.appspot.com",
  messagingSenderId: "440165628499",
  appId: "1:440165628499:web:a97a6014746e78847e64a6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
