import React from 'react';
import {Link, graphql} from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import {Post} from '../components/helpers';
import Layout from '../components/layout';
import {rhythm} from '../utils/typography';

class PostList extends React.Component {
  render() {
    // filter out pages not in /posts, (about, etc)
    let posts =
      this.props.posts &&
      this.props.posts.filter(post => post.node.fields.slug.match('post'));
    return (
      <React.Fragment>
        {posts.map(({node}) => (
          <Post key={node.fields.slug} node={node} />
        ))}
      </React.Fragment>
    );
  }
}

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <Layout siteTitle={siteTitle} location={this.props.location}>
        <Helmet
          htmlAttributes={{lang: 'en'}}
          meta={[{name: 'description', content: siteDescription}]}
          title={siteTitle}
        />
        <p>I'm Rob.</p>
        <p>
          This is my site's homepage. Check out recommended posts, reviewed
          links, exercises, and small thoughts.
        </p>
        <p>All Posts, newest first: </p>
        <PostList posts={posts} />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
