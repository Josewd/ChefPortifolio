import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import React from 'react';

export const Container = styled.div`
  display: none;
  z-index: 3;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px){
      display: block;
      cursor: pointer;
      color: black;
  }
`;



export default function Menu(props) {
  return (
    <Container onClick={props.onClick}>
        <MenuIcon 
        fontSize='inherit'
        color='inherit'
        />
    </Container>
  );
}

