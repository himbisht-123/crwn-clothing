import {all,call} from 'redux-saga/effects';

import {shopSaga} from './shop/shop.saga.jsx';
import {userSagas} from './user/user.saga';
import {cartSagas} from './cart/cart-sagas.jsx';

export default function* rootsaga(){
    yield all([call(shopSaga),call(userSagas),call(cartSagas)]);
}