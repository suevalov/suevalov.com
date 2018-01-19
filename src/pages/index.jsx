import React from "react";
import Helmet from "react-helmet";
import config from "../../config";
import PageContainer from "../components/PageContainer/PageContainer";

class Index extends React.Component {
  render() {
    return (
      <PageContainer>
        <Helmet title={config.siteTitle} />
        <p>test</p>
      </PageContainer>
    );
  }
}

export default Index;
