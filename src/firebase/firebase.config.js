import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-DeZBsbDI8S1VADbE7pn720YsRt3MQ84",
  authDomain: "fashion-projects-e03e5.firebaseapp.com",
  projectId: "fashion-projects-e03e5",
  storageBucket: "fashion-projects-e03e5.appspot.com",
  messagingSenderId: "1039492548478",
  appId: "1:1039492548478:web:ac0efffed239f88d93d52f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;