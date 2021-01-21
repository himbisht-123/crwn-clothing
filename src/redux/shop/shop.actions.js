import ShopActionTypes from './shop.types.jsx';

export const updateCollections=(collectionsMap)=>({
    type:ShopActionTypes.UPDATE_COLLECTIONS,
    payload:collectionsMap
})