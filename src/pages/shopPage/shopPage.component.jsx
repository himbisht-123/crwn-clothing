//import { render } from '@testing-library/react';
import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';
import {connect} from 'react-redux';
import CollectionPage from '../collection/collection.component';
import '../../components/collectionPreview/collectionPreview.component';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions.js';
//import {updateCollections} from '../../redux/shop/shop.actions.js';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors.js';

const CollectionPageWithSpinner=WithSpinner(CollectionPage);
 class ShopPage extends React.Component{

   
     componentDidMount(){
       const {fetchCollectionsStart}=this.props;
         fetchCollectionsStart();
     }
  render(){
    const {match,isCollectionsLoad}=this.props;
   
    return(

      <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
      <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={!isCollectionsLoad} {...props}/>}></Route>  
     </div>
); 
    
  }
}
 
const mapStateToProps=createStructuredSelector({
 
   isCollectionsLoad:selectIsCollectionsLoaded
})
const mapDispatchToProps=dispatch=>({
 fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);