import React from "react";
import Helmet from "react-helmet";
import styled from "react-emotion";
import { TABLET_MEDIA_QUERY } from "typography-breakpoint-constants";
import Config from "../../config";
import { FancyH1 } from "../components/FancyHeader/FancyHeader";
import ExperienceBlock from "../components/ExperienceBlock/ExperienceBlock";
import SkillsBlock from "../components/SkillsBlock/SkillsBlock";
import RecommendationsBlock from "../components/RecommendationsBlock/RecommendationsBlock";
import Layout from "../components/Layout";
import recommendations from "../../content/recommendations.json";
import languages from "../../content/languages.json";
import personalQualities from "../../content/personalQualities.json";
import designSkills from "../../content/designSkills.json";
import developmentSkills from "../../content/developmentSkills.json";

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

const DownloadLink = styled("a")`
  font-size: 16px;
  margin-left: 20px;
`;

class Resume extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet title={Config.siteTitle} />
        <FancyH1>
          Resume{" "}
          <DownloadLink href="/cv_alexander_suevalov.pdf">
            Download as PDF
          </DownloadLink>
        </FancyH1>
        <Row style={{ marginTop: 50 }}>
          <div>
            <ExperienceBlock />
            <RecommendationsBlock recommendations={recommendations} />
          </div>
          <div>
            <SkillsBlock
              languages={languages}
              personalQualities={personalQualities}
              designSkills={designSkills}
              developmentSkills={developmentSkills}
            />
          </div>
        </Row>
      </Layout>
    );
  }
}

export default Resume;
