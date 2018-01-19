import React from "react";
import { css } from "emotion";
import styled from "react-emotion";
import Link from "gatsby-link";
import { DEFAULT_WIDTH } from "typography-breakpoint-constants";
import HexImage from "../HexImage/HexImage";
import Config from "../../../config";

const activeLinkClass = css`
  color: black;
  text-decoration: none;
  box-shadow: none;
`;

const Nav = styled("nav")`
  display: flex;
  margin: 10px auto 40px auto;
  max-width: ${DEFAULT_WIDTH};
`;

const Menu = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  margin-left: 16px;
  padding: 0;
  list-style: none;
`;

const MenuItem = styled("li")`
  margin: 0 20px 0 0;

  a:not(.${activeLinkClass}) {
    position: relative;
    transition: color 0.2s ease-out;

    &:hover,
    &:focus {
      color: #fff;
      outline: none;

      &:before {
        transition: transform 0.2s ease-in;
        transform: scaleX(1);
      }
    }

    &:before {
      content: "";
      position: absolute;
      left: -2%;
      top: 0;
      width: 104%;
      background: #89bcfe;
      transform: scaleX(0);
      transition: transform 0.1s ease-out;
      height: 100%;
      transform-origin: left top;
      z-index: -1;
    }
  }
`;

const ProfileHexImage = styled(HexImage)`
  width: 70px;
  height: 70px;
  transition: 0.5s;

  &:hover {
    transform: rotate(-3deg);
  }
`;

const LogoLink = styled(Link)`
  display: inline-flex;
  box-shadow: none;
`;

export default class Header extends React.Component {
  render() {
    return (
      <Nav>
        <LogoLink to="/">
          <ProfileHexImage image={Config.userAvatar} title={Config.userName} />
        </LogoLink>
        <Menu>
          <MenuItem>
            <Link
              isActive={(match, location) => location.pathname === "/"}
              activeClassName={activeLinkClass}
              to="/"
            >
              Alex Suevalov
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              isActive={(match, location) =>
                location.pathname.indexOf("/blog") === 0
              }
              activeClassName={activeLinkClass}
              to="/blog"
            >
              Blog
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              isActive={(match, location) =>
                location.pathname.indexOf("/talks") === 0
              }
              to="/talks"
              activeClassName={activeLinkClass}
            >
              Talks
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              isActive={(match, location) => location.pathname === "/resume"}
              to="/resume"
              activeClassName={activeLinkClass}
            >
              Resume
            </Link>
          </MenuItem>
        </Menu>
      </Nav>
    );
  }
}
