import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../../Assets/Responsive/breakpoints';
import colors from '../../../Assets/Colors';

const Container = styled.section`
  height: 40vh; /* Since pageSplitTime is 1.4 */
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  padding-left: 7vw;
  padding-right: 5vw;
  margin-top: 5h;

  /* border: 3px solid orange; */
`;

const AboutMeDescription = styled.span`

  font-family: 'SF-Compact-Rounded-Light';

  font-size: 24px;
  /* text-align: center; */
  color: ${colors.primary};
  padding: 26px;
  font-size: 16px;

  /* border: 2px solid green; */

  @media ${device.mobileS} {
    padding: 28px;
    font-size: 20px;
  }
  @media ${device.mobileM} {
    padding: 30px;
    font-size: 20px;
  }
  @media ${device.mobileL} {
    padding: 30px;
    font-size: 20px;
  }
  @media ${device.tablet} {
    padding: 80px;
    font-size: 25px;
  }
  @media ${device.laptop} {
    padding: 80px;
    font-size: 25px;
  }
`;

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <AboutMeDescription>
        Software developer who cares deeply about user experience. Passionate about UI design and new technologies.
        </AboutMeDescription>
      </Container>
    );
  }
}

export default AboutMe;
