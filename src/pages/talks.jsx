import React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import keys from 'lodash/keys';
import sortBy from 'lodash/sortBy';
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants';
import Layout from '../components/Layout';
import config from '../../config';
import { FancyH2 } from '../components/FancyHeader/FancyHeader';
import Talk from '../components/Talk';
import allTalks from '../../content/talks.json';

const groupTalksByYear = (talks) => {
  const groups = {};
  talks.forEach((talk) => {
    const date = talk.date;
    const year = date.split('.')[2];
    if (groups[year]) {
      groups[year].push(talk);
    } else {
      groups[year] = [talk];
    }
  });
  const years = sortBy(keys(groups), (year) => -year);
  return years.map((year) => ({
    label: year,
    talks: groups[year],
  }));
};

const GroupsContainer = styled('div')`
  margin: 60px auto 0 auto;
  padding: 0 10px;
  max-width: 960px;
`;

const Grid = styled('div')`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  ${TABLET_MEDIA_QUERY} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Group = styled('div')`
  width: 100%;
  margin-bottom: 60px;
`;

const TalksList = styled('ul')`
  list-style: none;
  margin: 0;
  margin-bottom: 40px;
`;

class Talks extends React.Component {
  render() {
    const groupedTalks = groupTalksByYear(allTalks);
    return (
      <Layout location={this.props.location}>
        <Helmet title={`Talks - ${config.siteTitle}`} />
        <GroupsContainer>
          <Grid>
            {groupedTalks.map((group) => (
              <Group key={group.label}>
                <FancyH2>{group.label}</FancyH2>
                <TalksList>
                  {group.talks.map((talk) => (
                    <li key={talk.title}>
                      <Talk talk={talk} />
                    </li>
                  ))}
                </TalksList>
              </Group>
            ))}
          </Grid>
        </GroupsContainer>
      </Layout>
    );
  }
}

export default Talks;
