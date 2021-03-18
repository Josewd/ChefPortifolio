import React from 'react';
import styled from 'styled-components';

export const ImageContainer = styled.img`
    width: ${props=>props.width};
    height: ${props =>props.height};
`

export default function ImageHome(props) {
  return (
    <ImageContainer
         width={props.width}
         height={props.height}
         src={props.src}/>
  );
}
