import React from 'react';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

import styled from 'styled-components';
import { goTo } from '../utils/goToFunction';

export const Button = styled.a`
    height: 24px;
    width: 24px;
    border-radius: 50%;
    font-size: 30px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
    color: gray;
    filter: opacity(50%);
    &:hover{
        transition:  ease-in-out 0.5s;
        height: 28px;
        width: 28px;
        border-radius: 50%;
        font-size: 30px;

    }

`;


export default function DropDownButton() {
  return (
    <Button onClick={()=>goTo('/about')} href='#'>
        <ArrowDropDownCircleIcon fontSize='inherit' color='inherit'/>
    </Button>
  );
}
