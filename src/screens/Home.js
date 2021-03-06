import React from 'react';
import NavBar from '../components/Nav';
import { Ball } from '../components/BackGroundBall';
import MainContainer from '../components/MainContainer';
import SocialIcons from '../components/SocialIcons';
import hand from '../assets/chef_junior5.png'
import chef from '../assets/jose.png'
import { LeftContainer, RightContainer } from '../components/PngHolder';
import { ImageContainer } from '../components/ImageHome';
import TitleContainer from '../components/TitleContainer';
import DropDownButton from '../components/DropDownButton';


export default function HomePage(props) {

  return (
    <MainContainer>
        <Ball/>
        <SocialIcons/>
        <LeftContainer height='700px'>
        <ImageContainer 
            width='400px' 
            height='600px' 
            src={hand}/>
        </LeftContainer>
        <TitleContainer/>
        <DropDownButton/>
        <RightContainer>
        <ImageContainer 
            width='400px' 
            height='600px' 
            src={chef}/>
        </RightContainer>
  </MainContainer>

  );
}
