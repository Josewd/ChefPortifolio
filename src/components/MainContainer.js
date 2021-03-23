import React from 'react';
import styled from 'styled-components';


export const Screen = styled.div`
 height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;

  z-index: 1;
  flex-flow: wrap row;
  @media screen and (max-width: 600px){
    height: fit-content;
  }
`

export default function MainContainer(props) {
  return (
    <Screen>
        {props.children}
    </Screen>
  );
}
