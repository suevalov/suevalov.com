import React from 'react';
import styled from '@emotion/styled';
import { useIntl } from 'gatsby-plugin-intl';
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

export default function LeadText(props) {
  const { formatMessage } = useIntl();
  const currentYear = new Date().getFullYear();
  const experience = currentYear - 2010;
  return (
    <div className={props.className}>
      <FancyH1>{formatMessage({ id: 'hi-iam-alex' })}</FancyH1>
      <H2>Staff Software Engineer.</H2>
      <H2 style={{ textAlign: 'right' }}>
        {formatMessage({ id: 'based-in-berlin' })}{' '}
        {formatMessage({ id: 'work-at' })}{' '}
        <a
          href="http://contentful.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Contentful
        </a>
        .
      </H2>
      <Text style={{ marginTop: 20 }}>
        {formatMessage({ id: 'lead-text-1' }, { years: experience })}
      </Text>
      <Text>{formatMessage({ id: 'lead-text-2' })}</Text>
    </div>
  );
}

LeadText.defaultProps = {
  className: '',
};
