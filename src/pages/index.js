import React from 'react';
import {graphql} from 'gatsby';
import get from 'lodash/get';
import partition from 'lodash/partition'
import Helmet from 'react-helmet';

import {PostList, Tag, Foldable} from '../components/helpers';
import Layout from '../components/layout';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    // old posts are more than 2 years old
    const [recent, old] = partition(posts, (post) => (new Date().getFullYear() - new Date(post.node.frontmatter.date).getFullYear()) < 2 )

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
        <p>Posts from the last 2 years, newest first: </p>
        <p>
          <PostList posts={recent} />
        </p>
        <Foldable label="Older Posts">
          <PostList posts={old} />
        </Foldable>
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
      # filter: {fields: {slug: {regex: "/post/"}}}
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
