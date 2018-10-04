import React from 'react';
import {Link} from 'gatsby';
import Bio from '../components/Bio';
import Footer from '../components/Footer';

import {rhythm, scale} from '../utils/typography';

const HeaderLink = ({to, children}) => (
  <Link
    style={{
      boxShadow: 'none',
      textDecoration: 'none',
      color: 'inherit',
    }}
    to={to}
  >
    {children}
  </Link>
);

class Header extends React.Component {
  render() {
    const {location, siteTitle} = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    return (
      <div
        style={{
          ...scale(0.75),
          marginTop: 0,
          borderBottom: `1px solid`,
        }}
      >
        <div
          style={{
            ...scale(0.5),
            margin: '0 auto',
            maxWidth: rhythm(24),
            padding: rhythm(0.5),
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <h3 style={{margin: 0, padding: 0, lineHeight: 'inherit'}}>
            <HeaderLink to={'/'}>{siteTitle}</HeaderLink>
          </h3>
          <h4 style={{margin: 0, padding: 0, lineHeight: 'inherit'}}>
            <HeaderLink to={'/about'}>About</HeaderLink>
          </h4>
        </div>
      </div>
    );
  }
}

class Template extends React.Component {
  render() {
    const {location, siteTitle, children} = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <React.Fragment>
        <Header siteTitle={siteTitle} location={location} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: rhythm(24),
            padding: `0 ${rhythm(0.5)}`,
          }}
        >
          {children}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Template;
