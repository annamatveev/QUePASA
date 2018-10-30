import React from 'react';
import PropTypes from 'prop-types';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component/dist-es6';
import ActivityCardView from '../ActivityCardView';
import ActivityIconView from '../ActivityIconView';

export class ActivityStreamView extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  // TODO: seperate to file and chang to key value
  generateDepartmentColor(department) {
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

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { activities } = this.props;

    return (
      <VerticalTimeline>
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
            <ActivityCardView description={description} name={name} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    );
  }
}

ActivityStreamView.propTypes = {
  activities: PropTypes.array,
  onLoad: PropTypes.func,
};

export default ActivityStreamView;
