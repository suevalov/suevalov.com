import React from "react";
import Helmet from "react-helmet";
import config from "../../../config";
import PageContainer from "../../components/PageContainer/PageContainer";

class ResumePage extends React.Component {
  render() {
    return (
      <PageContainer>
        <Helmet title={config.siteTitle} />
        <h1>Resume</h1>
      </PageContainer>
    );
  }
}

export default ResumePage;
