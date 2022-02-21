import logo from './logo.svg';
import './App.css';

import {useEffect, useState } from "react";

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
    <div className="App">
      <h1>Hello World!</h1>
      {state.map((item, index) => {
        const {name} = item;
        return (
          <div>
            <h1>{name}</h1>
          </div>
        )
      })}
    </div>
  );
}

export default App;
