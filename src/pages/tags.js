import React from 'react';
import {graphql} from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import {TagList} from '../components/helpers';
const slugifyTag = tag => tag.replace(/[^\w]/gi, '-').toLowerCase();

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );
    const tags = get(this, 'props.data.allMarkdownRemark.group')
      .map(t => ({...t, slug: slugifyTag(t.fieldValue)}))
      .sort((a, b) => (a.totalCount > b.totalCount ? -1 : 1));

    return (
      <Layout siteTitle={siteTitle} location={this.props.location}>
        <Helmet
          htmlAttributes={{lang: 'en'}}
          meta={[{name: 'description', content: siteDescription}]}
          title={siteTitle}
        />
        <p>All tags, by number of posts</p>
        <TagList tags={tags} />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
