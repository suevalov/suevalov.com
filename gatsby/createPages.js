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
    ).then((result) => {
      if (result.errors) {
        /* eslint no-console: "off" */
        console.log(result.errors);
        reject(result.errors);
      }

      const edges = _.get(result, 'data.allContentfulTag.edges', []);

      edges.forEach((edge) => {
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

  const notes = new Promise((resolve) => {
    const tilPage = path.resolve(`./src/templates/til.jsx`);
    const newPostPage = path.resolve(`./src/templates/new-post.jsx`);
    graphql(`
      {
        allContentfulTodayILearned {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      const tilNotes = _.get(
        result,
        'data.allContentfulTodayILearned.edges',
        []
      );
      const posts = _.get(result, 'data.allContentfulPost.edges', []);
      tilNotes.forEach(({ node }) => {
        createPage({
          path: `/blog/til/${node.slug}/`,
          component: tilPage,
          context: {
            slug: node.slug,
          },
        });
      });
      posts.forEach(({ node }) => {
        createPage({
          path: `/blog/${node.slug}/`,
          component: newPostPage,
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });

  return Promise.all([tags, notes]);
};
