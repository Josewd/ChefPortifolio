import React from 'react';

import styled from 'styled-components';

export const Container = styled.div`
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -400px;
    margin-right: 100px;
    width: 514px;
    height: 497px;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.92);
    overflow: hidden; 
    @media screen and (max-width: 600px){
        margin: 0px;
        margin-top: 20px;
        transform: scale(0.6);
    }
`;

const Image = styled.img`
    width: 550px;
    height: 800px;
`


export default function Photo(props) {
  return (
   <Container>
       <Image src={props.image}/>
   </Container>
  );
}
