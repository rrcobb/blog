import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/layout';
import {PostList} from '../components/helpers';

class TagPageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    const {tag} = this.props.pageContext;

    return (
      <Layout siteTitle={siteTitle} location={this.props.location}>
        <Helmet
          htmlAttributes={{lang: 'en'}}
          meta={[{name: 'description', content: siteDescription}]}
          title={`${tag} | ${siteTitle}`}
        />
        <p>
          Posts matching tag <strong>{tag}</strong>, newest first:{' '}
        </p>
        <PostList posts={posts} />
      </Layout>
    );
  }
}

export default TagPageTemplate;

export const pageQuery = graphql`
  query BlogPostsByTag($tag: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(filter: {frontmatter: {tags: {in: [$tag]}}}) {
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
