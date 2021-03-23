import React from 'react';
import { useState } from 'react';
import styled, {keyframes} from 'styled-components';

const typing = keyframes`
    from { width: 0 }
    to { width: 50% }
`

const blank = keyframes`
    from, to { border-color: transparent }
    50% { border-color: white; }

`
const Title = styled.div`
    margin-top: 50px;
    width: max-content;
    font-family: 'Scope one';
    font-size: 30px;
    color: white;
    letter-spacing: .15rem;
    white-space: nowrap;
    text-decoration: solid white 2px;
    margin-bottom: 20px;
    overflow: hidden;
    border-right: .15rem solid white;
    animation:
     ${typing} 3.5s steps(40, end) ${props=> props.play},
     ${blank} .75s step-end infinite;
     @media screen and (max-width: 600px){
         margin-top: -40px;
     }
`
export const PageTitle = styled.div`
    position: absolute;
    top: 8vh;
    left: 3vw;
    font-size: 30px;
    width: 300px;
    padding-left: 10px;
    color: white;
    font-family: 'Scope one';
    border-bottom: 1px solid white;
`

const DescriptionBox = styled.div`
    width: 500px;
    height: max-content;
    word-wrap: break-word;
    letter-spacing: 0.5px;
    font-family: 'Scope one';
    font-size: 16px;
    color: white;
    @media screen and (max-width: 600px){
        width: 80vw;
    }
`
const Button = styled.a`
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#c4c4c4;
    color: black;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-family: 'Scope one';
    font-size: 14px;
    &:hover{
        transition: ease-in-out 1s;
       background-color : #999797
    }
`
const BoxButton = styled.div`
    margin: 40px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`


export default function AboutTextBox(props) {
    const [animation, setAnimation]=  useState('paused')
    const handleAnimation = ()=>{
        if(document.scrollingElement.scrollTop >= 702){
            setAnimation('running')
        }
    }
    document.addEventListener('scroll', handleAnimation)
  return (
      <div>
          <PageTitle>About Me</PageTitle>
          <Title play={animation}>{props.title} </Title>
          <DescriptionBox>{props.description}</DescriptionBox>
          <BoxButton>
              <Button href='/chef_jose_CV.pdf' download>Download my CV</Button>
          </BoxButton>
      </div>
  );
}
