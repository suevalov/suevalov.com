import React from "react";
import Helmet from "react-helmet";
import "typeface-open-sans/index.css";
import "typeface-montserrat/index.css";
import config from "../../config";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import PageContainer from "../components/PageContainer/PageContainer";

export default class MainLayout extends React.Component {
  render() {
    const { children, location } = this.props;
    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Navigation currentPathname={location.pathname} />
        <PageContainer>{children()}</PageContainer>
        <PageContainer>
          <Footer config={config} />
        </PageContainer>
      </div>
    );
  }
}
