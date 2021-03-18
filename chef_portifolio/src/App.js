import logo from './logo.svg';
import './App.css';
import HomePage from './screens/Home';
import { useState } from 'react';


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
    
    <><HomePage navColor={color? '#372D2D': color}/>
    <HomePage navColor={color? '#372D2D': color}/></>
    
  
  );
}

export default App;
