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

export const createUserProfileDocument=async (userAuth,additionalData)=>{
  if(!userAuth) return;
  const userRef=firestore.doc(`users/${userAuth.uid}`);

  const snapShot=await userRef.get();

  console.log(snapShot);

  if(!snapShot.exists){
    const {displayName,email}=userAuth;

    const createdAt=new Date();
    try{
      await userRef.set({
        displayName,email,createdAt,
        ...additionalData
      })
    }
    catch(error){
     console.log(error.message);
    }
  }
   return userRef;
}


  firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
