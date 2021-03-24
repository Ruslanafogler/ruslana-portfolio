import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import './Components/FontAwesomeIcons';
import ProjectSimple from './Routes/ProjectSimple';

import HomePage from './Routes/HomePage';
import 'react-photoswipe/lib/photoswipe.css';


function App() {
 

  return (
    <main>
      
      <Switch>
        <Route exact path = '/'>
          <Redirect to='/home'/>
        </Route>
        <Route exact path = '/home' component={HomePage}/>
        <Route  exact path = '/projects/:projectname' component={ProjectSimple}/>
        
        <Redirect to='/home'/>

      </Switch>
      
    </main>
   
  );
}

export default App;
