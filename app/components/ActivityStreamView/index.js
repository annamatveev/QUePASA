import React from 'react';
import PropTypes from 'prop-types';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component/dist-es6';
import ActivityView from '../ActivityCardView';
import ActivityIconView from '../ActivityIconView';

function ActivityStreamView({ activities }) {
  return (
    <VerticalTimeline>
      {console.log(activities.activities)}
      {activities.map(({ type, description, department, name, date }) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={date}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
