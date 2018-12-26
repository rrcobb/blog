import Typography from 'typography';
import Theme from 'typography-theme-wordpress-kubrick';

delete Theme.googleFonts;
Theme.overrideThemeStyles = ({rhythm}, options) => ({
  'ul li': {
    listStyle: 'square inside',
  },
  '.no-bullets li': {
    listStyle: 'none',
  },
  '.no-bullets p, .no-bullets ul': {
    margin: 0,
  },
  'ul li:before': {
    content: 'none',
  },
  'a:visited': {
    color: '#06c',
  },
  'li > p': {
    marginBottom: rhythm(0.25),
    marginTop: rhythm(0.25),
    display: 'inline',
  },
  li: {
    marginBottom: rhythm(0.25),
  },
});
const typography = new Typography(Theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
