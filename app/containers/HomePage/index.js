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
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';

import HeaderView from 'components/HeaderView';
import FooterView from 'components/FooterView';
import IntroductionView from 'components/IntroductionView';
import BadgesView from 'components/BadgesView';
import ActivityStream from '../ActivityStream';

const Page = styled.span`
  min-width: 700px;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Page>
        <HeaderView />
        <IntroductionView />
        {/* <BadgesView /> */}
        <ActivityStream />
        <FooterView />
      </Page>
    );
  }
}
