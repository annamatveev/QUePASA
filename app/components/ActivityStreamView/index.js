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
`;

export class ActivityStreamView extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  // TODO: seperate to file and chang to key value
  generateDepartmentColor(department) {
    const colorMap = {
      Server: '#EF5350',
      HR: '#AB47BC',
      A: '#5C6BC0',
    };

    return colorMap[department] || '#26A69A';
  }

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { activities } = this.props;

    return (
      <StyledVerticalTimeline>
        {activities.map(({ type, description, department, name, date }) => (
          <VerticalTimelineElement
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
          </VerticalTimelineElement>
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
