import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../../Assets/Responsive/breakpoints';
import colors from '../../../Assets/Colors';

const Container = styled.section`
    margin-top: 15vh;
    margin-bottom: 25vh;

    height: 44vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    position: relative;
    overflow: hidden;

    // border: 4px solid blue;
`;

const AboutMeTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(${(scrollPercent) * 7}%)`,
  }),
})`
  transition: transform 0.5s ease-out;

  font-family: 'AvenirHeavy';
  // font-family: 'SF-Compact-Rounded-Regular';
  /* border: 4px solid orange; */
  white-space: nowrap;

  font-size: 130px;
  position: absolute;
  color: #EEE;
  top: 35%;
  left:-15%;

  @media ${device.laptop} {
    font-size: 160px;
  }
  @media ${device.laptopL} {
    font-size: 200px;
  }
  @media ${device.desktop} {
    font-size: 200px;
  }
`;

const AboutMeDescription = styled.div`
  align-items: center;


  font-family: 'SF-Compact-Rounded-Light';
  font-size: 25px;
  // opacity: 0.9;
  // border: 4px solid orange;

  // font-family: 'AvenirLight';
  /* font-family: 'AvenirRoman'; */

  color: ${colors.primary};
  /* color: red; */

  text-align: left;
  margin-left: 14%;
  margin-right: 5%;
  white-space: nowrap;
  @media ${device.laptop} {
    transform: translateY(90%);
    font-size: 32px;
    margin-left: 18%;

    /* color: orange; */
  }
  @media ${device.laptopL} {
    transform: translateY(87%);
    font-size: 38px;
    margin-left: 24%;

    /* color: green; */
  }
  @media ${device.desktop} {
    transform: translateY(87%);
    font-size: 38px;
    margin-left: 24%;

    /* color: blue; */

  }
`;

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPercent: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const maxlimit = (documentElement.clientHeight * 150) / documentElement.scrollHeight;
    if (sp >= 0 && sp <= maxlimit) {
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>
        <AboutMeTitle scrollPercent={scrollPercent}>ABOUT ME</AboutMeTitle>
        <AboutMeDescription>
        Software developer who cares deeply about user experience.
        <br></br>
        Passionate about UI design and new technologies.
        </AboutMeDescription>
      </Container>
    );
  }
}

export default AboutMe;
