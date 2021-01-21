//import { render } from '@testing-library/react';
import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collection-overview/collection.overview.component';
import {connect} from 'react-redux';
import CollectionPage from '../collection/collection.component';
import '../../components/collectionPreview/collectionPreview.component';
import {firestore,convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions.js';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner=WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionPage);
 class ShopPage extends React.Component{

     state={
       loading:true
     };
     unsubscribeFromSnapshot=null;
     
     componentDidMount(){
       const {updateCollections}=this.props;
       const collectionRef=firestore.collection('collections');
    
       collectionRef.get().then(snapshot=>{
        const collectionsMap=convertCollectionSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({loading:false});
      })  
}
  render(){
    const {match}=this.props;
    const {loading}=this.state;
    return(

      <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props}></CollectionsOverviewWithSpinner>} />
      <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props}/>}></Route>  
     </div>
); 
    
  }
}
            
const mapDispatchToProps=dispatch=>({
  updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
})
export default connect(null,mapDispatchToProps)(ShopPage);