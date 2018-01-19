import React from "react";
import { css } from "emotion";
import styled from "react-emotion";
import Link from "gatsby-link";
import { DEFAULT_WIDTH } from "typography-breakpoint-constants";

const activeLinkClass = css`
  color: black;
  text-decoration: none;
  box-shadow: none;
`;

const HeaderContainer = styled("nav")`
  height: 70px;
  margin: 10px auto;
  display: flex;
  max-width: ${DEFAULT_WIDTH};
`;

const Menu = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const MenuItem = styled("li")`
  margin-right: 20px;

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

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
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
      </HeaderContainer>
    );
  }
}
