import React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants';
import { injectIntl, useIntl } from 'gatsby-plugin-intl';
import Config from '../../config';
import { FancyH1 } from '../components/FancyHeader/FancyHeader';
import ExperienceBlock from '../components/ExperienceBlock/ExperienceBlock';
import SkillsBlock from '../components/SkillsBlock/SkillsBlock';
import RecommendationsBlock from '../components/RecommendationsBlock/RecommendationsBlock';
import Layout from '../components/Layout';
import recommendations from '../../content/recommendations.json';
import languages from '../../content/languages.json';
import personalQualities from '../../content/personalQualities.json';
import designSkills from '../../content/designSkills.json';
import developmentSkills from '../../content/developmentSkills.json';

const HeaderRow = styled('div')`
  display: flex;
  align-items: center;

  a {
    margin-left: 20px;
    font-size: 0.9em;
  }
`;

const Header = styled(FancyH1)`
  margin-bottom: 0;
`;

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;

  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
  }

  > div:first-child {
    position: relative;
    margin-right: 20px;
    width: 50%;
  }

  > div:last-child {
    position: relative;
    width: 40%;
  }

  ${TABLET_MEDIA_QUERY} {
    > div:first-child {
      width: 100%;
    }

    > div:last-child {
      width: 90%;
    }
  }
`;

function CV(props) {
  const { formatMessage } = useIntl();
  return (
    <Layout location={props.location}>
      <Helmet
        title={`${formatMessage({ id: 'cv' })} - ${formatMessage({
          id: 'site-title',
        })}`}
      />
      <HeaderRow>
        <Header>{formatMessage({ id: 'cv' })}</Header>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={Config.userLinks.find((item) => item.type === 'linkedin').href}
        >
          {formatMessage({ id: 'reach-me-out-on-linkedin' })}
        </a>
      </HeaderRow>
      <Row style={{ marginTop: 50 }}>
        <div>
          <ExperienceBlock />
        </div>
        <div>
          <SkillsBlock
            languages={languages}
            personalQualities={personalQualities}
            designSkills={designSkills}
            developmentSkills={developmentSkills}
          />
          <RecommendationsBlock recommendations={recommendations} />
        </div>
      </Row>
    </Layout>
  );
}

export default injectIntl(CV);
