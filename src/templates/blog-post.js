import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/layout';
import {Title, Info, Warning, FooterLinks, Tag} from '../components/helpers';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = post.excerpt;
    const {previous, next} = this.props.pageContext;

    return (
      <Layout style={post.frontmatter.layout || 'post'} siteTitle={siteTitle} location={this.props.location}>
        <Helmet
          htmlAttributes={{lang: 'en'}}
          meta={[{name: 'description', content: siteDescription}]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Title>{post.frontmatter.title}</Title>
        <Info>
          <div>
          Updated {post.frontmatter.date}
          </div>
          <div>
          {post.frontmatter.tags &&
              post.frontmatter.tags.map(t => <Tag key={t} tag={t} />)}
          </div>
        </Info>
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

export default BlogPostTemplate;

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
        layout
      }
    }
  }
`;
