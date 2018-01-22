import React from "react";
import Helmet from "react-helmet";
import { css } from "emotion";
import styled from "react-emotion";
import { TABLET_MEDIA_QUERY } from "typography-breakpoint-constants";
import PageContainer from "../components/PageContainer/PageContainer";
import LeadText from "../components/LeadText/LeadText";
import LeadContacts from "../components/LeadContacts/LeadContacts";
import Config from "../../config";

const Row = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  margin-bottom: 20px;

  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
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
    return (
      <PageContainer>
        <Helmet title={Config.siteTitle} />
        <Row justifyContent="space-between">
          <LeadText
            techs={Config.techInterestedIn}
            className={classes.leadText}
          />
          <div>
            <LeadContacts
              links={Config.userLinks}
              className={classes.leadContacts}
            />
          </div>
        </Row>
      </PageContainer>
    );
  }
}

export default Index;
