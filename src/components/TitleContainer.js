import React from 'react';

import styled from 'styled-components';

export const TextTitle = styled.div`
        width: 450px;
        height: 66px;
        font-family: 'Scope One';
        font-size: 60px;
        color: #372D2D;
        @media screen and (max-width: 600px){
          font-size: 40px;
          width: 300px;
          height: 45px;
        }
        
`

const Container = styled.div`
    position: absolute;
    top: 355px;
    left: 185px;
    width: max-content;
    height: 195px;
    border-bottom: 2px solid #372D2D;
    @media screen and (max-width: 600px){
      top: 50px;
      left: 35px;
      height: 145px;
    }
`


export default function TitleContainer() {
  return (
  <Container>
      <TextTitle>Hi, I am</TextTitle>
      <TextTitle>Jose Silva</TextTitle>
      <TextTitle>Chef de Cuisine</TextTitle>
  </Container>
  );
}
