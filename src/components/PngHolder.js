import React from 'react';

import styled from 'styled-components';


export const RightContainer = styled.div`
z-index: 2;
    width: 400px;
    height: ${props=> props.height? props.height: '600px'};
    overflow: hidden;
    margin-inline: 84px;
    @media screen and (max-width: 600px){
    display: none;
   
  }
`

export const LeftContainer = styled.div`
z-index: 2;
    width: 400px;
    height: ${props=> props.height? props.height: '600px'};
    overflow: hidden;
    margin-inline: 84px;
    @media screen and (max-width: 600px){
    width: 90vw;
    height: 100vh;
    overflow: unset;
    margin-inline: 0px;
  }
`


