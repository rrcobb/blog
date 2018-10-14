import React from 'react';
import {graphql} from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import {PostList, Tag} from '../components/helpers';
import Layout from '../components/layout';

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
          This is my site's homepage. Check out <Tag tag='recommended' />,{' '}
          <Tag tag="review" text="reviews" />, <Tag text="exercises" tag="exercise" />, and{' '}
          <Tag text="little thoughts" tag="tweet" />.
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
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      # filter out pages not in /posts, (about, etc)
      filter: {fields: {slug: {regex: "/post/"}}}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
