import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MaterialIcon from 'material-icons-react';

const DescriptionWrapper = styled.p`
  font-family: 'Roboto', sans-serif;
`;

const CreatorWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

const NameWrapper = styled.span`
  display: inline-block;
  line-height: 15px;
  font-size: 12px;
  padding: 2px;
  vertical-align: top;
  text-transform: uppercase;
  font-weight: bold;
`;

const DepartmentWrapper = styled.span`
  font-size: 12px;
  padding: 2px;
  vertical-align: top;
`;

function ActivityCardView({ description, name, department }) {
  return (
    <div>
      <DescriptionWrapper>{description}</DescriptionWrapper>
      <CreatorWrapper>
        <span>
          <MaterialIcon icon="person" size={17} />
          <NameWrapper>
            <span>{name}</span>
          </NameWrapper>
        </span>
        <DepartmentWrapper>{department} Department</DepartmentWrapper>
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
