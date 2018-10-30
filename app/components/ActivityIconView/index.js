import React from 'react';
import PropTypes from 'prop-types';

function ActivityIconView({ type, department }) {
  return (
    <div>
      <div>
        {type}
        <br />
        {department}
      </div>
    </div>
  );
}

ActivityIconView.propTypes = {
  type: PropTypes.string,
  department: PropTypes.string,
};

export default ActivityIconView;
