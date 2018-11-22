import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import toMaterialStyle from 'material-color-hash';

const Hexagon = styled.div`
  position: relative;
  width: 90px;
  height: 51.96px;
  background-color: ${props => props.color || '#2196f3'};
  margin: 25.98px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-left: solid 5px #fefdff;
  border-right: solid 5px #fefdff;
  transition: all 0.3s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    width: 63.64px;
    height: 63.64px;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: 8.1802px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  &:before {
    top: -31.8198px;
    border-top: solid 7.0711px #fefdff;
    border-right: solid 7.0711px #fefdff;
  }

  &:after {
    bottom: -31.8198px;
    border-bottom: solid 7.0711px #fefdff;
    border-left: solid 7.0711px #fefdff;
  }

  /*cover up extra shadows*/
  & span {
    display: block;
    position: absolute;
    top: 2.8867513459481287px;
    left: 0;
    width: 80px;
    height: 46.188px;
    z-index: 2;
    background: inherit;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    padding-top: 7px;
    font-family: 'Open Sans Condensed', sans-serif;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

function HexagonView({ department }) {
  return (
    // Add 1 to get a better color palette
    <Hexagon color={toMaterialStyle(`${department}1`, '200').backgroundColor}>
      <span>{department}</span>
    </Hexagon>
  );
}

HexagonView.propTypes = {
  department: PropTypes.string,
};

export default HexagonView;
