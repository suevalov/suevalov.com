import React, { Component } from 'react';
import styled from '@emotion/styled';
import kebabCase from 'lodash/kebabCase';
import Link from 'gatsby-link';

const PostTagsContainer = styled('div')`
  a {
    margin-right: 10px;
  }
`;

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <PostTagsContainer>
        {tags &&
          tags.map((tag) => (
            <Link
              className="animated"
              key={tag}
              style={{ textDecoration: 'none' }}
              to={`/blog/tags/${kebabCase(tag)}`}
            >
              #{tag}
            </Link>
          ))}
      </PostTagsContainer>
    );
  }
}

export default PostTags;
