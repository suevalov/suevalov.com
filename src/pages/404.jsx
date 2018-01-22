import React from "react";
import Helmet from "react-helmet";
import config from "../../config";
import { FancyH1, FancyH2 } from "../components/FancyHeader/FancyHeader";

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={`Not Found - ${config.siteTitle}`} />
        <FancyH1 style={{ marginTop: 100 }}>404</FancyH1>
        <FancyH2>Page you{"'"}re looking for is not found</FancyH2>
        <div style={{ height: 100 }} />
      </div>
    );
  }
}

export default Blog;
