import React from 'react';
import MainContainer from '../components/MainContainer';
import {Triangle} from '../components/BackgroundTriangle'
import { CustomBoxes, LinerLayout } from '../components/GalleryBoxLine';
import crispy from '../assets/crispy.jpg'
import crabCrispy from '../assets/crabCrispy.jpg'
import eggSalad from '../assets/eggSalad.jpg'
import mousse from '../assets/mousse.jpg'
import pearSalad from '../assets/pearSalad.jpg'
import chocoMaki from '../assets/chocomaki.jpg'
import steak from '../assets/steak.jpg'
import gyosa from '../assets/gyosa.jpg'
import chef_junior from '../assets/chef_junior4.jpg'
import sashimi from '../assets/sashimi.jpg'
import ImageHome from '../components/ImageHome';
import styled from 'styled-components';


export const ImageContainer = styled.img`
    cursor: pointer;
    width: ${props=>props.width};
    height: ${props =>props.height};
    overflow: hidden;
    filter: brightness(90%);
    margin: 5px;
    &:hover{
        filter: brightness(100%);
    }
   
`
export const PageTitle = styled.div`
    font-size: 30px;
    width: 300px;
    padding-left: 10px;
    color: white;
    margin-top: 50px;
    font-family: 'Scope one';
    border-bottom: 1px solid white;
   
`


export default function Gallery() {
  return (
    <MainContainer>
        <Triangle/>
        <CustomBoxes width='95%'>
        <PageTitle>Work & Gallery</PageTitle>
            <LinerLayout>
                    <ImageContainer width='300px' height='200px' src={pearSalad} />
                    <ImageContainer width='300px' height='200px' src={chocoMaki} />
                    <ImageContainer width='300px' height='200px' src={eggSalad} />
                    <ImageContainer width='300px' height='200px' src={crispy} />
            </LinerLayout>
            <LinerLayout>
                <CustomBoxes width='25%'>
                    <LinerLayout>
                        <ImageContainer width='370px' height='200px' src={gyosa} />
                        <ImageContainer width='350px' height='200px' src={crabCrispy} />
                    </LinerLayout>
                </CustomBoxes>
                <CustomBoxes width='20%'>
                <LinerLayout>
                        <ImageContainer width='300px' height='400px' src={steak} />
                    </LinerLayout>
                </CustomBoxes>
                <CustomBoxes width='30%'>
                <LinerLayout>
                        <ImageContainer width='380px' height='250px' src={chef_junior} />
                        <ImageContainer width='180px' height='130px' src={crabCrispy} />
                        <ImageContainer width='180px' height='130px' src={sashimi} />
                    </LinerLayout>
                </CustomBoxes>
                <CustomBoxes width='25%'>
                <LinerLayout>
                        <ImageContainer width='350px' height='400px' src={mousse} />
                    </LinerLayout>
                </CustomBoxes>
            </LinerLayout>
        </CustomBoxes>
    </MainContainer>
  );
}
