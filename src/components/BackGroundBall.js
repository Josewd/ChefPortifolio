import React from 'react';
import styled from 'styled-components';

export const Ball = styled.div`
    position: absolute;
    width: 150vh;
    height: 150vh;
    border-radius: 50%;
    right: -60vh;
    top: -70vh;
    background: #372D2D;
    @media screen and (max-width: 600px){
      left: 100px;
      top:50vh;
      width: 550px;
      height: 550px;
  }
`;

export default function BackgroundBall() {
  return (
    <Ball/>
  );
}
