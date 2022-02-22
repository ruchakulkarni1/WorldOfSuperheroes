import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useEffect, useState } from "react";
import Carousel from './Components/carousel';

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
          <a class="navbar-brand inactiveLink"><h1 className="links">WORLD OF SUPER HEROS</h1></a>
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
          </div>
  </Route>
  </Switch>
  </div>
  </Router>
  </div>
  );
}

export default App;
