const path = require('path');
const _ = require('lodash');

module.exports = ({ graphql, actions }) => {
  const { createPage } = actions;

  const tags = new Promise((resolve, reject) => {
    const tagPage = path.resolve('src/templates/tag.jsx');
    graphql(
      `
        {
          allContentfulTag {
            edges {
              node {
                title
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

      const edges = _.get(result, 'data.allContentfulTag.edges', []);

      edges.forEach(edge => {
        const tag = edge.node.title;
        createPage({
          path: `/blog/tags/${_.kebabCase(tag)}/`,
          component: tagPage,
          context: {
            tag,
          },
        });
      });

      resolve();
    });
  });

  const blog = new Promise((resolve, reject) => {
    const postPage = path.resolve('src/templates/post.jsx');

    graphql(
      `
        {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/content/blog/**/*.md" } }
          ) {
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

      const edges =
        result.data.allMarkdownRemark && result.data.allMarkdownRemark.edges
          ? result.data.allMarkdownRemark.edges
          : [];
      edges.forEach(edge => {
        createPage({
          path: edge.node.fields.slug,
          component: postPage,
          context: {
            slug: edge.node.fields.slug,
          },
        });
      });

      resolve();
    });
  });

  const notes = new Promise(resolve => {
    const notePage = path.resolve(`./src/templates/note.jsx`);
    graphql(`
      {
        allContentfulTodayILearned {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const edges = _.get(result, 'data.allContentfulTodayILearned.edges', []);
      edges.forEach(({ node }) => {
        createPage({
          path: `/blog/til/${node.slug}/`,
          component: notePage,
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });

  return Promise.all([blog, tags, notes]);
};
