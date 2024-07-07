
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = ({
    // Replace with your Firebase config object from Firebase Console
    apiKey: "AIzaSyDcxCykLC49zzuNcvemt1GIACGO1xTV1xU",
    authDomain: "hmi-2-c32d3.firebaseapp.com",
    projectId: "hmi-2-c32d3",
    storageBucket: "hmi-2-c32d3.appspot.com",
    messagingSenderId: "314000434722",
    appId: "1:314000434722:web:e06607b4415a4272dc4c7b",
    measurementId: "G-C0M8RP92S4"})

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export { database };
