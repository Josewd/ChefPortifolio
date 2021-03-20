import React from 'react';
import styled from 'styled-components'
import { goTo } from '../utils/goToFunction'
const Nav = styled.div`
    position: fixed;
    z-index: 2;
    top:0px;
    left: 0px;
    display: flex;
    background-color: ${props=> props.color? props.color: 'transparent'};
    align-items: center;
    justify-content: flex-end;
    height: 70px;
    width: 100vw;
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
  return (
    <Nav color={props.color}>
        <LinkButton href="#">Home</LinkButton>
        <LinkButton onClick={()=>goTo('/about')} href="#about">About Me</LinkButton>
        <LinkButton href="#">Work & Education</LinkButton>
        <LinkButton href="#">References</LinkButton>
        <LinkButton href="#">My Work & Gallery</LinkButton>
    </Nav>
  );
}
