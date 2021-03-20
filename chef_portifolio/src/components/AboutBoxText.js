import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    margin-top: 50px;
    font-family: 'Scope one';
    font-size: 30px;
    color: white;
    text-decoration: solid white 2px;
    margin-bottom: 20px;
`
const PageTitle = styled.div`
    position: absolute;
    top: 65px;
    left: 40px;
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
  return (
      <div>
          <PageTitle>About Me</PageTitle>
          <Title>{props.title}</Title>
          <DescriptionBox>{props.description}</DescriptionBox>
          <BoxButton>
              <Button href='/chef_jose_CV.pdf' download>Download my CV</Button>
          </BoxButton>
      </div>
  );
}
