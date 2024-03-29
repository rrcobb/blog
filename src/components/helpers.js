import React from 'react';
import {rhythm, scale} from '../utils/typography';
import get from 'lodash/get';
import {Link} from 'gatsby';

export const slugifyTag = tag => tag.replace(/[^\w]/gi, '-').toLowerCase();

export const Tag = ({tag, text}) => (
  <Link to={`/tags/${slugifyTag(tag)}`} key={tag}>
    <span
      style={{
        backgroundColor: '#c1dc95',
        color: '#406d45',
        padding: 3,
        margin: '5px 5px 5px 0',
        fontFamily: 'monospace',
        textShadow: 'none',
        textDecoration: 'underline',
      }}
    >
      {text || tag}
    </span>
  </Link>
);

export const Title = ({children}) => (
  <h1
    style={{
      ...scale(1),
      marginTop: rhythm(1),
    }}
  >
    {children}
  </h1>
);

export const Info = ({children}) => (
  <div
    style={{
      ...scale(-1 / 5),
      display: 'block',
      marginBottom: rhythm(1),
      marginTop: rhythm(-0.5),
    }}
  >
    {children}
  </div>
);

export const Warning = ({children}) => (
  <div
  style={{
    ...scale(-1 / 5),
    color: 'red',
    display: 'block',
    marginBottom: rhythm(1),
    marginTop: rhythm(1),
  }}
>
  {children}
</div>
)

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
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: `${rhythm(0.5)} 0`,
        width: '100%',
      }}
    >
      <Link to={node.fields.slug}>{title}</Link>
      <p style={{margin: 0, width: rhythm(4), ...scale(-1/5) }}>
        {node.frontmatter.date}
      </p>
    </div>
  );
};

export class Foldable extends React.Component {
  state = { show: false };

  render() {
    return <React.Fragment>
      <span style={{ cursor: 'pointer' }} onClick={() => this.setState({ show: !this.state.show })}>
        {this.props.label} <a style={{...scale(-1/5)}}>{this.state.show ? "(Hide)" : "(Show)"}</a>
      </span>
      <div>
        {this.state.show ? this.props.children : null}
      </div>
    </React.Fragment>
  }
}

export class PostList extends React.Component {
  render() {
    let { posts } = this.props;
    return (
      <div style={{marginBottom: rhythm(1)}}> 
        {posts.map(({ node }) => (
          <Post key={node.fields.slug} node={node} />
        ))}
      </div>
    );
  }
}

export const TagItem = ({ tag }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: `0 ${rhythm(0.5)}`,
        width: `max-content`,
      }}
    >
      <p style={{ margin: rhythm(0.25), width: rhythm(12) }}>
        <Link to={`/tags/${tag.slug}`}>{tag.fieldValue}</Link>
      </p>
      <p style={{ margin: rhythm(0.25), width: rhythm(8) }}>
        Count: {tag.totalCount}
      </p>
    </div>
  );
};

export class TagList extends React.Component {
  render() {
    let { tags } = this.props;
    return (
      <React.Fragment>
        {tags.map(tag => (
          <TagItem key={tag.slug} tag={tag} />
        ))}
      </React.Fragment>
    );
  }
}
