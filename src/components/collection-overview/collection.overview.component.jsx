import React from 'react';
 import CollectionPreview from '../collectionPreview/collectionPreview.component.jsx';
import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors.js';
import {createStructuredSelector} from 'reselect';
 import './collection.overview.style.scss';

const CollectionsOverview=({collections})=>(
   <div className='collections-overview'>
   {
    collections.map(({id,...otherCollectionProps})=>(
        <CollectionPreview key={id}{...otherCollectionProps}/>
    ))
}
   
   </div>) 

   const mapStateToProps=createStructuredSelector({
    collections:selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview)   