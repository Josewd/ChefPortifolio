import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
position: relative;
  width: 550px;
  height: max-content;
  padding-bottom: 10px;
  @media screen and (max-width: 600px){
      width: 90vw;
  }
`
const Title = styled.a`
    display: flex;
    text-decoration: none;
    color: black;
    align-items: center;
    justify-content: flex-start;
    width: 95%;
    margin: auto;
    border-bottom: 1px solid black;
    font-family: 'Scope one';
    font-size: 25px; 
    @media screen and (max-width: 600px){
        font-size: 18px;
    }
`
const SubTitle = styled(Title)`
    font-size: 20px;
    border-bottom: none;
    @media screen and (max-width: 600px){
        font-size: 14px;
    }
`
const Description = styled.div`
    border-left: 1px solid;
    font-size: 16px;
    font-family: 'Scope one';
    word-wrap: break-word;
    padding-left: 5px;
    width: 100%;
    @media screen and (max-width: 600px){
        font-size: 14px;
    }
`

const Dot = styled.div`
    position: absolute;
    top: 10px;
    left: -5px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: black;
`



export default function WorkField(props) {
  return (
    <Container>
            <Dot/>
        <Title href={props.link} target='_blank'>
            {props.title}
        </Title>
        <Description>
            <SubTitle>{props.subtitle}</SubTitle>
            {props.description}
        </Description>
    </Container>
  );
}
