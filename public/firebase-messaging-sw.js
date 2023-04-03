console.log("sw");
alert("sw");
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
