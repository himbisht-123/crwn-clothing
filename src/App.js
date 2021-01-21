// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage.container.jsx';
import ShopPage from './pages/shopPage/shopPage.component.jsx';
import {Switch,Route,Redirect} from 'react-router-dom';
import Header from './components/header/header.component.jsx';
import SignInandSignUpPage from './pages/sign-in and sign-up Page/sign-in and sign-up.component.jsx';
import {auth,createUserProfileDocument,addCollectionAndDocuments} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user-selectors';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkoutPage/checkout.component';
import {selectCollectionsForPreview} from './redux/shop/shop.selectors';
// const HatsPage=()=>(
//   <div>
//   <h1>Hats Page</h1>
//   </div>
// )

class App extends React.Component {

  unsubscribeFromAuth=null;
  componentDidMount(){
    const {setCurrentUser,collectionsArray}=this.props;
   this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
  const userRef=await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapshot=>{
         setCurrentUser({
             id:snapshot.id,
             ...snapshot.data()
           })
        
       });
      
      }    
      setCurrentUser(userAuth);
      addCollectionAndDocuments('collections',collectionsArray.map(({title,items})=>({title,items})));
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
    <Header/>
     <Switch>  
    <Route  exact path='/' component={Homepage}></Route>
    <Route  path='/shop' component={ShopPage}></Route>
    <Route exact path='/checkout' component={CheckoutPage}></Route>
    <Route  exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SignInandSignUpPage/>)}>
    </Route>
    </Switch>
     </div>
  );
}
}
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  collectionsArray:selectCollectionsForPreview
})
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
