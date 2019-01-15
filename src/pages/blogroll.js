import React from 'react'
import BlogRoll from '../components/Blogroll'
import Layout from '../components/layout'
import Helmet from 'react-helmet';
import get from 'lodash/get';

class Page extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );
 
    return (
      <Layout siteTitle={siteTitle} location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <p>BlogRoll</p>
        <BlogRoll />
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
         query {
           site {
             siteMetadata {
               title
               description
             }
           }
         }
       `
