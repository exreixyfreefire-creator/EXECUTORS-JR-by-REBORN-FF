importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDs5ElyAEFpBPJjhNAxwVGWsvDHmzA4KWE",
  authDomain: "executors-junior.firebaseapp.com",
  projectId: "executors-junior",
  storageBucket: "executors-junior.firebasestorage.app",
  messagingSenderId: "1894229180027",
  appId: "1:1894229180027:web:140a7a5934166a786c2cda"
});

const messaging = firebase.messaging();

// Background එකේදී නෝටිෆිකේෂන් ලැබුණම පෙන්වීම සඳහා
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.jpg'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
