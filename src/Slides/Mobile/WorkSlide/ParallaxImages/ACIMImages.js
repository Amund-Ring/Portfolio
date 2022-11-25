import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import screenshot1 from '../../../../Assets/Images/ACIM/screenshot1.png';
import screenshot2 from '../../../../Assets/Images/ACIM/screenshot2.png';
import screenshot3 from '../../../../Assets/Images/ACIM/screenshot3.png';
import screenshot4 from '../../../../Assets/Images/ACIM/screenshot4.png';

const Screenshot1 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 15}%) scale(0.65)`
  })
})`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -100vh;
  transform-origin: left center;
  left: 2vw;
  height: 80vh;

  /* border: 1px dashed red; */
`;

const Screenshot2 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 8.5}%) scale(0.62)`
  })
})`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -65vh;
  right: 0vw;
  transform-origin: right center;
  height: 80vh;

  /* border: 1px dashed red; */
`;

const Screenshot3 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 5}%) scale(0.55)`
  })
})`
  transition: transform 0.2s ease-out;
  bottom: -60vh;
  left: 3vw;
  transform-origin: left center;
  position: absolute;
  height: 80vh;

  /* border: 1px dashed red; */
`;

const Screenshot4 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 2}%) scale(0.5)`
  })
})`
  transition: transform 0.2s ease-out;
  bottom: -50vh;
  right: 2vw;
  transform-origin: right center;
  position: absolute;
  /* border: 1px dashed red; */
  height: 80vh;
`;

class ACIMImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const { boxHeight, index, scrollHeight, screenHeight } = this.props;
    const heighttoBeReducedinVH = boxHeight * index - 100;
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100) / scrollHeight;
    console.log('scrollPercent ', scrollPercent);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <Screenshot4
          src={screenshot4}
          scroll={scrollPercent}
          alt='screenshot4'
        />
        <Screenshot3
          src={screenshot3}
          scroll={scrollPercent}
          alt='screenshot3'
        />
        <Screenshot2
          src={screenshot2}
          scroll={scrollPercent}
          alt='screenshot2'
        />
        <Screenshot1
          src={screenshot1}
          scroll={scrollPercent}
          alt='screenshot1'
        />
      </React.Fragment>
    );
  }
}

ACIMImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired
};

export default ACIMImages;
