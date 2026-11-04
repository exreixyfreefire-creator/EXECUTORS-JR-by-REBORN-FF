importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "ඔයාගේ-API-Key-එක",
  authDomain: "ඔයාගේ-Auth-Domain-එක",
  projectId: "ඔයාගේ-Project-ID-එක",
  storageBucket: "ඔයාගේ-Storage-Bucket",
  messagingSenderId: "ඔයාගේ-Sender-ID",
  appId: "ඔයාගේ-App-ID"
});

const messaging = firebase.messaging();