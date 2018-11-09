import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: block;
  width: 25px;
  height: 25px;
  position: relative;
  left: 50%;
  top: 50%;
  margin-left: -12px;
  margin-top: -12px;
`;

export class ActivityIconView extends React.PureComponent {
  // TODO: seperate to file
  convertToMaterialIcon(department) {
    const iconMap = {
      'Bug fix': 'bug_report',
      Feature: 'wb_incandescent',
      Hire: 'person',
    };
    return iconMap[department] || 'check';
  }

  render() {
    const { type } = this.props;

    return (
      <IconWrapper>
        <MaterialIcon
          icon={this.convertToMaterialIcon(type)}
          size={25}
          invert
        />
      </IconWrapper>
    );
  }
}

ActivityIconView.propTypes = {
  type: PropTypes.string,
};

export default ActivityIconView;
