import React from 'react';
import styled from 'styled-components';

export const Ball = styled.div`
    position: absolute;
    width: 1100px;
    height: 1100px;
    border-radius: 50%;
    left: 651px;
    top: -483px;
    background: #372D2D;
    @media screen and (max-widht: 600px){
      display: none;
  }
`;

export default function BackgroundBall() {
  return (
    <Ball/>
  );
}
