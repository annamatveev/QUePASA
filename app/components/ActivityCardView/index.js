import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DescriptionWrapper = styled.div``;

const CreatorWrapper = styled.div`
  margin-top: 15px;
`;

const NameWrapper = styled.div`
  font-size: 12px;
  padding: 2px;
`;

const DepartmentWrapper = styled.div`
  font-size: 12px;
  padding: 2px;
  text-transform: uppercase;
`;

function ActivityCardView({ description, name, department }) {
  return (
    <div>
      <DescriptionWrapper>{description}</DescriptionWrapper>
      <CreatorWrapper>
        <NameWrapper>{name}</NameWrapper>
        <DepartmentWrapper>{department}</DepartmentWrapper>
      </CreatorWrapper>
    </div>
  );
}

ActivityCardView.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  department: PropTypes.string,
};

export default ActivityCardView;
