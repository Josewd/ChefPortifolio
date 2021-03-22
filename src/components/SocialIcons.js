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
`
const IconBox = styled.div`
    font-size: 24px;
    height: 30px;
    width: 30px;
    color: white;
    cursor: pointer;
    &:hover{
        filter: opacity(70%);
    }
`


export default function SocialIcons() {
  return (
   <Container>
       <IconBox><FacebookIcon color="inherit" fontSize="inherit" /></IconBox>
       <IconBox><LinkedInIcon color="inherit" fontSize="inherit" /></IconBox>
       <IconBox><InstagramIcon color="inherit" fontSize="inherit" /></IconBox>
       <IconBox><WhatsAppIcon color="inherit" fontSize="inherit" /></IconBox>
       <IconBox><TwitterIcon color="inherit" fontSize="inherit" /></IconBox>
   </Container>
  );
}
