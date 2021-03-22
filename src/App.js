import React from 'react'
import HomePage from './screens/Home';
import WorkEducation from './screens/WorkEducation'
import { useState } from 'react';
import AboutMe from './screens/AboutMe';
import NavBar from './components/Nav';
import {Switch, Route,BrowserRouter, } from 'react-router-dom'
import Gallery from './screens/Gallery';
import Menu from './components/MenuIcon';




function App() {
  const [color, setColor] = useState(false) 
  const [menuState, setMenuState]= useState('paused')
  const handleShowMenu = ()=>{
    if(menuState === 'paused' || menuState === 'reverse'){
      setMenuState('running')
      console.log(menuState)
    }else if(menuState ==='running'){
      console.log(menuState)
      setMenuState('reverse')
    }
  }
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
        <Menu onClick={handleShowMenu} />
      <NavBar color={color? '#372D2D': color} showNavBar={menuState}/>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' render={props=>(
          <React.Fragment>
             <HomePage HomePage='#home' /> 
             <AboutMe AboutMe='#about' />
             <WorkEducation/>
             <Gallery/>
         </React.Fragment>
        )}/>
      </Switch>
      </BrowserRouter>
  
    </>
    
  
  );
}

export default App;
