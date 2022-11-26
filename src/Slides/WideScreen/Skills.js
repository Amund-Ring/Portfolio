import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../Assets/Responsive/breakpoints';
import colors from '../../Assets/Colors';
import resume from '../../Assets/Images/Resume/resume.png';
import pdf from '../../Assets/Images/Resume/CV_Amund_Ring.pdf';


const Container = styled.div`
  height: 120vh; /* Since pageSplitTime is 1.4 */
  width: 100%;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 5%;

  margin-top: 20vh;
  padding-top: 21%;

  overflow-x: hidden;
  /* border: 4px solid orange; */
`;

const SkillsTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    // transform: `translateX(-${(scrollPercent) * 10}%)`,
    transform: `translateX(-${scrollPercent * 16}%)`
  })
})`
  /* border: 1px solid blue; */

  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: #eee;
  top: 5%;
  right: 0%;
  font-size: 110px;
  @media ${device.laptop} {
    font-size: 180px;
    right: -20%;
  }
  @media ${device.laptopL} {
    font-size: 200px;
    right: -15%;
  }
  @media ${device.desktop} {
    font-size: 200px;
    right: -15%;
  }
`;

const SkillsList = styled.div`
  /* border: 2px solid green; */

  
  margin-top: 3%;
  /* height: 50%; */

  width: 45vw;

  /* display: flex;
  flex-flow: row nowrap;
  justify-content: space-between; */
  /* align-items: flex-start; */
  /* font-family: 'AvenirRoman'; */
  font-family: 'SF-Compact-Text-Light';

  text-align: left;
  /* text-align: left; */

  display: grid;
  grid-template-columns: auto auto;

  /* margin-left: 8%; */
  // margin-right: 10%;
  // padding-left: 5%;
  // padding-top: 5%;
  // padding-right: 5%;

  z-index: 1;
  // transform: translateY(30%);
  @media ${device.laptop} {
    // font-size: 35px;
    font-size: 25px;
    line-height: 38px;
    margin-top: 5%;
  }
  @media ${device.laptopL} {
    // font-size: 40px;
    font-size: 28px;
    line-height: 42px;
    margin-top: 2%;
  }
  @media ${device.desktop} {
    // font-size: 70px;
    font-size: 28px;
    line-height: 42px;
    margin-top: 2%;
  }
`;

const Headline = styled.div`
  color: ${colors.primary};
  font-family: 'SF-Compact-Rounded-Regular';
  margin-bottom: 2%;

  @media ${device.laptop} {
    font-size: 28px;
  }
  @media ${device.laptopL} {
    font-size: 36px;
  }
  @media ${device.desktop} {
    font-size: 36px;
  }
`;

const Resume = styled.img`
  box-shadow: 10px 10px 30px hsl(0, 0%, 40%);
  // scale: 0.5;
  height: 30%;
  cursor: pointer;

  &:hover {
    outline: 4px solid ${colors.primary};
    box-shadow: 10px 10px 30px hsl(0, 0%, 20%);
  }

  @media ${device.laptop} {
    height: 65%;
  }
  @media ${device.laptopL} {
    height: 68%;
  }
  @media ${device.desktop} {
    height: 68%;
  }

  /* border: 4px dashed red; */
`;

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      scrollHeight: 0,
      scrollPercent: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      scrollHeight: Math.round(window.document.documentElement.scrollHeight)
    });
    this.setState({
      screenHeight: Math.round(window.document.documentElement.clientHeight)
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    let sp =
      (sd / (documentElement.scrollHeight - documentElement.clientHeight)) *
      100;

    // console.log(documentElement.clientHeight);

    const minlimit =
      (documentElement.clientHeight * 800) / documentElement.scrollHeight;
    const maxlimit =
      (documentElement.clientHeight * 1530) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= maxlimit + 3) {
      sp -= minlimit;
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>
        <SkillsTitle scrollPercent={scrollPercent}>SKILLS</SkillsTitle>
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
        <Resume src={resume} alt='resume' onClick={() => openInNewTab(pdf)}/>
      </Container>
    );
  }
}

export default Skills;
