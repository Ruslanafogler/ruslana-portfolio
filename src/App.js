import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import './Components/FontAwesomeIcons';


import About from "./Components/About";
import BottomBar from "./Components/BottomBar";
import Home from './Components/Home';
import Projects from "./Components/Projects";


function App() {
 

  return (
    <div className='webContainer'>
      <Home />
     <Projects />
      <About />
      <BottomBar/>
    </div>
   
  );
}

export default App;
