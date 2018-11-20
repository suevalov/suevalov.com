const path = require("path");
const _ = require("lodash");

module.exports = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postPage = path.resolve("src/templates/post.jsx");
    const tagPage = path.resolve("src/templates/tag.jsx");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    tags
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        const tagSet = new Set();
        const edges =
          result.data.allMarkdownRemark && result.data.allMarkdownRemark.edges
            ? result.data.allMarkdownRemark.edges
            : [];
        edges.forEach(edge => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);
            });
          }

          createPage({
            path: edge.node.fields.slug,
            component: postPage,
            context: {
              slug: edge.node.fields.slug
            }
          });
        });

        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPage({
            path: `/blog/tags/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag
            }
          });
        });
      })
    );
  });
};
