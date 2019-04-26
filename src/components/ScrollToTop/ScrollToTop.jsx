import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { css } from '@emotion/core';

const classes = {
  container: css`
    width: 30px;
    height: 30px;
    background-color: #89bcfe;
    border-radius: 50%;
    opacity: 0.6;
  `,
  icon: css`
    color: #fff;
    font-size: 30px;
    font-weight: 300;
  `,
};

export default () => (
  <ScrollToTop showUnder={300}>
    <div className={classes.container}>
      <svg
        className={classes.icon}
        fill="currentColor"
        preserveAspectRatio="xMidYMid meet"
        height="1em"
        width="1em"
        viewBox="0 0 40 40"
      >
        <g>
          <path d="m12.3 25.7l-2.3-2.3 10-10 10 10-2.3 2.3-7.7-7.7z" />
        </g>
      </svg>
    </div>
  </ScrollToTop>
);
