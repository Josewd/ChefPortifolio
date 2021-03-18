import React from 'react';
import styled from 'styled-components';


export const Screen = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  z-index: 1;
`

export default function Container(props) {
  return (
    <Screen>
        {props.children}
    </Screen>
  );
}
