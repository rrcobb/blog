const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

function createTagPages(createPage, graphql, tagPage) {
  return graphql(`
    {
      allMarkdownRemark {
        distinct(field: frontmatter___tags)
      }
    }
  `).then(result => {
    if (result.errors) {
      console.log(result.errors);
      reject(result.errors);
    }

    const tags = result.data.allMarkdownRemark.distinct;
    _.each(tags, (tag, index) => {
      createPage({
        path: `/tags/${tag}`,
        component: tagPage,
        context: {
          tag,
        },
      });
    });
  });
}

function createPosts(createPage, graphql, blogPost) {
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: {fields: [frontmatter___date], order: DESC}
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors);
      reject(result.errors);
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    _.each(posts, (post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });
  });
}
exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    const tagPage = path.resolve('./src/templates/tag-page.js');
    resolve(
      Promise.all([
        createTagPages(createPage, graphql, tagPage),
        createPosts(createPage, graphql, blogPost),
      ])
    );
  });
};

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode});
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
