import React, { Component } from 'react';
import NameAndJobTitle from './NameAndJobTitle';
import AboutMe from './AboutMe';


class Hero extends Component {
  render() {
    return (
      // <div style={{border: '5px solid blue'}}>
      //   <NameAndJobTitle />
      //   <AboutMe />
      // </div>
      <React.Fragment>
        <NameAndJobTitle />
        <AboutMe />
      </React.Fragment>
    );
  }
}

export default Hero;
