console.log("sw");
// alert("sw");
// importScripts('https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js')
// importScripts('https://www.gstatic.com/firebasejs/9.19.1/firebase-messaging.js')
// // import { onMessage } from "firebase/messaging";
// // import { onBackgroundMessage } from "firebase/messaging/sw";
// // import { firebaseApp } from "./initFirebaseebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyDa5EOVViSnkuWksX8vbaLppudmbNNHcNk",
//     authDomain: "fir-23024.firebaseapp.com",
//     databaseURL:
//       "https://fir-23024-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "fir-23024",
//     storageBucket: "fir-23024.appspot.com",
//     messagingSenderId: "249974542444",
//     appId: "1:249974542444:web:a0fa84447ee465774bc849",
//   };

// const app = firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging(app);

// // // Handle incoming messages. Called when:
// // // - a message is received while the app has focus
// // // - the user clicks on an app notification created by a service worker
// // //   `messaging.onBackgroundMessage` handler.
// // import { onMessage } from "firebase/messaging";

// // onMessage(messaging, (payload) => {
// //   console.log("Message received. ", payload);
// // });

// messaging.onBackgroundMessage(messaging, (payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = "Background Message Title";
//   const notificationOptions = {
//     body: "Background Message body.",
//     icon: "./assets/react.svg",
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
// importScripts('/__/firebase/9.2.0/firebase-app-compat.js');
// importScripts('/__/firebase/9.2.0/firebase-messaging-compat.js');
// importScripts('/__/firebase/init.js');

importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');
/**
 * Here is is the code snippet to initialize Firebase Messaging in the Service
 * Worker when your app is not hosted on Firebase Hosting.

 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here. Other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

 // Initialize the Firebase app in the service worker by passing in
 // your app's Firebase config object.
 // https://firebase.google.com/docs/web/setup#config-object
 
 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 **/
firebase.initializeApp({
    apiKey: "AIzaSyDa5EOVViSnkuWksX8vbaLppudmbNNHcNk",
    authDomain: "fir-23024.firebaseapp.com",
    databaseURL:
    "https://fir-23024-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-23024",
    storageBucket: "fir-23024.appspot.com",
    messagingSenderId: "249974542444",
    appId: "1:249974542444:web:a0fa84447ee465774bc849",
});
const messaging = firebase.messaging();


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically 
// and you should use data messages for custom notifications.
// For more info see: 
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    // icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});