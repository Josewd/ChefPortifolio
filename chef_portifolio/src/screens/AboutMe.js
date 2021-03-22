import React from 'react';
import BackgroundSquare from '../components/BackgroundSquare';
import MainContainer, { Screen } from '../components/MainContainer';
import AboutTextBox from '../components/AboutBoxText'
import Photo from '../components/AboutPhoto';
import Image from '../assets/chef_junior.jpg'

export default function AboutMe(props) {
  return (
    <MainContainer>
        <BackgroundSquare>
            <Photo image={Image}/>
            <AboutTextBox title='I am Jose Silva, ' description='Experience Chef de Partie, Pastry and Sushi Chef with 10 years experience in both teaching and preparing/presenting food in Ireland and Brazil. My last posiion was as  Pastry Chef in Rustic by Dylan McGrath and now I am looking to expand my skill set in Dublin'/>
        </BackgroundSquare>
    </MainContainer>
  );
}
