// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDSzznyKEMJKzngXgcYt0FznKC6ip7N2J4',
    authDomain: 'react-netflix-clone-1e4b3.firebaseapp.com',
    projectId: 'react-netflix-clone-1e4b3',
    storageBucket: 'react-netflix-clone-1e4b3.appspot.com',
    messagingSenderId: '565864114801',
    appId: '1:565864114801:web:32a9dc8c2da3de886e89d0',
    measurementId: 'G-YMM6074WQE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
