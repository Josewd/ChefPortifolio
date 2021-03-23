import React from 'react';
import styled from 'styled-components';

export const ImageContainer = styled.img`
    width: ${props=>props.width};
    height: ${props =>props.height};
    overflow: hidden;
    margin: 5px;
    @media screen and (max-width: 600px){
      width: 350px;
      height: 80vh;
      margin-top: 20vh;
      margin-left: -50px;
    }
`

export default function ImageHome(props) {
  return (
    <ImageContainer
         width={props.width}
         height={props.height}
         src={props.src}/>
  );
}
