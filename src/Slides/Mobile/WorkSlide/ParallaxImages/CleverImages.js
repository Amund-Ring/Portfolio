import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import screenshot1 from '../../../../Assets/Images/CleverClothing/screenshot1_mobile.png';
import screenshot2 from '../../../../Assets/Images/CleverClothing/screenshot2_mobile.png';
import screenshot3 from '../../../../Assets/Images/CleverClothing/screenshot3_mobile.png';

const Screenshot1 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 7}%) scale(0.9)`
  })
})`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -60vh;
  transform-origin: left center;
  left: 12vw;
  height: 80vh;

  /* border: 3px dashed red; */
`;


const Screenshot2 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 5}%) scale(1)`
  })
})`
  transition: transform 0.2s ease-out;
  bottom: -70vh;
  left: 7vw;
  transform-origin: left center;
  position: absolute;
  height: 80vh;

  /* border: 3px dashed red; */
`;

const Screenshot3 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 3}%) scale(0.9)`
  })
})`
  transition: transform 0.2s ease-out;
  bottom: -80vh;
  left: 12vw;
  transform-origin: left center;
  position: absolute;
  height: 80vh;

  /* border: 3px dashed red; */
`;

class CleverImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const { boxHeight, index, scrollHeight, screenHeight } = this.props;
    const heighttoBeReducedinVH = boxHeight * index - 100;
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100) / scrollHeight;
    // console.log('scrollPercent ', scrollPercent);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <Screenshot3 src={screenshot3} scroll={scrollPercent} alt='screenshot3' />
        <Screenshot2 src={screenshot2} scroll={scrollPercent} alt='screenshot2' />
        <Screenshot1 src={screenshot1} scroll={scrollPercent} alt='screenshot1' />
      </React.Fragment>
    );
  }
}

CleverImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired
};

export default CleverImages;
