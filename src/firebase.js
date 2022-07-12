import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBz2ifRW1Ch4lg3n6p8gkmEFU_pXziqhi4",
    authDomain: "snvchat.firebaseapp.com",
    projectId: "snvchat",
    storageBucket: "snvchat.appspot.com",
    messagingSenderId: "124077347781",
    appId: "1:124077347781:web:496ffef362012f3da8f1ac"
  }).auth();