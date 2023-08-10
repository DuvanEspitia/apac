

import {BrowserRouter as Router,Routes, Route,Outlet} from 'react-router-dom';
import './App.css';

import Home from "./home"
import Paques from "./paquetes"
import Paquete1 from "./paquete1"
import Plan2 from "./plan2"
import Plan3 from "./paquete3"
function App() {

  
  return (
    <div className="App">
    <Router>
      
      <Routes>
     
      <Route path='/' exact element ={<Home/>}/>
      <Route path='/paquetes' exact element ={<Paques/>}/>
      <Route path='/paquete1' exact element ={<Paquete1/>}/>
      <Route path='/paquete2' exact element ={<Plan2/>}/>
      <Route path='/paquete3' exact element ={<Plan3/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
