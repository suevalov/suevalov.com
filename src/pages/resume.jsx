import React from "react";
import Helmet from "react-helmet";
import styled from "react-emotion";
import { TABLET_MEDIA_QUERY } from "typography-breakpoint-constants";
import PageContainer from "../components/PageContainer/PageContainer";
import Config from "../../config";
import ExperienceBlock from "../components/ExperienceBlock/ExperienceBlock";
import SkillsBlock from "../components/SkillsBlock/SkillsBlock";
import RecommendationsBlock from "../components/RecommendationsBlock/RecommendationsBlock";

const Row = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;

  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
  }

  > div:first-child {
    position: relative;
    margin-right: 20px;
    width: 50%;
  }

  > div:last-child {
    position: relative;
    width: 40%;
  }

  ${TABLET_MEDIA_QUERY} {
    > div:first-child {
      width: 100%;
    }

    > div:last-child {
      width: 90%;
    }
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
            <RecommendationsBlock />
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
