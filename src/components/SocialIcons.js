import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 38px;
    height: 266px;
    left: 1302px;
    top: 167px;
    background: #372D2D;
    @media screen and (max-width: 600px){
      left: unset;
      right: 20px;
      bottom: 20px;
      top: unset;
      border-radius: 10px;
    }
`
const IconBox = styled.a`
    font-size: 24px;
    text-decoration: none;
    height: 30px;
    width: 30px;
    margin: auto;
    color: white;
    cursor: pointer;
    &:hover{
        filter: opacity(70%);
    }
`


export default function SocialIcons() {
  return (
   <Container>
       <IconBox href='https://www.facebook.com/jose.thenameextrabig' target='_blanck'><FacebookIcon color="inherit" fontSize="inherit" /></IconBox>
       <IconBox href='https://www.linkedin.com/in/josevaldirjunior/' target='_blanck'><LinkedInIcon color="inherit" fontSize="inherit" /></IconBox>
       <IconBox href='https://www.instagram.com/chefjosebr/' target='_blanck'><InstagramIcon color="inherit" fontSize="inherit" /></IconBox>
       <IconBox href='https://wa.link/bi79im' target='_blanck'><WhatsAppIcon color="inherit" fontSize="inherit" /></IconBox>
       <IconBox href='https://twitter.com/JoseB1873301' target='_blanck'><TwitterIcon color="inherit" fontSize="inherit" /></IconBox>
   </Container>
  );
}
