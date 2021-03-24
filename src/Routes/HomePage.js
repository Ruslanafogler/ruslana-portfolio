import React from "react";

import "../App.css";
  
  
import '../Components/FontAwesomeIcons';
  
import About from "../Components/About";
import BottomBar from "../Components/BottomBar";
import Home from '../Components/Home';
import Projects from "../Components/Projects";


export default function HomePage() {
  
    return (
      <div className='webContainer'>
        <Home/>
       <Projects />
        <About />
        <BottomBar/>
      </div>
     
    );
  }
  
  
