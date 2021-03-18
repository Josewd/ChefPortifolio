import React from 'react';
import NavBar from '../components/Nav';
import { Ball } from '../components/BackGroundBall';
import { Screen } from '../components/MainContainer';
import SocialIcons from '../components/SocialIcons';
import hand from '../assets/chef_junior5.png'
import chef from '../assets/jose.png'
import PngHolder from '../components/PngHolder';
import { ImageContainer } from '../components/ImageHome';
import TitleContainer from '../components/TitleContainer';
import DropDownButton from '../components/DropDownButton';


export default function HomePage(props) {

  return (
    <Screen>
        <NavBar color={props.navColor}/>
        <Ball/>
        <SocialIcons/>
        <PngHolder height='700px'>
        <ImageContainer 
            width='400px' 
            height='600px' 
            src={hand}/>
        </PngHolder>
        <TitleContainer/>
        <DropDownButton/>
        <PngHolder>
        <ImageContainer 
            width='400px' 
            height='600px' 
            src={chef}/>
        </PngHolder>
  </Screen>

  );
}
