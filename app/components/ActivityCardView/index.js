import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ActivityCardView({ description, name }) {
  return (
    <div>
      <FormattedMessage {...messages.name} />
      <div>{name}</div>
      <FormattedMessage {...messages.description} />
      <div>{description}</div>
    </div>
  );
}

ActivityCardView.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
};

export default ActivityCardView;
