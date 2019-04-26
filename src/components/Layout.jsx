import React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import 'typeface-open-sans/index.css';
import 'typeface-montserrat/index.css';
import './Layout.css';
import config from '../../config';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import PageContainer from './PageContainer/PageContainer';

const ContentContainer = styled.div`
  padding-bottom: 73px;
`;

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 73px;
`;

export default class Layout extends React.Component {
  render() {
    const { children, location } = this.props;
    return (
      <div style={{ position: 'relative', minHeight: '100%' }}>
        <Helmet>
          <title>{`${config.siteTitle}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Navigation currentPathname={location.pathname} />
        <ContentContainer>
          <PageContainer>{children}</PageContainer>
        </ContentContainer>
        <FooterContainer>
          <PageContainer>
            <Footer config={config} />
          </PageContainer>
        </FooterContainer>
      </div>
    );
  }
}
