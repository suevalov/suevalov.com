import React from "react";
import Helmet from "react-helmet";
import config from "../../config";
import PageContainer from "../components/PageContainer/PageContainer";

class Index extends React.Component {
  render() {
    return (
      <PageContainer>
        <Helmet title={config.siteTitle} />
        <h1>Hi, I{"'"}m Alex</h1>
        <h2>Senior JavaScript developer, based in Wroclaw</h2>
      </PageContainer>
    );
  }
}

export default Index;
