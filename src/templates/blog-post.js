import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import get from 'lodash/get';
import { withMixpanel } from 'gatsby-plugin-mixpanel'

import Layout from '../components/layout';
import {Title, Info, Warning, FooterLinks, Tag} from '../components/helpers';

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    const post = this.props.data.markdownRemark;
    const { mixpanel } = this.props
    mixpanel.track(`${post.frontmatter.title}`); // send event with post name to mixpanel
  }

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = post.excerpt;
    const {previous, next} = this.props.pageContext;

    const date = new Date(post.frontmatter.date)
    // posts without dates are never 'old', I guess
    const isOld = post.frontmatter.date && new Date().getFullYear() - date.getFullYear() > 1;

    return (
      <Layout siteTitle={siteTitle} location={this.props.location}>
        <Helmet
          htmlAttributes={{lang: 'en'}}
          meta={[{name: 'description', content: siteDescription}]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Title>{post.frontmatter.title}</Title>
        <Info>
          {post.frontmatter.date}
          {post.frontmatter.tags &&
              post.frontmatter.tags.map(t => <Tag key={t} tag={t} />)}
            </Info>
            { isOld ? <Warning>This post is from {post.frontmatter.date}. My views have probably changed since then. If it's about technology, any code is probably broken by this point.</Warning> : null }
            <div dangerouslySetInnerHTML={{__html: post.html}} />
            <FooterLinks>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </FooterLinks>
          </Layout>
    );
  }
}

export default withMixpanel()(BlogPostTemplate);

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        tags
      }
    }
  }
`;
