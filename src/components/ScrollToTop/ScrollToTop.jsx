import React from 'react';
import ScrollToTop from 'react-scroll-up';
import styled from '@emotion/styled';

const Container = styled('div')`
  width: 30px;
  height: 30px;
  background-color: #89bcfe;
  border-radius: 50%;
  opacity: 0.6;
`;

const IconSvg = styled('svg')`
  color: #fff;
  font-size: 30px;
  font-weight: 300;
`;

export default () => (
  <ScrollToTop showUnder={300}>
    <Container>
      <IconSvg
        fill="currentColor"
        preserveAspectRatio="xMidYMid meet"
        height="1em"
        width="1em"
        viewBox="0 0 40 40"
      >
        <g>
          <path d="m12.3 25.7l-2.3-2.3 10-10 10 10-2.3 2.3-7.7-7.7z" />
        </g>
      </IconSvg>
    </Container>
  </ScrollToTop>
);
