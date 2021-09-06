import React from 'react';
import styled from '@emotion/styled';
import Link from 'gatsby-link';
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants';
import { FancyH2 } from '../FancyHeader/FancyHeader';

const Container = styled('div')`
  margin: 60px auto 0px auto;
  padding: 0 10px;
  display: flex;
  flex-direction: row;

  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
  }
`;

const Column = styled('div')`
  width: 50%;
  margin-bottom: 60px;
  ${TABLET_MEDIA_QUERY} {
    width: 100%;
  }
`;

class PostListing extends React.Component {
  render() {
    const { posts, notes } = this.props;
    return (
      <Container>
        {posts.length > 0 && (
          <Column>
            <FancyH2>Posts</FancyH2>
            {posts.map((post) => (
              <div key={post.title} style={{ marginBottom: 10 }}>
                <Link to={post.path}>{post.title}</Link>
              </div>
            ))}
          </Column>
        )}
        {notes.length > 0 && (
          <Column>
            <FancyH2>Today I Learned</FancyH2>
            {notes.map((note) => (
              <div key={note.title} style={{ marginBottom: 10 }}>
                <Link to={note.path}>{note.title}</Link>
              </div>
            ))}
          </Column>
        )}
      </Container>
    );
  }
}

export default PostListing;
