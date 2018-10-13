import React from 'react';
import {rhythm, scale} from '../utils/typography';
import get from 'lodash/get';
import {Link} from 'gatsby';

export const slugifyTag = tag => tag.replace(/[^\w]/gi, '-').toLowerCase();

export const Tag = ({tag}) => (
  <Link to={`/tags/${slugifyTag(tag)}`} key={tag}>
    <span
      style={{
        backgroundColor: '#c1dc95',
        color: '#406d45',
        padding: 5,
        margin: 5,
        fontFamily: 'monospace',
      }}
    >
      {tag}
    </span>
  </Link>
);

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
        width: `max-content`,
      }}
    >
      <p style={{margin: rhythm(0.25), width: rhythm(8)}}>
        {node.frontmatter.date}
      </p>
      <Link to={node.fields.slug}>{title}</Link>
    </div>
  );
};

export class PostList extends React.Component {
  render() {
    let {posts} = this.props;
    return (
      <React.Fragment>
        {posts.map(({node}) => (
          <Post key={node.fields.slug} node={node} />
        ))}
      </React.Fragment>
    );
  }
}

export const TagItem = ({tag}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: `0 ${rhythm(0.5)}`,
        width: `max-content`,
      }}
    >
      <p style={{margin: rhythm(0.25), width: rhythm(12)}}>
        <Link to={`/tags/${tag.slug}`}>{tag.fieldValue}</Link>
      </p>
      <p style={{margin: rhythm(0.25), width: rhythm(8)}}>
        Count: {tag.totalCount}
      </p>
    </div>
  );
};

export class TagList extends React.Component {
  render() {
    let {tags} = this.props;
    return (
      <React.Fragment>
        {tags.map(tag => (
          <TagItem key={tag.slug} tag={tag} />
        ))}
      </React.Fragment>
    );
  }
}
