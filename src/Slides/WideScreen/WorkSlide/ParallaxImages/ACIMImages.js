import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import screenshot1 from '../../../../Assets/Images/ACIM/screenshot1.png';
import screenshot2 from '../../../../Assets/Images/ACIM/screenshot2.png';
import screenshot3 from '../../../../Assets/Images/ACIM/screenshot3.png';
import screenshot4 from '../../../../Assets/Images/ACIM/screenshot4.png';

const Screenshot1 = styled.img.attrs({
  style: ({ scroll }) => ({

    transform: `translate(0px,-${scroll * 5}%) scale(0.90)`
    // transform: `translate(0px,-${scroll * 5}%) scale(0.95)`
  })
})`
  transition: transform 0.2s ease-out;
  position: absolute;

  bottom: -0vh;
  // bottom: -80vh;

  left: 0vw;
  height: 80vh;

  // border: 3px dashed red;
`;

const Screenshot2 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 6}%) scale(0.85)`
    // transform: `translate(0px,-${scroll * 6}%) scale(0.9)`
  })
})`
  transition: transform 0.2s ease-out;
  position: absolute;


  bottom: -40vh;
  // bottom: -120vh;


  left: 24vw;
  height: 80vh;

  // border: 3px dashed red;
`;

const Screenshot3 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 6.4}%) scale(0.75)`
    // transform: `translate(0px,-${scroll * 6.4}%) scale(0.8)`
  })
})`
  transition: transform 0.2s ease-out;

  bottom: -100vh;
  // bottom: -180vh;

  left: 0.5vw;
  position: absolute;
  height: 80vh;

  /* border: 1px dashed red; */
`;

const Screenshot4 = styled.img.attrs({
  style: ({ scroll }) => ({
    // transform: `translate(0px,-${scroll * 7.5}%) scale(0.7)`
    transform: `translate(0px,-${scroll * 7.5}%) scale(0.65)`
  })
})`
  transition: transform 0.2s ease-out;
  bottom: -140vh;
  left: 23vw;
  height: 80vh;
  position: absolute;

  /* border: 1px dashed red; */
`;

class ACIMImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const { boxHeight, index, scrollHeight, screenHeight } = this.props;
    const heighttoBeReducedinVH = boxHeight * index - 100;
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100) / scrollHeight;
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <Screenshot4
          src={screenshot4}
          scroll={scrollPercent}
          alt='screenshot4'
        />
        <Screenshot2
          src={screenshot2}
          scroll={scrollPercent}
          alt='screenshot2'
        />
        <Screenshot3
          src={screenshot3}
          scroll={scrollPercent}
          alt='screenshot3'
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
