import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAZwsglGTZ0QMrxpx4hVkQRt-AqGhspVS0",
  authDomain: "dotted-aileron-345204.firebaseapp.com",
  projectId: "dotted-aileron-345204",
  storageBucket: "dotted-aileron-345204.appspot.com",
  messagingSenderId: "650020210896",
  appId: "1:650020210896:web:54b7d048b250af0bedb6d5",
  measurementId: "G-7RLCCXY5VM"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);