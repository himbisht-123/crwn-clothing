import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyD3QO_JrmM-GyT1vBGBP4W1dHLfRtWlUqA",
    authDomain: "mywebproject-a9111.firebaseapp.com",
    projectId: "mywebproject-a9111",
    storageBucket: "mywebproject-a9111.appspot.com",
    messagingSenderId: "403268101212",
    appId: "1:403268101212:web:b1400b00edab25c2c57299",
    measurementId: "G-Z60HL27TXE"
  };

  firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
