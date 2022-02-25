import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useEffect, useState } from "react";
import Carousel from './Components/carousel';
import About from './Components/about';
import Info from './Components/info';
import Compare from './Compare/compare'

function App() {
  const [state, setState] = useState([]);

  const getData = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    setState(data);
    console.log("Data: ",data);
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <div>
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbarMd">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div class="navbar-collapse collapse" id="collapsingNavbarMd">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/home"><h4 className="links">HOME</h4></Link>
              </li>
              <li class="nav-item">
                <Link to="/characters"><h4 className="links">CHARACTERS</h4></Link>
              </li>
              <li class="nav-item">
                <Link to="/compare"><h4 className="links">COMPARE</h4></Link>
              </li>
              <li class="nav-item">
                <Link to="/quiz"><h4 className="links">TAKE A QUIZ</h4></Link>
              </li>
            </ul>
          </div>
        </nav>
   
  
  <Switch>
  <Route path="/home">
          <div>
            <Carousel/>
            <Info/>
            <About/>
          </div>
  </Route>
  <Route path="/compare">
  {state && (
            <Compare data={state}></Compare>
  )}
    
  </Route>
  </Switch>
  </div>
  </Router>
  </div>
  );
}

export default App;
