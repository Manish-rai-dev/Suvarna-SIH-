// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFg0lN42pxos3rsnawG9Tr29UDo_WMi1c",
  authDomain: "swasthyavardhak-suvarna.firebaseapp.com",
  projectId: "swasthyavardhak-suvarna",
  storageBucket: "swasthyavardhak-suvarna.appspot.com",
  messagingSenderId: "334271834125",
  appId: "1:334271834125:web:2811b5797e6deb9357cd44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export default app;