import React, { Component } from 'react';
import styled from 'styled-components';
import NameReveal from './NameReveal';
import TitleReveal from './TitleReveal';
import { BsChevronCompactDown } from 'react-icons/bs';
import colors from '../../../Assets/Colors';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: white;

  padding-bottom: 80px;

  // border: 5px dotted skyblue;
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
  bottom: 7vh;
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
        <NameReveal text='Amund Ring' fontFam='Pacifico' timeDelay={500} />
        {/* <NameReveal text="Amund Ring" fontFam="Valencia" timeDelay={500} /> */}
        <TitleReveal
          text='Software Developer'
          fontFam='SF-Compact-Rounded-Light'
          timeDelay={1300}
        />
        <Chevron chevronVisible={this.state.chevronVisible}>
           <BsChevronCompactDown />
        </Chevron>
      </Container>
    );
  }
}

export default NameAndJobTitle;
