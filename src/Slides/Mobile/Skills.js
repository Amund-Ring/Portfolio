import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../../Assets/Colors';
import device from '../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height: 100vh;
    width:100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    padding-left: 10%;
    padding-right: 10%;
    
    /* border: 1px solid blue; */


`;

const SkillsTitle = styled.div`
  font-family: 'AvenirHeavy';
  color: #e4e4e4;
  @media ${device.mobileS} {
    font-size: 40px;
  }
  @media ${device.mobileM} {
    font-size: 50px;
  }
  @media ${device.mobileL} {
    font-size: 60px;
  }
  @media ${device.tablet} {
    font-size: 90px;
  }
  @media ${device.laptop} {
    font-size: 95px;
  }
`;

const SkillsList = styled.div`
  font-family: 'SF-Compact-Text-Light';
  z-index: 1;
  font-size: 23px;

  /* border: 2px solid green; */
  
  @media ${device.mobileS} {
    margin-top: 30px;
    font-size: 23px;
  }
  @media ${device.mobileM} {
    margin-top: 35px;
    font-size: 23px;
  }
  @media ${device.mobileL} {
    margin-top: 35px;
    font-size: 23px;
  }
  @media ${device.tablet} {
    margin-top: 45px;
    font-size: 23px;
  }
  @media ${device.laptop} {
    margin-top: 60px;
    font-size: 23px;
  }
`;

const Headline = styled.div`
  color: ${colors.primary};
  font-family: 'SF-Compact-Rounded-Regular';
  margin-bottom: 2%;

  @media ${device.mobileS} {
    font-size: 25px;
  }
  @media ${device.mobileM} {
    font-size: 25px;
  }
  @media ${device.mobileL} {
    font-size: 25px;
  }
  @media ${device.tablet} {
    font-size: 25px;
  }
  @media ${device.laptop} {
    font-size: 25px;
  }
`;

class Skills extends Component {
  render() {
    return (
      <Container>
        <SkillsTitle>SKILLS</SkillsTitle>
        <SkillsList>
          <div>
            <div>
              <Headline>App Development</Headline>
              Swift
              <br />
              SwiftUI / UIKit
              <br />
              React Native
              <br />
              <br />
            </div>
            <div>
              <Headline>Design</Headline>
              Figma
              <br />
              Photoshop
              <br />
              Pixelmator Pro
              <br />
              <br />
            </div>
          </div>
          <div>
            <Headline>Web Development</Headline>
            React
            <br />
            Next.js
            <br />
            Node.js
            <br />
            JavaScript
            <br />
            TypeScript
            <br />
            Tailwind CSS
            <br />
            Styled Components
            <br />
            CSS Modules / Sass
            <br />
          </div>
        </SkillsList>
      </Container>
    );
  }
}

export default Skills;
