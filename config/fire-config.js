import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCbDnQ0F4qTzadNs1-dE2vb4qo14xpPJB8",
  authDomain: "blog-39b7d.firebaseapp.com",
  projectId: "blog-39b7d",
  storageBucket: "blog-39b7d.appspot.com",
  messagingSenderId: "496529188234",
  appId: "1:496529188234:web:b47c55dc8cd09c9ec25473",
  measurementId: "G-3PGYXMQZ8T"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}

const fire = firebase;
export default fire;