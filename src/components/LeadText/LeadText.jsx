import React from 'react';
import styled from '@emotion/styled';
import { FancyH1 } from '../FancyHeader/FancyHeader';

const H2 = styled('h2')`
  margin: 0;
  padding: 0;
  margin-bottom: 0.5em;
`;

const Text = styled('p')`
  margin: 0;
  padding: 0;
  font-size: 0.9em;
  line-height: 1.8em;

  strong {
    margin-left: 2px;
  }
`;

export default class LeadText extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();
    const experience = currentYear - 2010;
    return (
      <div className={this.props.className}>
        <FancyH1>Hi, I&apos;m Alex</FancyH1>
        <H2>Staff Software Engineer.</H2>
        <H2 style={{ textAlign: 'right' }}>
          Based&nbsp;in&nbsp;Berlin. Work at{' '}
          <a className="animated" href="http://contentful.com">
            Contentful
          </a>
          .
        </H2>
        <Text style={{ marginTop: 20 }}>
          {experience} years of professional expertise in web development and
          creating complex SPAs.
        </Text>
        <Text>
          I interviewed over 30 engineers and was actively involved in sharing
          knowledge and good practices in companies I worked for. Focused on
          performance and maintainability, simplifying processes and getting
          things done.
        </Text>
      </div>
    );
  }
}

LeadText.defaultProps = {
  className: '',
};
