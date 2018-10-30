import React from 'react';
import PropTypes from 'prop-types';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component/dist-es6';
import ActivityView from '../ActivityCardView';
import ActivityIconView from '../ActivityIconView';

function ActivityStreamView({ activities }) {
  function generateDepartmentColor(department) {
    switch (department) {
      case 1:
        return '#f44336';
      case 2:
        return '#3f51b5';
      case 3:
        return '#00b341';
      default:
        return '#673ab7';
    }
  }
  return (
    <VerticalTimeline>
      {console.log(activities.activities)}
      {activities.map(({ type, description, department, name, date }) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={date}
          iconStyle={{
            background: generateDepartmentColor(department),
            color: 'black',
          }}
          icon={<ActivityIconView type={type} department={department} />}
        >
          <ActivityView description={description} name={name} />
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

ActivityStreamView.propTypes = {
  activities: PropTypes.array,
};

export default ActivityStreamView;
