import React from 'react';
import styled, {keyframes} from 'styled-components'
import { goTo } from '../utils/goToFunction'

const navBarShow = keyframes`
  0% {left: -80vw}
  35% {left: -50vw}
  60% {left: -30vw}
  100% {left: 0px}

`
const Nav = styled.div`
    position: fixed;
    z-index: 2;
    top:0px;
    left: 0px;
    display: flex;
    background-color: ${props=> props.color? props.color: 'transparent'};
    align-items: center;
    justify-content: flex-end;
    height: 10vh;
    width: 100vw;
    @media screen and (max-width: 600px){
    width: 80vw;
    height: 100vh;
    background-color: #372D2D;
    position: absolute;
    left: -80vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${navBarShow} 1s steps(40, end) ${props=> props.play};
    animation-fill-mode: forwards;
    
  }
`

const LinkButton = styled.a`
    text-decoration: none;
    padding: 5px;
    margin: 20px;
    color: white;
    font-size: 16px;
    font-family: 'Scope One';
    font-weight: 400;
    &:focus{
        text-decoration:underline;
    }
`


export default function NavBar(props) {
  console.log(props)
  return (
    <Nav color={props.color} play={props.showNavBar? props.showNavBar: 'paused'}>
        <LinkButton onClick={()=>goTo('/')} href="#">Home</LinkButton>
        <LinkButton onClick={()=>goTo('/about')} href="#about">About Me</LinkButton>
        <LinkButton onClick={()=>goTo('/work_education')} href="#work_education">Work & Education</LinkButton>
        {/* <LinkButton  href="#gallery">References</LinkButton> */}
        <LinkButton onClick={()=>goTo('/work_gallery')} href="#gallery">My Work & Gallery</LinkButton>
    </Nav>
  );
}
