import React from 'react';
import {rhythm} from '../utils/typography';
import {Link} from 'gatsby';

export default function Footer() {
  return (
    <div style={{flexShrink: 0, marginBottom: rhythm(1), textAlign: 'center'}}>
      <hr />
      <span>
        🤓😽 <Link to="/about">Rob Cobb</Link>
        <br />
        🐦 <a href="https://twitter.com/robcobbable">twitter</a>
      </span>
    </div>
  );
}
