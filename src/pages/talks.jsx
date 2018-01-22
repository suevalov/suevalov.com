import React from "react";
import Helmet from "react-helmet";
import styled from "react-emotion";
import keys from "lodash/keys";
import sortBy from "lodash/sortBy";
import { TABLET_MEDIA_QUERY } from "typography-breakpoint-constants";
import config from "../../config";
import { FancyH1, FancyH2 } from "../components/FancyHeader/FancyHeader";
import Talk from "../components/Talk";

const groupTalksByYear = talks => {
  const groups = {};
  talks.forEach(talk => {
    const date = talk.date;
    const year = date.split(".")[2];
    if (groups[year]) {
      groups[year].push(talk);
    } else {
      groups[year] = [talk];
    }
  });
  const years = sortBy(keys(groups), year => -year);
  return years.map(year => ({
    label: year,
    talks: groups[year]
  }));
};

const GroupsContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 60px;

  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
  }
`;

const Group = styled("div")`
  width: 40%;
  margin-right: 10%;

  ${TABLET_MEDIA_QUERY} {
    width: 100%;
    margin-right: 0;
  }
`;

const TalksList = styled("ul")`
  list-style: none;
  margin: 0;
  margin-bottom: 40px;
`;

class Talks extends React.Component {
  render() {
    const talks = this.props.data.allTalksJson.edges.map(edge => edge.node);
    const groupedTalks = groupTalksByYear(talks);
    return (
      <div>
        <Helmet title={config.siteTitle} />
        <FancyH1>Talks</FancyH1>
        <GroupsContainer>
          {groupedTalks.map(group => (
            <Group key={group.label}>
              <FancyH2>{group.label}</FancyH2>
              <TalksList>
                {group.talks.map(talk => (
                  <li key={talk.title}>
                    <Talk talk={talk} />
                  </li>
                ))}
              </TalksList>
            </Group>
          ))}
        </GroupsContainer>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TalksQuery {
    allTalksJson {
      edges {
        node {
          title
          place
          date
          url
          video
          language
        }
      }
    }
  }
`;

export default Talks;
