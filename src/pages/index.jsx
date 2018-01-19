import React from "react";
import Helmet from "react-helmet";
import config from "../../config";

class Index extends React.Component {
  render() {
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <h1>Index page</h1>
      </div>
    );
  }
}

export default Index;
