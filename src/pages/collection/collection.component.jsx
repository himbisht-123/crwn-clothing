import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors.js';

import CollectionItem from '../../components/collection-item/collectionItem.component';
import {CollectionItemContainer,CollectionPageContainer,CollectionTitle} from './collection.style';
//import './collection.style.scss';

const CollectionPage=({collection})=>{
    const {title,items}=collection;
    return(
    <CollectionPageContainer>
    <CollectionTitle>{title}</CollectionTitle>
    <CollectionItemContainer>
    {
          items.map(item=>(<CollectionItem key={item.id} item={item}></CollectionItem>))
    }
    </CollectionItemContainer>
    </CollectionPageContainer>
)}
const mapStateToProps=(state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);