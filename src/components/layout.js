import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/Footer';

import { rhythm, scale } from '../utils/typography';

const HeaderLink = ({ to, children }) => (
  <Link
    className={"header-link"}
    to={to}
    >
    {children}
  </Link>
);

class Header extends React.Component {
  render() {
    const { location, siteTitle } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    return (
      <div>
        <style>
          {`
         a.header-link {
          box-shadow: none;
          text-decoration: none;
          color: inherit;
         }
         a.header-link:hover {
            color: #1ca086;
         }
      `}
        </style>
        <div
        style={{
          margin: '0 auto',
          width: rhythm(28),
          padding: rhythm(0.5),
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
          <h3 style={{ margin: 0, padding: 0, lineHeight: 'inherit' }}>
            <HeaderLink to={'/'}>{siteTitle}</HeaderLink>
          </h3>
          <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}>
          <h4 style={{ margin: 0, padding: `0 ${rhythm(0.5)}`, lineHeight: 'inherit' }}>
            <HeaderLink to={'/blogroll'}>Blogroll</HeaderLink>
          </h4>
          <h4 style={{ margin: 0, padding: `0 ${rhythm(0.5)}`, lineHeight: 'inherit' }}>
            <HeaderLink to={'/about'}>About</HeaderLink>
          </h4>
        </div>
      </div>
    </div>
    );
  }
}

class Template extends React.Component {
  render() {
    const { location, siteTitle, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
        <Header siteTitle={siteTitle} location={location} />
        <div
        style={{
          margin: '0 auto',
          width: rhythm(28),
          padding: `0 ${rhythm(0.5)}`,
          flex: 1,
        }}
      >
          {children}
      </div>
      <Footer />
    </div>
    );
  }
}

export default Template;
