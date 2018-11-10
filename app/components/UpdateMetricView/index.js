/**
 *
 * UpdateMetricView
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import AnimatedNumber from 'react-animated-number';
import styled from 'styled-components';

const UpdateMetric = styled.span`
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    flex-direction: row;
  }
  margin: 16px;
`;

const UpdatesCount = styled.span`
  font-size: 150px;
  line-height: 150px;
  color: white;
  transition: all 0.5s;
  font-family: 'Indie Flower', cursive;

  @media (max-width: 1100px) {
    transition: all 0.5s;
    font-size: 12px;
    margin: 0 4px 0 32px;
  }
`;

const UpdatesLabel = styled.span`
  text-transform: uppercase;
  font-family: 'Indie Flower', cursive;

  font-size: 16px;
  color: #fffffff6;
  display: inline-block;
  white-space: nowrap;
`;
export default ({ number, label }) => (
  <UpdateMetric>
    <UpdatesCount>
      <AnimatedNumber
        component="text"
        value={number}
        style={{
          transition: '0.8s ease-in',
          transitionProperty: 'background-color, color, opacity',
        }}
        duration={700}
        formatValue={n => Math.round(n)}
      />
    </UpdatesCount>
    <UpdatesLabel>
      <FormattedMessage {...label} />
    </UpdatesLabel>
  </UpdateMetric>
);
