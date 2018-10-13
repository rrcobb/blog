import React from 'react';
import {rhythm, scale} from '../utils/typography';
import get from 'lodash/get';
import {Link, graphql} from 'gatsby';

export const Title = ({children}) => (
  <h1
    style={{
      ...scale(1),
      borderBottom: `1px solid black`,
      marginTop: rhythm(1),
    }}
  >
    {children}
  </h1>
);

export const Info = ({children}) => (
  <p
    style={{
      ...scale(-1 / 5),
      display: 'block',
      marginBottom: rhythm(1),
      marginTop: rhythm(-1),
    }}
  >
    {children}
  </p>
);

export const FooterLinks = ({children}) => (
  <React.Fragment>
    <hr
      style={{
        marginBottom: rhythm(1),
      }}
    />

    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0,
      }}
    >
      {children}
    </ul>
  </React.Fragment>
);

export const Post = ({node}) => {
  const title = get(node, 'frontmatter.title') || node.fields.slug;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: `0 ${rhythm(0.5)}`,
      }}
    >
      <p style={{margin: rhythm(0.25), width: rhythm(8)}}>
        {node.frontmatter.date}
      </p>
      <Link to={node.fields.slug}>{title}</Link>
    </div>
  );
};