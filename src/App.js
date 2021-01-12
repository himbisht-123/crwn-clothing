// import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/homepage.container.jsx';
import {Switch,Route} from 'react-router-dom';

const HatsPage=()=>(
  <div>
  <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
     <Switch>  
    <Route  exact path='/' component={Homepage}></Route>
    <Route  path='/hats' component={HatsPage}></Route>
    </Switch>
     </div>
  );
}

export default App;
