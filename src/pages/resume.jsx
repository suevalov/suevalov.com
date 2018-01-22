import React from "react";
import Helmet from "react-helmet";
import styled from "react-emotion";
import { TABLET_MEDIA_QUERY } from "typography-breakpoint-constants";
import Config from "../../config";
import { FancyH1 } from "../components/FancyHeader/FancyHeader";
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
    const recommendations = this.props.data.allRecommendationsJson.edges.map(
      edge => edge.node
    );
    const languages = this.props.data.allLanguagesJson.edges.map(
      edge => edge.node
    );
    const personalQualities = this.props.data.allPersonalQualitiesJson.edges.map(
      edge => edge.node
    );
    const designSkills = this.props.data.allDesignSkillsJson.edges.map(
      edge => edge.node
    );
    const developmentSkills = this.props.data.allDevelopmentSkillsJson.edges.map(
      edge => edge.node
    );
    return (
      <div>
        <Helmet title={Config.siteTitle} />
        <FancyH1>Resume</FancyH1>
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
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ResumeQuery {
    allRecommendationsJson {
      edges {
        node {
          text
          position
          name
        }
      }
    }
    allPersonalQualitiesJson {
      edges {
        node {
          label
          value
        }
      }
    }
    allDesignSkillsJson {
      edges {
        node {
          label
          value
        }
      }
    }
    allLanguagesJson {
      edges {
        node {
          label
          value
        }
      }
    }
    allDevelopmentSkillsJson {
      edges {
        node {
          label
          value
        }
      }
    }
  }
`;

export default Resume;
