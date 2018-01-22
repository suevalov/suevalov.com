import React from "react";
import Helmet from "react-helmet";
import styled from "react-emotion";
import { TABLET_MEDIA_QUERY } from "typography-breakpoint-constants";
import PageContainer from "../components/PageContainer/PageContainer";
import Config from "../../config";
import ExperienceBlock from "../components/ExperienceBlock/ExperienceBlock";
import SkillsBlock from "../components/SkillsBlock/SkillsBlock";

const Row = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  margin-bottom: 20px;

  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
  }

  > div:first-child {
    position: relative;
    flex-grow: 1;
    margin-right: 20px;
  }

  > div:last-child {
    position: relative;
    flex-grow: 1;
    min-width: 45%;
    max-width: 90%;
  }
`;

class Resume extends React.Component {
  render() {
    return (
      <PageContainer>
        <Helmet title={Config.siteTitle} />
        <Row style={{ marginTop: 50 }}>
          <div>
            <ExperienceBlock />
          </div>
          <div>
            <SkillsBlock />
          </div>
        </Row>
      </PageContainer>
    );
  }
}

export default Resume;
