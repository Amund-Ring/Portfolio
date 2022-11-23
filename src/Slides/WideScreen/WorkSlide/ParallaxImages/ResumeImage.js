import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import resume from '../../../../Assets/Images/Resume/resume.png';


  const Resume = styled.img.attrs({
    style: ({ scroll }) => ({
      transform: `translate(0px,-${(scroll) * 2}%) scale(0.8)`,
    }),
  })`
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: -140vh;
  /* right: -12vw; */
  left: 5vw;
  height: 80vh;

  box-shadow: 10px 10px 30px hsl(0, 0%, 35%);

  // border: 4px dashed red;
  `;




class ResumeImage extends Component {
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
        <Resume src={resume} scroll={scrollPercent} alt="resume" />
      </React.Fragment>
    );
  }
}

ResumeImage.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default ResumeImage;
