import React, { Component } from 'react';
import styled from 'styled-components';
// import twitterImg from '../../../Assets/Images/Social/twitter.svg';
import githubImg from '../../../Assets/Images/Social/git.svg';
import mailImg from '../../../Assets/Images/Social/mail.svg';
import instaImg from '../../../Assets/Images/Social/insta.svg';
// import dribbbleImg from '../../../Assets/Images/Social/dribbble.svg';
import linkedInImg from '../../../Assets/Images/Social/linkedin.svg';
import SocialLogo from './SocialLogo';
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    margin-top:20vh;
    height: 100vh;
    width:100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;

    /* border: 3px solid blue; */

    /* @media ${device.mobileS} {
    padding-left:60px;
    }
    @media ${device.mobileM} {
    padding-left:60px;
    }
    @media ${device.mobileL} {
    padding-left:60px;
    }
    @media ${device.tablet} {
    padding-left:90px;
    margin-bottom:90px;
    }
    @media ${device.laptop} {
    padding-left:120px;
    margin-bottom:120px;
    } */
`;

const ContactTitle = styled.div`
  font-family: 'AvenirHeavy';
  color: #e4e4e4;
  font-size: 45px;
  @media ${device.mobileS} {
    font-size: 50px;
  }
  @media ${device.mobileM} {
    font-size: 50px;
  }
  @media ${device.mobileL} {
    font-size: 50px;
  }
  @media ${device.tablet} {
    font-size: 50px;
  }
  @media ${device.laptop} {
    font-size: 50px;
  }
`;

const SocialMediaIcons = styled.div`
  z-index: 1;
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 60px;
  grid-gap: 40px;

  /* border: 2px solid black; */

  @media ${device.mobileS} {
    margin-top: 60px;
    grid-gap: 40px;
  }
  @media ${device.mobileM} {
    margin-top: 60px;
    grid-gap: 60px;
  }
  @media ${device.mobileL} {
    margin-top: 60px;
    grid-gap: 70px;
  }
  @media ${device.tablet} {
    margin-top: 60px;
    grid-gap: 80px;
  }
  @media ${device.laptop} {
    margin-top: 60px;
    grid-gap: 80px;
  }
`;

class Contact extends Component {
  render() {
    return (
      <Container>
        <ContactTitle>CONTACT</ContactTitle>
        <SocialMediaIcons>
          <SocialLogo imgURL={linkedInImg} alternate="linkedin" redirectURL="https://www.linkedin.com/in/amundring" marginBottom />
          <SocialLogo imgURL={githubImg} alternate="github" redirectURL="https://github.com/Amund-Ring" />
          <SocialLogo imgURL={instaImg} alternate="insta" redirectURL="https://www.instagram.com/amundring/" />
          <SocialLogo imgURL={mailImg} alternate="mail" redirectURL="mailto:ring.amund@gmail.com" />
        </SocialMediaIcons>
      </Container>
    );
  }
}

export default Contact;
