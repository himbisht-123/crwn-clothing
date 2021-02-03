import {createStore,applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
//import logger from 'redux-logger';
import rootReducer from './root-reducer';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootsaga from './root-saga';
const sagaMiddleware=createSagaMiddleware();


 
const middlewares=[sagaMiddleware];

export const store=createStore(rootReducer,applyMiddleware(...middlewares));

sagaMiddleware.run(rootsaga);

export const persistor=persistStore(store);

// export const {store,persistor};