import React from 'react';

import styled from 'styled-components';


export const RightContainer = styled.div`
z-index: 2;
    width: 40vw;
    height: ${props=> props.height? props.height: '600px'};
    overflow: hidden;
    margin-inline: 2vw;
    @media screen and (max-width: 600px){
    width: 90vw;
    height: 100vh;
    overflow: unset;
    margin-inline: 0px;
   
  }
`

export const LeftContainer = styled.div`
z-index: 2;
    width: 40vw;
    height: ${props=> props.height? props.height: '600px'};
    overflow: hidden;
    margin-inline: 2vw;
    @media screen and (max-width: 600px){
    display: none;
    width: 90vw;
    height: 100vh;
    overflow: unset;
    margin-inline: 0px;
  }
`


