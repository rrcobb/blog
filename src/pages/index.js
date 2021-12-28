import React from 'react';
import {graphql} from 'gatsby';
import get from 'lodash/get';
import partition from 'lodash/partition'
import Helmet from 'react-helmet';
import { withMixpanel } from 'gatsby-plugin-mixpanel'

import {PostList, Tag, Foldable} from '../components/helpers';
import Layout from '../components/layout';

class BlogIndex extends React.Component {
  componentDidMount() {
    const { mixpanel } = this.props
    mixpanel.track(`index`); // send event to mixpanel
    window.mixPanel = mixpanel;
    console.log('should be hitting a mixpanel track')
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    // old posts are more than 2 years old
    const [recent, old] = partition(posts, (post) => (new Date(post.node.frontmatter.date).getFullYear()) > 2015 )

    return (
      <Layout siteTitle={siteTitle} location={this.props.location}>
        <Helmet
          htmlAttributes={{lang: 'en'}}
          meta={[{name: 'description', content: siteDescription}]}
          title={siteTitle}
        />
        <p>I'm Rob.</p>
        <p>
          This is my site's homepage. Check out <Tag tag="review" text="reviews" />, <Tag tag="cs ed weekly" text="CS Ed Weekly" />, and <Tag tag="yak shave" text="yak shaves" /> 
        </p>
        <p>Posts from the last few years, newest first: </p>
        <div>
          <PostList posts={recent} />
        </div>
        <p></p>
        <Foldable label="Older Posts">
          <PostList posts={old} />
        </Foldable>
      </Layout>
    );
  }
}

export default withMixpanel()(BlogIndex);

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
