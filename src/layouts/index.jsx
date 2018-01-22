import React from "react";
import Helmet from "react-helmet";
import config from "../../config";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

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
        {children()}
        <Footer config={config} />
      </div>
    );
  }
}
