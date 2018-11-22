/**
 *
 * BadgesView
 *
 */

import React from 'react';
import styled from 'styled-components';

import BadgeView from 'components/BadgeView';

const BadgesWrapper = styled.div`
  display: grid;
  margin: 0 auto;
`;

const Badges = styled.div`
  min-height: 100px;
  margin: 30px auto 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  background: #f5f5f5;
  border: 1px dashed #eeeeee;
  padding: 8px;
`;

function BadgesView() {
  return (
    <BadgesWrapper>
      <Badges>
        <BadgeView department="aa" />
        <BadgeView department="ab" />
        <BadgeView department="ac" />
        <BadgeView department="ad" />
        <BadgeView department="ae" />
      </Badges>
    </BadgesWrapper>
  );
}

export default BadgesView;
