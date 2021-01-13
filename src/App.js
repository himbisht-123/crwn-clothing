// import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/homepage.container.jsx';
import ShopPage from './pages/shopPage/shopPage.component.jsx';
import {Switch,Route} from 'react-router-dom';
import Header from './components/header/header.component.jsx';
// const HatsPage=()=>(
//   <div>
//   <h1>Hats Page</h1>
//   </div>
// )

function App() {
  return (
    <div>
    <Header/>
     <Switch>  
    <Route  exact path='/' component={Homepage}></Route>
    <Route  path='/shop' component={ShopPage}></Route>
    </Switch>
     </div>
  );
}

export default App;
