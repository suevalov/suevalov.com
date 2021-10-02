import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants';
import TwitterIcon from '../Icons/TwitterIcon';
import GithubIcon from '../Icons/GithubIcon';
import LinkedInIcon from '../Icons/LinkedInIcon';
import GmailIcon from '../Icons/GmailIcon';
import InstagramIcon from '../Icons/InstagramIcon';

const LeadContactsContainer = styled('div')`
  font-size: 0.9em;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;

    > a:first-child {
      float: left;
      margin-right: 10px;
    }
  }

  ${TABLET_MEDIA_QUERY} {
    li {
      display: inline-block;
      margin-right: 20px;
      margin-bottom: 10px;

      > a:first-child {
        display: none;
      }
    }
  }
`;

const classes = {
  icon: css`
    width: 25px;
    height: 25px;
    opacity: 0.6;
    color: #89bcfe;
    vertical-align: middle;
  `,
};

export default class LeadContacts extends React.Component {
  render() {
    return (
      <LeadContactsContainer className={this.props.className}>
        <ul>
          {this.props.links.map((link) => {
            let IconComponent = null;
            let target = '_blank';

            switch (link.type) {
              case 'gmail':
                IconComponent = GmailIcon;
                target = '_self';
                break;
              case 'github':
                IconComponent = GithubIcon;
                break;
              case 'twitter':
                IconComponent = TwitterIcon;
                break;
              case 'linkedin':
                IconComponent = LinkedInIcon;
                break;
              case 'instagram':
                IconComponent = InstagramIcon;
                break;
              default:
                break;
            }

            if (IconComponent === null) {
              return null;
            }

            return (
              <li key={link.type}>
                <a
                  style={{ boxShadow: 'none' }}
                  target={target}
                  rel="noopener noreferrer"
                  href={link.href}
                  className="not-animated"
                >
                  <IconComponent css={classes.icon} />
                </a>
                <a target={target} rel="noopener noreferrer" href={link.href}>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </LeadContactsContainer>
    );
  }
}
