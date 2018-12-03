import React from 'react'

// Import typefaces

import { rhythm } from '../utils/typography'

const LINK_LIST = [
  {name: "Julia Evans", url: "https://jvns.ca/"},
  {name: "Irrational Exuberance", url: "https://lethain.com/about/" },
  {name: "Affording Play", url: "https://mkremins.github.io/" },
  {name: "Melting Asphalt", url: "https://meltingasphalt.com/" },
  {name: "Random Critical Analysis", url: "https://randomcriticalanalysis.com/"},
  {name: "Overreacted", url: "https://overreacted.io/"},
  {name: "Random Hacks", url: "http://www.randomhacks.net/"},
  {name: "The Little Calculist", url: "http://calculist.org/"},
  {name: "Wilfred Hughes Blog", url: "http://www.wilfred.me.uk/"},
  {name: "Prince", url: "src/pages/posts/2018-12-03-review-blended.md"}
]

class BlogLink extends React.Component {
  render() {
    let { children, to } = this.props
    return <a href={to}>{children}</a>
  }
}

class BlogRoll extends React.Component {
  render() {
    return (
      <div>
        { LINK_LIST.map(({name, url}) =>
          <BlogLink key={name} to={url}>{name}</BlogLink>
        )}
      </div>
    )
  }
}

export default BlogRoll
