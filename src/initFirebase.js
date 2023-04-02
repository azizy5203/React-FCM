// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa5EOVViSnkuWksX8vbaLppudmbNNHcNk",
  authDomain: "fir-23024.firebaseapp.com",
  databaseURL:
    "https://fir-23024-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-23024",
  storageBucket: "fir-23024.appspot.com",
  messagingSenderId: "249974542444",
  appId: "1:249974542444:web:a0fa84447ee465774bc849",
};

export const firebaseApp={
  app: initializeApp(firebaseConfig),
  messaging: getMessaging(),
};
