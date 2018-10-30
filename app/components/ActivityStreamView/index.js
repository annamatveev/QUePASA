/**
 *
 * ActivityStreamView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component/dist-es6';

function ActivityStreamView({ activities }) {
  return (
    <VerticalTimeline>
      {console.log(activities.activities)}
      {activities.map(({ type, description, team, name, date }) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={date}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={
            <div>
              {type}
              <br />
              {team}
            </div>
          }
        >
          <div>{description}</div>
          <div>{name}</div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

ActivityStreamView.propTypes = {
  activities: PropTypes.array,
};

export default ActivityStreamView;
