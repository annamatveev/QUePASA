import React from 'react';
import PropTypes from 'prop-types';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component/dist-es6';

import styled from 'styled-components';
import ActivityCardView from '../ActivityCardView';
import ActivityIconView from '../ActivityIconView';

// Fix vertical timeline
const StyledVerticalTimeline = styled(VerticalTimeline)`
  .vertical-timeline-element-date {
    padding-right: 90px !important;
    padding-left: 90px !important;
    font-size: 14px !important;
  }
  .vertical-timeline-element-content {
    border-top: 3px solid #2196f3;
  }
`;

const StyledVerticalTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    border-top: 3px solid ${props => props.color || '#2196f3'};
  }
`;

export class ActivityStreamView extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  // TODO: seperate to file
  generateDepartmentColor(department) {
    const colorMap = {
      Server: '#26A69A',
      HR: '#e25041',
      A: '#ee762f',
    };

    return colorMap[department] || '#66BB6A';
  }

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { activities } = this.props;

    return (
      <StyledVerticalTimeline>
        {activities.map(({ type, description, department, name, date }) => (
          <StyledVerticalTimelineElement
            color={this.generateDepartmentColor(department)}
            className="vertical-timeline-element--work"
            date={date}
            iconStyle={{
              background: this.generateDepartmentColor(department),
              color: 'black',
            }}
            icon={<ActivityIconView type={type} />}
          >
            <ActivityCardView
              description={description}
              name={name}
              department={department}
            />
          </StyledVerticalTimelineElement>
        ))}
      </StyledVerticalTimeline>
    );
  }
}

ActivityStreamView.propTypes = {
  activities: PropTypes.array,
  onLoad: PropTypes.func,
};

export default ActivityStreamView;
