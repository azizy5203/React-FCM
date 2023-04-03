// import { onMessage } from "firebase/messaging";
// import { onBackgroundMessage } from "firebase/messaging/sw";
// import { firebaseApp./initFirebaseebase";

// const messaging = firebaseApp.messaging(firebaseApp.app);

// // Handle incoming messages. Called when:
// // - a message is received while the app has focus
// // - the user clicks on an app notification created by a service worker
// //   `messaging.onBackgroundMessage` handler.
// import { onMessage } from "firebase/messaging";

// onMessage(messaging, (payload) => {
//   console.log("Message received. ", payload);
// });

// onBackgroundMessage(messaging, (payload) => {
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
