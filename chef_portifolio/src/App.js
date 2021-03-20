import React from 'react'
import './App.css';
import HomePage from './screens/Home';
import { useState } from 'react';
import AboutMe from './screens/AboutMe';
import NavBar from './components/Nav';
import {Switch, Route,BrowserRouter, } from 'react-router-dom'


function App() {
  const [color, setColor] = useState(false) 
  const handleScroll = ()=>{

      if(document.scrollingElement.scrollTop >= 400){
          setColor( true)
      }else{
          setColor(false)
      }
  }
  document.addEventListener('scroll', handleScroll)

  return (
    <>
      <NavBar color={color? '#372D2D': color}/>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' render={props=>(
         <React.Fragment>
             <HomePage HomePage='#home' /> 
             <AboutMe AboutMe='#about' />
         </React.Fragment>
        )}/>
      </Switch>
      </BrowserRouter>
  
    </>
    
  
  );
}

export default App;
