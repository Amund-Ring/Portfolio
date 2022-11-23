import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import screenshot1 from '../../../../Assets/Images/CleverClothing/screenshot1.png';
import screenshot2 from '../../../../Assets/Images/CleverClothing/screenshot2.png';
import screenshot3 from '../../../../Assets/Images/CleverClothing/screenshot3.png';


  const Screenshot1 = styled.img.attrs({
    style: ({ scroll }) => ({
      transform: `translate(0px,-${(scroll) * 5}%) scale(0.55)`,
    }),
  })`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom:-0vh;
  /* right: -12vw; */
  left: -15vw;
  height: 80vh;

  // border: 5px dashed red;
  `;

const Screenshot2 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.37)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -85vh;
left: -28.5vw;
height: 80vh;
z-index: -1;

// border: 5px dashed red;
`;

const Screenshot3 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 10}%) scale(0.43)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-130vh;
left: -12vw;
height: 80vh;
z-index: -10;


// border: 1px dashed red;
`;


class CleverImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    scrollPercent -= scrollOffsetInPercent;

    return (
      <React.Fragment>
        <Screenshot3 src={screenshot3} scroll={scrollPercent} alt="screenshot3" />
        <Screenshot2 src={screenshot2} scroll={scrollPercent} alt="screenshot2" />
        <Screenshot1 src={screenshot1} scroll={scrollPercent} alt="screenshot1" />
      </React.Fragment>
    );
  }
}

CleverImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default CleverImages;
