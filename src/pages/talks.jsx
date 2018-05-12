import React from "react";
import Helmet from "react-helmet";
import styled from "react-emotion";
import keys from "lodash/keys";
import sortBy from "lodash/sortBy";
import config from "../../config";
import { FancyH2 } from "../components/FancyHeader/FancyHeader";
import Talk from "../components/Talk";
import allTalks from "../../content/talks.json";

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
  margin: 60px auto 0 auto;
  max-width: 560px;
`;

const Group = styled("div")`
  width: 100%;
  margin-bottom: 60px;
`;

const TalksList = styled("ul")`
  list-style: none;
  margin: 0;
  margin-bottom: 40px;
`;

class Talks extends React.Component {
  render() {
    const groupedTalks = groupTalksByYear(allTalks);
    return (
      <div>
        <Helmet title={config.siteTitle} />
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

export default Talks;
