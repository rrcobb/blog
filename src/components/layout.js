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

let conversationStyle = `
.container div {
  display: flex;
  flex-direction: column;
}
ol, ul { margin: 0; }
ol, ol + p { 
  align-self: flex-end;
}
ul + p, ol + p {
  color: grey;
  font-size: 16px;
}
ul li, ol li {
  max-width: 450px;  
  border-radius: 16px;
  padding: 12px 16px;
  margin: 4px 0;
  list-style: none;
}
ol li {
  background-color: rgb(29, 155, 240);
  color: white;
  border-bottom-right-radius: 0;
}
ul li {
  background-color: rgb(239, 243, 244);
  color: rgb(15, 20, 25);
  border-bottom-left-radius: 0;
}
`

const twitterEmbedStyle = `
.twitter-tweet {
  max-width: 600px;
  border: 1px solid rgb(225, 232, 237);
  border-radius: 4px;
  padding: 1em;
  color: black;
  font-size: 16px;
  font-family: Helvetica, Roboto, "Segoe UI", Calibri, sans-serif;
  line-height: 22.4px;
  background-color: rgb(255,255,255);
}

.twitter-tweet a {
  display: block;
}
`


class Template extends React.Component {
  render() {
    const { style, location, siteTitle, children } = this.props;
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
        { style == 'conversation' && <style>{conversationStyle}</style>}
        <style>{twitterEmbedStyle}</style>
        <div
        className="container"
        style={{
          margin: '0 auto',
          maxWidth: rhythm(28),
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
