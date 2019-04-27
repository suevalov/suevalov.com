import {
  DEFAULT_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from 'typography-breakpoint-constants';

import styled from '@emotion/styled';

const PostContainer = styled('div')`
  max-width: 660px;
  margin: 0 auto;

  .breakout {
    margin-left: -100px;
    margin-right: -100px;
  }

  code.language-text {
    padding-left: 5px;
    padding-right: 5px;
    background: rgba(137, 188, 254, 0.25);
    color: #1a1a1a;
  }

  li ul,
  li ol {
    margin-top: 0;
  }

  ul {
    margin-left: 0;
    padding: 0;
    list-style: none;
    padding-left: 20px;
    list-style-image: url(/images/bullet.svg);

    li {
      padding-left: 10px;
      margin-bottom: 5px;
    }
  }

  ol {
    margin-left: 0;
    padding: 0;
    list-style-type: none;

    li {
      position: relative;
      counter-increment: step-counter;
      padding-left: 5px;
      margin-bottom: 5px;
      margin-left: 25px;

      &:before {
        position: absolute;
        left: -25px;
        top: 5px;
        content: counter(step-counter);
        margin-right: 5px;
        font-size: 0.8em;
        background-color: rgba(137, 188, 254, 0.8);
        color: white;
        font-weight: bold;
        height: 20px;
        text-align: center;
        line-height: 20px;
        width: 20px;
        border-radius: 3px;
      }
    }
  }

  h2 {
    position: relative;
    display: inline-block;

    :before {
      content: '';
      width: 90%;
      height: 15px;
      position: absolute;
      left: -10px;
      bottom: -5px;
      background-color: #89bcfe;
      opacity: 0.6;
      z-index: -2;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }

  figure {
    img {
      margin-bottom: 0;
    }

    figcaption {
      text-align: center;
      font-size: 1em;
      font-style: italic;
      color: #666;
      padding: 0.75em 2em 0.75em 0;
    }
  }

  blockquote {
    margin-left: 0;
  }

  twitterwidget {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px !important;
  }

  .gatsby-highlight {
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: -80px;
    margin-right: -80px;
  }

  ${DEFAULT_MEDIA_QUERY} {
    .gatsby-highlight {
      margin-left: 0;
      margin-right: 0;
    }
  }

  ${DEFAULT_MEDIA_QUERY} {
    .breakout {
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 700px) {
    margin: 0 10px;
  }
`;

export const HiddenOnTablet = styled('div')`
  ${TABLET_MEDIA_QUERY} {
    display: none;
  }
`;

export const MetaRow = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.9em;
  margin-bottom: 10px;

  & > * {
    margin-bottom: 10px;
  }

  time {
    font-size: 0.9em;
    color: rgba(0, 0, 0, 0.54);
  }

  span:after {
    content: '\\00B7';
    color: rgba(0, 0, 0, 0.54);
  }

  span {
    padding-left: 10px;
    padding-right: 10px;
  }

  ${MOBILE_MEDIA_QUERY} {
    flex-direction: column;
  }
`;

export default PostContainer;
