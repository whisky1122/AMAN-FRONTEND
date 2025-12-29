import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "zoyaelegance-b2a29.firebaseapp.com",
  projectId: "zoyaelegance-b2a29",
  storageBucket: "zoyaelegance-b2a29.firebasestorage.app",
  messagingSenderId: "239615901164",
  appId: "1:239615901164:web:6b7ab36e6399979b8d94c9"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

