import {takeLatest,call,all, put} from 'redux-saga/effects';
import userActionTypes from './user.types'; 
import {auth,googleProvider,createUserProfileDocument,getCurrentUser} from '../../firebase/firebase.utils';
import {SignInFailure,SignInSuccess,signOutSuccess,signOutFailure,signUpSuccess,signUpFailure} from '../user/user.action.js';

export function* getSnapshotFromUserAuth(userAuth,additionalData){
    try{
    const userRef=yield call(createUserProfileDocument,userAuth,additionalData);
    const userSnapshot=yield userRef.get();
    yield put(SignInSuccess({id:userSnapshot.id,...userSnapshot.data()}));
}
catch(error){
    yield put(SignInFailure(error));  
}
} 

export function* signInWithGoogle(){
    try{
      const {user}=yield auth.signInWithPopup(googleProvider);
yield getSnapshotFromUserAuth(user);
    }
    catch(error){
        yield put(SignInFailure(error));
    }
}
export function* onGoogleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* userSagas(){
   yield all([call(onGoogleSignInStart),call(onEmailSignInStart),call(onCheckUserSession),call(onSignOutStart),call(onSignUpStart),call(onSignUpSuccess)])
}
//email generator functions//

export function* SignInWithEmail({payload:{email,password}}){
  try{
     const {user}=yield auth.signInWithEmailAndPassword(email,password);
     yield getSnapshotFromUserAuth(user);
  }
  catch(error){
      yield put(SignInFailure(error));
  }
}
export function* onEmailSignInStart(){
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START,SignInWithEmail);
}
//check user session//

export function* isUserAuthenticated(){
 try{
    const userAuth=yield getCurrentUser();
    if(!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth); 
}
 catch(error){
    yield put(SignInFailure(error));

 }
}

export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}
//sign out//
export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }
    catch(error){
     yield put(signOutFailure(error))
    }
}

export function* onSignOutStart(){
    yield takeLatest(userActionTypes.SIGN_OUT_START,signOut)
}
//sign up//

export function* signUp({payload:{email,password,displayName}}){
    try{
        const {user}=yield auth.createUserWithEmailAndPassword(email,password);
        yield put(signUpSuccess({user,additionalData:{displayName}}));
    }
    
    catch(error){
    yield put(signUpFailure(error));
    }
}

export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGN_UP_START,signUp)
}

export function* signInAfterSignUp({payload:{user,additionalData}}){
    yield getSnapshotFromUserAuth(user,additionalData);

}
export function* onSignUpSuccess(){
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp);
}