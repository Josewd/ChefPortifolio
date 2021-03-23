import React from 'react';
import styled from 'styled-components';
import MainContainer from '../components/MainContainer';
import WorkField from '../components/WorkField';

export const LeftContainer = styled.div`
    width: max-content;
    height: 70vh;
    margin-left: 5vw;
    background-color: #f3f3f3;
    padding:20px;
    border-radius: 5px;
    align-self: center;
    margin-top: 150px;
    @media screen and (max-width: 800px){
     margin: auto;
      height: max-content;
    }
`
export const RightContainer = styled.div`
     width: max-content;
    height: 70vh;
    margin-right: 5vw;
    background-color: #f3f3f3;
    padding:20px;
    border-radius: 5px;
    align-self: center;
    margin-top: 150px;
    @media screen and (max-width: 800px){
      margin: auto;
      height: max-content;
  
    }
`
const PageTitle = styled.div`
    position: absolute;
    top: 85px;
    left: 40px;
    font-size: 30px;
    width: 300px;
    padding-left: 10px;
    font-family: 'Scope one';
    border-bottom: 1px solid;
    @media screen and (max-width: 600px){
        position: unset;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 10px;
    }
`
export default function WorkEducation() {
  return (
    <MainContainer>
        <PageTitle>Work & Education</PageTitle>
        <LeftContainer>
          <WorkField
            link='https://www.instagram.com/tastebydylan/'
            title='Pastry Chef - Taste By Dylan McGrath'
            subtitle='Nov-2019 / Mar-2020'
            description='Pastry Chef responsible for seven different desserts including ice creams and sorbets, donuts, cakes, brulees, panna cotta, mousse, flan, cheesecake and Mochi
            Prepare pastry, dessert and biscuit products to the standard of The Butler’s Pantry
            Participate in an ongoing way in the development of new products and baking techniques'
             />
              <WorkField
            title='Chef de partie - Fade Street Social'
            subtitle='May-2018 / Nov-2019'
            description='Chef di Partie on the Tapas restaurant, maintaining flexibility in day to day activities to ensure customers orders can be accommodated and fast serving with a high quality and dish presentation. '
            />
          <WorkField
            title='Pastry Chef - Shelbourne Shellbourne'
            subtitle='Apr-2017 / May-2018'
            description='Pastry chef responsible for bread section baking sourdough bread, 
            focaccia, bao bun, burger bun and flatbreads and dessert as all kind of financiers, 
            glaze cakes, puddings, soft serve ice creams, mousses, cheesecakes, temper dark,
             white and milk chocolates. '
            />
        </LeftContainer>
        <RightContainer>
             <WorkField
            title='Japanese Cuisine Course - Sushi Club'
            subtitle='Nov-2011 / Nov-2012'
            description='A Imersive course of japanese culinary and culture.
            learning tecniques of sushi, nigiris, gohan, sashimi, tempura, wasabi, etc'
         />
           <WorkField
            title='Food on the Edge - Galway Event'
            subtitle='Aug -2019'
            description='An International Symposium of chefs coming together to discuss the future of food.'
         />
        </RightContainer>
       
    </MainContainer>
  );
}
