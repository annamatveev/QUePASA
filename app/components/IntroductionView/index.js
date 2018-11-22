import React from 'react';

import styled from 'styled-components';
import UpdatesOutlineView from 'components/UpdatesOutlineView';
import IntroductionTextView from 'components/IntroductionTextView';
import introductionImage from '../../images/building.png';
import arrowImage from '../../images/curly-dotted-arrow.png';

const Introduction = styled.div`
  background-color: #5aadbb;
  height: 400px;
  padding-top: 8px;
  padding-right: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const IntroductionImage = styled.img`
  height: 300px;
  margin-bottom: -140px;

  @media (max-width: 1100px) {
    margin-bottom: -40px;
    height: 250px;
    align-self: center;
  }
`;

const ArrowImage = styled.img`
  align-self: flex-start;
  height: 160px;
  margin: 10px 0 0 0;
  padding-top: 10px;
  right: 70px;
  position: absolute;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Outline = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 64px;
`;

export default () => (
  <Introduction>
    <Outline>
      <IntroductionTextView />
      {/* <UpdatesOutlineView /> */}
    </Outline>
    <IntroductionImage src={introductionImage} alt="building something" />
    <ArrowImage src={arrowImage} alt="arrow" />
  </Introduction>
);
