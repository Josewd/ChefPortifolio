import React from 'react';

import styled from 'styled-components';


export const Container = styled.div`
z-index: 2;
    width: 400px;
    height: ${props=> props.height? props.height: '600px'};
    overflow: hidden;
    margin-inline: 84px;
`

export default function PngHolder(props) {
  return (
    <Container height={props.height}>
        {props.children}
    </Container>
  );
}
