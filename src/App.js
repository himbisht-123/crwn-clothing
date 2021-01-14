// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage.container.jsx';
import ShopPage from './pages/shopPage/shopPage.component.jsx';
import {Switch,Route} from 'react-router-dom';
import Header from './components/header/header.component.jsx';
import SignInandSignUpPage from './pages/sign-in and sign-up Page/sign-in and sign-up.component.jsx';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

// const HatsPage=()=>(
//   <div>
//   <h1>Hats Page</h1>
//   </div>
// )

class App extends React.Component {

  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null;
  componentDidMount(){
   this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
  const userRef=await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapshot=>{
         this.setState({
           currentUser:{
             id:snapshot.id,
             ...snapshot.data()
           }
         })
       });
      
      }    
      this.setState({currentUser:userAuth});
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
     <Switch>  
    <Route  exact path='/' component={Homepage}></Route>
    <Route  path='/shop' component={ShopPage}></Route>
    <Route path='/signin' component={SignInandSignUpPage}></Route>
    </Switch>
     </div>
  );
}
}

export default App;
