import React from 'react';
import PropTypes from 'prop-types';

import HexagonView from 'components/HexagonView';
import styled from 'styled-components';

const Badge = styled.div`
  margin: 0 32px 0 32px;
`;

const TeamUpdateCount = styled.div`
  font-size: 12px;
  color: #000000b3;
  text-align: center;
  padding-top: 8px;
`;

function BadgeView({ department }) {
  return (
    <Badge>
      <HexagonView department={department}>
        <span />
      </HexagonView>
      <TeamUpdateCount>
        {Math.floor(Math.random() * Math.floor(15))} updates
      </TeamUpdateCount>
    </Badge>
  );
}

BadgeView.propTypes = {
  department: PropTypes.string,
};

export default BadgeView;
