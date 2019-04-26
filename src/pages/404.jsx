import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config';
import Layout from '../components/Layout';
import { FancyH1, FancyH2 } from '../components/FancyHeader/FancyHeader';

class Blog extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet title={`Not Found - ${config.siteTitle}`} />
        <FancyH1 style={{ paddingTop: 100 }}>404</FancyH1>
        <FancyH2>Page you{"'"}re looking for is not found</FancyH2>
      </Layout>
    );
  }
}

export default Blog;
