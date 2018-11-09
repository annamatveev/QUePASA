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
import ActivityStream from '../ActivityStream';
import yeomanImage from '../../images/maracas.png';
import buildingRocket from '../../images/building.png';

const LogoImage = styled.span`
  margin-left: 10px;
  z-index: 2;
  position: relative;
  & > img {
    height: 100px;
    margin-top: -15px;
    border-radius: 100%;
    border: 2px solid black;
    background: white;
    padding: 10px;
  }
`;

const Header = styled.div`
  background-color: #222;
  height: 70px;
  width: 100%;
  z-index: 1;
  position: fixed;
`;

const LogoName = styled.span`
  width: 200px;
  color: white;
  font-weight: bold;
  font-size: 30px;
  margin-left: 15px;
  letter-spacing: 3px;
`;

const Introduction = styled.div`
  background-color: #5aadbb;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const IntroductionImage = styled.img`
  height: 300px;
  margin-bottom: -140px;

  @media (max-width: 1000px) {
    margin-bottom: -40px;
    height: 250px;
  }
`;

const IntroductionText = styled.span`
  text-transform: uppercase;
  font-weight: 200;
  color: white;
  text-align: center;
  width: 100%;
  margin-top: 75px;
  font-size: 3vw;

  @media (min-width: 1000px) {
    text-align: left;
    margin-top: 40px;
    margin-right: 40px;
    width: 240px;
    font-size: 40px;
  }
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Header>
          <LogoImage>
            <img src={yeomanImage} alt="logo" />
          </LogoImage>
          <LogoName>QUéPASA</LogoName>
        </Header>
        <Introduction>
          <IntroductionText>what we built here last week?</IntroductionText>
          <IntroductionImage src={buildingRocket} alt="logo" />
        </Introduction>
        <ActivityStream />
      </div>
    );
  }
}
