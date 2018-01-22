import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { css } from "emotion";
import styled from "react-emotion";
import { TABLET_MEDIA_QUERY } from "typography-breakpoint-constants";
import PageContainer from "../components/PageContainer/PageContainer";
import LeadText from "../components/LeadText/LeadText";
import LeadContacts from "../components/LeadContacts/LeadContacts";
import Config from "../../config";
import Talk from "./talks/Talk";

const Row = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  margin-bottom: 20px;

  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
  }
`;

const TalksList = styled("div")`
  font-size: 0.9em;

  h3 {
    margin-top: 20px;
    margin-bottom: 20px;

    a {
      margin-left: 10px;
      font-size: 0.6em;
      vertical-align: middle;
      font-family: "Open Sans", "Helvetica Neue", serif;
    }
  }

  ul {
    list-style: none;
    margin: 0;
  }

  li:last-child {
    margin: 0;
  }
`;

const classes = {
  leadContacts: css`
    min-width: 250px;
    min-height: 100px;

    ${TABLET_MEDIA_QUERY} {
      width: 100%;
    }
  `,
  leadText: css`
    flex-grow: 0;
    margin-right: 60px;

    ${TABLET_MEDIA_QUERY} {
      margin-right: 0;
      margin-bottom: 20px;
    }
  `
};

class Index extends React.Component {
  render() {
    const talks = this.props.data.allTalksJson.edges.map(edge => edge.node);
    return (
      <PageContainer>
        <Helmet title={Config.siteTitle} />
        <Row justifyContent="space-between">
          <LeadText
            techs={Config.techInterestedIn}
            className={classes.leadText}
          />
          <LeadContacts
            links={Config.userLinks}
            className={classes.leadContacts}
          />
        </Row>
        <Row justifyContent="space-between">
          <TalksList>
            <h3>
              Latest Talks
              <Link className="animated" to="/talks">
                see all
              </Link>
            </h3>
            <ul>
              {talks.map(talk => (
                <li>
                  <Talk talk={talk} />
                </li>
              ))}
            </ul>
          </TalksList>
        </Row>
      </PageContainer>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allTalksJson(limit: 3) {
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

export default Index;
