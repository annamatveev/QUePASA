import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import AnimatedNumber from 'react-animated-number';
import styled from 'styled-components';

const UpdateMetric = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1100px) {
    flex-direction: row;
  }
`;

const UpdatesCount = styled.div`
  font-size: 150px;
  line-height: 150px;
  color: white;
  transition: all 0.5s;
  font-family: 'Indie Flower', cursive;
  align-text: right;

  @media (max-width: 1100px) {
    transition: all 0.5s;
    font-size: 18px;
    line-height: 22px;
    margin: 0 4px 0 32px;
  }
`;

const UpdatesLabel = styled.div`
  text-transform: uppercase;
  font-family: 'Indie Flower', cursive;
  width: 140px;
  font-size: 18px;
  color: #fffffff6;
  display: inline-block;
  white-space: pre-wrap;
  margin-left: 8px;

  @media (max-width: 1100px) {
    width: 315px;
  }
`;
export default ({ number, label }) => (
  <UpdateMetric>
    <UpdatesCount>
      <AnimatedNumber
        component="div"
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
