import React from 'react';
import { css } from 'emotion';
import styled from '@emotion/styled';
import Link from 'gatsby-link';
import {
  DEFAULT_WIDTH,
  DEFAULT_MEDIA_QUERY,
} from 'typography-breakpoint-constants';
import HexImage from '../HexImage/HexImage';
import Config from '../../../config';

const activeLinkClass = css`
  color: black;
  text-decoration: none;
  box-shadow: none;
`;

const ProfileHexImage = styled(HexImage)`
  width: 70px;
  height: 70px;
  transition: 0.5s;

  &:hover {
    transform: rotate(-3deg);
  }
`;

const Nav = styled('nav')`
  display: flex;
  padding-top: 10px;
  margin: 0 auto 40px auto;
  max-width: ${DEFAULT_WIDTH};

  ${DEFAULT_MEDIA_QUERY} {
    margin: 10px 10px 40px 10px;
  }
`;

const Menu = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  margin-left: 16px;
  padding: 0;
  list-style: none;
`;

const MenuItem = styled('li')`
  margin: 0 20px 0 0;
`;

const LogoLink = styled(Link)`
  display: inline-flex;
  box-shadow: none;

  &:focus {
    outline: none;
  }
`;

export default class Header extends React.Component {
  render() {
    return (
      <Nav>
        <LogoLink to="/" className="not-animated">
          <ProfileHexImage image={Config.userAvatar} title={Config.userName} />
        </LogoLink>
        <Menu>
          <MenuItem>
            <Link
              getProps={(props) => {
                if (props.location.pathname === '/') {
                  return { className: activeLinkClass };
                }
                return null;
              }}
              activeClassName={activeLinkClass}
              to="/"
            >
              Alex Suevalov
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              getProps={(props) => {
                if (props.location.pathname.indexOf('/blog') === 0) {
                  return { className: activeLinkClass };
                }
                return null;
              }}
              to="/blog"
            >
              Blog
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              getProps={(props) => {
                if (props.location.pathname.indexOf('/talks') === 0) {
                  return { className: activeLinkClass };
                }
                return null;
              }}
              to="/talks"
            >
              Talks
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              getProps={(props) => {
                if (props.location.pathname.indexOf('/cv') === 0) {
                  return { className: activeLinkClass };
                }
                return null;
              }}
              to="/cv"
            >
              CV
            </Link>
          </MenuItem>
        </Menu>
      </Nav>
    );
  }
}
