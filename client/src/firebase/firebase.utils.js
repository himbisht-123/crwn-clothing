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
export const addCollectionAndDocuments=async (collectionkey,objectsToAdd)=>{
  const collectionRef=firestore.collection(collectionkey);
  
  const batch=firestore.batch();
  objectsToAdd.forEach(obj=>{
    const newDocRef=collectionRef.doc();
    batch.set(newDocRef,obj);
  });
    return await batch.commit();
}

export const convertCollectionSnapshotToMap=(collections)=>{
  const transformedCollection=collections.docs.map(
    doc=>{
      const {title,items}=doc.data();
      return{
        routeName:encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
      }
    });
    return transformedCollection.reduce((acc,collection)=>{
      acc[collection.title.toLowerCase()]=collection;
      return acc;
    },{})
} 

export const auth=firebase.auth();
export const firestore=firebase.firestore();

//const provider=new firebase.auth.GoogleAuthProvider();
export const googleProvider=new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(googleProvider);


export const getCurrentUser=()=>{
  return new Promise((resolve,reject)=>{
    const unsubscribe=auth.onAuthStateChanged(userAuth=>{
      unsubscribe();
      resolve(userAuth);
    },reject);
  })
}

export default firebase;
