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
    height:80vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    position: relative;
    overflow: hidden;
    margin-top: 30vh;
    margin-bottom: 17vh;

    overflow-x: hidden;
    /* border: 4px solid green; */
`;

const ContactTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    // transform: `translateX(${(scrollPercent) * 8}%)`,
    transform: `translateX(${(scrollPercent) * 9}%)`,
  }),
})`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  font-size: 150px;
  position: absolute;
  color: #EEE;
  top:14%;
  left:-130%;
  @media ${device.laptop} {
    font-size: 165px;
    left:-90%;
  }
  @media ${device.laptopL} {
    font-size: 180px;
    left:-68%;
  }
  @media ${device.desktop} {
    font-size: 350px;
    left:-68%;
  }
`;

const SocialMediaIcons = styled.div`
  /* border: 1px solid black; */

  
  margin-left: 20%;
  margin-right: 3%;
  z-index: 1;
  transform: translateY(400%);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      scrollHeight: 0,
      scrollPercent: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ scrollHeight: Math.round(window.document.documentElement.scrollHeight) });
    this.setState({ screenHeight: Math.round(window.document.documentElement.clientHeight) });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const minlimit = (documentElement.clientHeight * 850) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= 100) {
      sp -= minlimit;
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>
        <ContactTitle scrollPercent={scrollPercent}>CONTACT</ContactTitle>
        <SocialMediaIcons>
          <SocialLogo imgURL={linkedInImg} alternate="Linkedin" redirectURL="https://www.linkedin.com/in/amundring" />
          <SocialLogo imgURL={githubImg} alternate="Github" redirectURL="https://github.com/Amund-Ring" />
          <SocialLogo imgURL={instaImg} alternate="Instagram" redirectURL="https://www.instagram.com/amundring/" />
          <SocialLogo imgURL={mailImg} alternate="Mail" redirectURL="mailto:ring.amund@gmail.com" />
        </SocialMediaIcons>
      </Container>
    );
  }
}

export default Contact;
