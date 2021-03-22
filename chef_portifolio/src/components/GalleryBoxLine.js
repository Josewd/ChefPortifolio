import styled from 'styled-components';

export const LinerLayout = styled.div`

    width: 100%;
    z-index: 2;
    height: max-content;
    display: flex;
    flex-flow: wrap row;
    align-items: flex-start;
    justify-content: space-between;
`;

export const CustomBoxes = styled.div`
    z-index: 2;
    align-self: center;
    margin: auto;
    width: ${props=>props.width};
    height: max-content;
    @media screen and (max-width: 600px){
    width: 90vw;
    margin: auto;
  }

` 

