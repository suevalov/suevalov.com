import React from "react";
import Helmet from "react-helmet";
import styled from "react-emotion";
import "typeface-open-sans/index.css";
import "typeface-montserrat/index.css";
import config from "../../config";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import PageContainer from "./PageContainer/PageContainer";

const PageWrapper = styled("div")`
  min-height: calc(100vh - 230px);
`;

export default class Layout extends React.Component {
  render() {
    const { children, location } = this.props;
    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Navigation currentPathname={location.pathname} />
        <PageWrapper>
          <PageContainer>{children}</PageContainer>
        </PageWrapper>
        <PageContainer>
          <Footer config={config} />
        </PageContainer>
      </div>
    );
  }
}
