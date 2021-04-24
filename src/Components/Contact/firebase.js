import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBlZud98JkxP9ien4AeHQg8yEC6HAYUbHI",
    authDomain: "meetpaulin-contactform.firebaseapp.com",
    databaseURL: "https://meetpaulin-contactform.firebaseio.com",
    projectId: "meetpaulin-contactform",
    storageBucket: "meetpaulin-contactform.appspot.com",
    messagingSenderId: "751337059937",
    appId: "1:751337059937:web:d5da0e37b4fb47bc4adc20"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();
  export {db}
  