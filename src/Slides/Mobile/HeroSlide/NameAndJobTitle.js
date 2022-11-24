import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../../Assets/Responsive/breakpoints';
import { BsChevronCompactDown } from 'react-icons/bs';
import colors from '../../../Assets/Colors';

const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height:100vh;
    width:100%;
    background-color: white;
    padding-bottom: 20%;

    border: 2px solid blue;
`;

const Name = styled.div`
  font-family: 'Pacifico';
  text-align:center;
  padding-right: 10px;
  font-size: 50px;
  color: ${colors.primary};
  @media ${device.mobileS} {
    font-size: 55px;
  }
  @media ${device.mobileM} {
    font-size: 60px;
  }
  @media ${device.mobileL} {
    font-size: 68px;
  }
  @media ${device.tablet} {
    font-size: 80px;
  }
  @media ${device.laptop} {
    font-size: 60px;
  }
`;

const Title = styled.div`
  font-family: 'AvenirRoman';
  text-align:center;
  margin-top: 20px;
  font-size: 22px;
  @media ${device.mobileS} {
    font-size: 26px;
  }
  @media ${device.mobileM} {
    font-size: 28px;
  }
  @media ${device.mobileL} {
    font-size: 30px;
  }
  @media ${device.tablet} {
    font-size: 34px;
  }
  @media ${device.laptop} {
    font-size: 34px;
  }
`;

const Chevron = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: ${colors.primary};
  position: absolute;
  bottom: 10vh;
  transition: opacity 0.7s;
  opacity: ${({ chevronVisible }) => (chevronVisible ? '1' : '0')};

  /* border: 2px dotted skyblue; */
`;

class NameAndJobTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chevronVisible: true
    };
  }

  toggleChevron() {
    this.setState({ chevronVisible: !this.state.chevronVisible });
  }

  componentDidMount() {
    setInterval(() => {
      this.toggleChevron();
    }, 1000);
  }

  render() {
    return (
      <Container>
        <Name>Amund Ring</Name>
        <Title>Software Developer</Title>
        <Chevron chevronVisible={this.state.chevronVisible}>
           <BsChevronCompactDown />
        </Chevron>
      </Container>
    );
  }
}

export default NameAndJobTitle;
