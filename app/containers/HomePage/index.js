/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import messages from './messages';
import 'react-vertical-timeline-component/style.min.css';

const activitiesMock = [
  {
    type: 1,
    description: 'hiii',
    team: 1,
    name: 'Anna',
    date: '2018',
  },
  {
    type: 2,
    description: 'holaaa',
    team: 2,
    name: 'Elad',
    date: '2018',
  },
  {
    type: 3,
    description: 'helloooo',
    team: 3,
    name: 'Daniel',
    date: '2018',
  },
];

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <br />
        <VerticalTimeline>
          {activitiesMock.map(({ type, description, team, name, date }) => (
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
      </div>
    );
  }
}
