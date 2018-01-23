import React, { Component } from "react";
import styled from "react-emotion";
import _ from "lodash";
import Link from "gatsby-link";

const PostTagsContainer = styled("div")`
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
          tags.map(tag => (
            <Link
              className="animated"
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/blog/tags/${_.kebabCase(tag)}`}
            >
              #{tag}
            </Link>
          ))}
      </PostTagsContainer>
    );
  }
}

export default PostTags;
