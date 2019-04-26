import styled from '@emotion/styled';
import {
  DEFAULT_WIDTH,
  DEFAULT_MEDIA_QUERY,
} from 'typography-breakpoint-constants';

const PageContainer = styled('div')`
  max-width: ${DEFAULT_WIDTH};
  margin: 0 auto;

  ${DEFAULT_MEDIA_QUERY} {
    margin: 0 10px;
  }
`;

export default PageContainer;
