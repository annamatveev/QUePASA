import React from 'react';

import styled from 'styled-components';
import UpdateMetricView from 'components/UpdateMetricView';
import messages from './messages';

const UpdatesSummary = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

function UpdatesOutline() {
  return (
    <UpdatesSummary>
      <UpdateMetricView number={17} label={messages.newUpdatesLabel} />
      <UpdateMetricView number={5} label={messages.totalTeamsLabel} />
    </UpdatesSummary>
  );
}

export default UpdatesOutline;
