import React from 'react';

import styled from 'styled-components';

export const Square = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 80%;
    background-color: #372D2D;
    @media screen and (max-width: 600px){
      width: 100vw;
      flex-direction: column;
    }
`;
export const Blank = styled.div`
    height: 100%;
    width: 20%;
    @media screen and (max-width: 600px){
      display: none;
    }
`;

export default function BackgroundSquare(props) {
  return (
      <>
      <Blank/>
    <Square>{props.children}</Square>
    </>
  );
}
