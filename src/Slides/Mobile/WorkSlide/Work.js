import React, { Component } from 'react';
import styled from 'styled-components';
import vhCheck from 'vh-check';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;

  /* border: 6px dashed purple; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0
    };
    this.pageSplitTimes = 1.3;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: ['']
      },
      {
        number: '01',
        projectName: 'ACIM Workbook',
        projectDesc:
          "App for browsing the workbook of the popular spiritual self-study program 'A Course in Miracles'.",
        projectType: 'iOS Application',
        githubLink: 'https://github.com/Amund-Ring/ACIM-Workbook',
        webLink: [
          'https://apps.apple.com/no/app/acim-workbook/id6443900608',
          'Available in the App Store'
        ],
        roles: ['Full Stack Developer', 'UI Designer']
      },
      {
        number: '02',
        projectName: 'Clever Clothing',
        projectDesc: 'Clothing store website',
        projectType: 'Website',
        githubLink: 'https://github.com/Amund-Ring/Clever-Clothing',
        webLink: ['https://clothing.amundring.no/', 'Check it out here'],
        roles: ['Front-end Developer', 'UI Designer']
      },
      {
        number: '03',
        projectName: "Let's Do This",
        projectDesc: 'Todo list application created with React Native',
        projectType: 'iOS Application',
        githubLink: 'https://github.com/Amund-Ring/Lets-Do-This',
        webLink: [
          'https://github.com/Amund-Ring/Lets-Do-This',
          'GitHub Repository'
        ],
        roles: ['Front-end Developer', 'UI Designer']
      },
      {
        number: '04',
        projectName: 'DoneWithIt',
        projectDesc:
          "A marketplace for selling the stuff you don't need anymore.",
        projectType: 'iOS Application',
        githubLink: 'https://github.com/Amund-Ring/DoneWithIt',
        webLink: [
          'https://github.com/Amund-Ring/DoneWithIt',
          'GitHub Repository'
        ],
        roles: ['Full Stack Developer']
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: ['']
      }
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const vhDiff = vhCheck().offset;
    this.setState({
      vh: Math.round(
        (window.document.documentElement.clientHeight + vhDiff) *
          this.pageSplitTimes
      )
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (
      Math.floor(scrollDistance / vh) !== slideNumber &&
      slideNumber < this.workDetails.length - 1
    ) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (
      slideNumber === this.workDetails.length - 1 &&
      Math.floor(scrollDistance / vh) < slideNumber
    ) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        githubLink={this.workDetails[slideNumber].githubLink}
        webLink={this.workDetails[slideNumber].webLink}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
