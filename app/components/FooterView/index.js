/**
 *
 * FooterView
 *
 */

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import footerImage from '../../images/bottom-sticker.png';

const Footer = styled.div`
  display: flex;
  align-items: center;
  background: #222;
  height: 100px;
  position: relative;
`;

const FooterImage = styled.img`
  height: 160px;
  align-self: flex-end;
  margin: 0 0 0 10px;
  padding-top: 10px;
`;

const FooterText = styled.span`
  margin-left: 20px;

  color: white;
  width: 270px;
  & > a {
    color: inherit;
    text-decoration: unset;
    cursor: pointer;
    span {
      font-weight: bold;
    }
  }
`;

export default () => (
  <Footer>
    <FooterImage src={footerImage} alt="footer" />
    <FooterText>
      <a href="http://hackertyper.com/" target="_blank">
        <FormattedMessage {...messages.footerMessage} />
      </a>
    </FooterText>
  </Footer>
);
