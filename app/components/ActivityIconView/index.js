import React from 'react';
import PropTypes from 'prop-types';

function ActivityIconView({ type }) {
  return (
    <div>
      <div>{type}</div>
    </div>
  );
}

ActivityIconView.propTypes = {
  type: PropTypes.string,
};

export default ActivityIconView;
