import {call,put, takeLatest,all} from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import {firestore,convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import {fetchCollectionsFailure,fetchCollectionsSuccess} from './shop.actions.js';
export function* fetchCollectionsAsync(){

    try{
     const collectionRef=firestore.collection('collections');
     const snapshot=yield collectionRef.get();
     const collectionsMap=yield call(convertCollectionSnapshotToMap,snapshot);
     yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync)
} 
export function* shopSaga(){
    yield all([call(fetchCollectionsStart)])
}
