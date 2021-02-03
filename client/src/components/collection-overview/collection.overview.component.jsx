import React from 'react';
 import CollectionPreview from '../collectionPreview/collectionPreview.component.jsx';
import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors.js';
import {createStructuredSelector} from 'reselect';
// import './collection.overview.style.scss';
 import {CollectionOveriewContainer} from './collection.overview.style.jsx';


const CollectionsOverview=({collections})=>(
   <CollectionOveriewContainer>
   {
    collections.map(({id,...otherCollectionProps})=>(
        <CollectionPreview key={id}{...otherCollectionProps}/>
    ))
}
   
   </CollectionOveriewContainer>) 

   const mapStateToProps=createStructuredSelector({
    collections:selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview)   