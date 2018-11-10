/**
 *
 * BadgesView
 *
 */

import React from 'react';
import styled from 'styled-components';

import BadgeView from 'components/BadgeView';

const Badges = styled.div`
  min-height: 100px;
  width: 90%;
  margin: 0 auto;
  margin-top: 64px;
  margin-bottom: 64px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function BadgesView() {
  return (
    <Badges>
      <BadgeView department="aa" />
      <BadgeView department="ab" />
      <BadgeView department="ac" />
      <BadgeView department="ad" />
      <BadgeView department="ae" />
    </Badges>
  );
}

export default BadgesView;
