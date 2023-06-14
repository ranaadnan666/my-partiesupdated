importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyAYjX8-KoDCrIqCw2FEZdgtZm9fUlskA50",
    authDomain: "myparties-9c430.firebaseapp.com",
    projectId: "myparties-9c430",
    storageBucket: "myparties-9c430.appspot.com",
    messagingSenderId: "450397217185",
    appId: "1:450397217185:web:011bd40dc9ac630d9eebe0"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

self.addEventListener('push', (event) => {
  const notification = event.data.json();
  const title = notification.title;
  const options = {
    body: notification.body,
    // Add any other desired options
  };
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  // Handle notification click event
  // Add your desired behavior when the notification is clicked
});
