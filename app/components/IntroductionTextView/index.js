/**
 *
 * IntroductionTextView
 *
 */

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from '../IntroductionView/messages';

const IntroductionText = styled.div`
  text-transform: uppercase;
  font-weight: 200;
  color: white;
  text-align: center;
  width: 100%;
  margin-top: 75px;
  font-size: 3vw;

  @media (min-width: 1100px) {
    text-align: left;
    margin-top: 40px;
    margin-right: 40px;
    width: 500px;
    font-size: 35px;
  }
`;

export default () => (
  <IntroductionText>
    <FormattedMessage {...messages.introductionTitle} />
  </IntroductionText>
);
