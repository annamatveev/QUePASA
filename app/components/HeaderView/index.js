import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import MaterialIcon from 'material-icons-react';
import Headroom from 'react-headroom';
import messages from './messages';
import logoImage from '../../images/rocket.png';

const LogoImage = styled.img`
  margin-left: 10px;
  z-index: 2;
  position: relative;
  height: 100px;
  width: 100px;
  object-fit: scale-down;
  margin-top: -10px;
  border-radius: 100%;
  border: 2px solid black;
  background: white;
  padding: 10px;
  transition: all 0.5s;

  @media (max-width: 500px) {
    transition: all 0.5s;
    height: 60px;
    width: 60px;
    margin-top: 6px;
  }
`;

const TopBar = styled.div`
  background-color: #222;
  height: 70px;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const LogoName = styled.span`
  width: 200px;
  color: white;
  font-weight: bold;
  font-size: calc(0.7vw + 1vh + 1.7vmin);
  margin-left: 15px;
  letter-spacing: 3px;
`;

const AddButton = styled.div`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin: 12px;
  border-radius: 5%;
  border: 1px dashed white;
  text-transform: uppercase;
  position: relative;
  padding: 10px 0;
  width: 150px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  background-color: #5aadbb;
  border: none;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    -webkit-transition: none;
    -moz-transition: none;
    transition: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:after {
    width: 120%;
    background-color: rgba(255, 255, 255, 0);

    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
`;

function HeaderView() {
  return (
    <Headroom
      style={{
        zIndex: '4',
        transition: 'all .5s ease-in-out',
      }}
    >
      <TopBar>
        <span>
          <LogoImage src={logoImage} alt="logo" />
          <LogoName>
            <FormattedMessage {...messages.appName} />
          </LogoName>
        </span>
        <AddButton>
          <MaterialIcon icon="add" invert size={14} />
          add activity
        </AddButton>
      </TopBar>
    </Headroom>
  );
}

export default HeaderView;
