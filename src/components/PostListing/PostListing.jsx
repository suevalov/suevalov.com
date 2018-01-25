import React from "react";
import sortBy from "lodash/sortBy";
import keys from "lodash/keys";
import Link from "gatsby-link";
import { FancyH2 } from "../../components/FancyHeader/FancyHeader";

const groupPostsByYear = posts => {
  const groups = {};
  posts.forEach(post => {
    const date = post.date;
    const year = date.split("-")[0];
    if (groups[year]) {
      groups[year].push(post);
    } else {
      groups[year] = [post];
    }
  });
  const years = sortBy(keys(groups), year => -year);
  return years.map(year => ({
    label: year,
    posts: groups[year]
  }));
};

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    const groupsPostList = groupPostsByYear(postList);
    return (
      <div style={{ marginTop: 60 }}>
        {groupsPostList.map(group => (
          <div key={group.label}>
            <div>
              <FancyH2>{group.label}</FancyH2>
            </div>
            {group.posts.map(post => (
              <div key={post.title} style={{ marginBottom: 10 }}>
                <Link to={post.path}>{post.title}</Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;
