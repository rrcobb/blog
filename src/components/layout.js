import React from 'react';
import {Link} from 'gatsby';
import Bio from '../components/Bio';
import BlogRoll from '../components/Blogroll';

import {rhythm, scale} from '../utils/typography';

class Header extends React.Component {
  render() {
    const {location, children} = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    return (
      <h3
        style={{
          ...scale(0.75),
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        {children}
      </h3>
    );
  }
}

class Template extends React.Component {
  render() {
    const {location, siteTitle, children} = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header location={location}>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {siteTitle}
          </Link>
        </Header>
        <Bio />
        {children}
        <BlogRoll />
      </div>
    );
  }
}

export default Template;
