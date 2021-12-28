import Typography from 'typography';
import Theme from 'typography-theme-fairy-gates';

// Headers = Lora
// Body = Source Sans Pro
Theme.googleFonts = [
  {
      name: "Lora",
      styles: ["700"],
    },
    {
      name: "Source Sans Pro",
      styles: ["400", "400i", "700"],
    },
];
Theme.headerFontFamily = ["Lora", "serif"];
Theme.bodyFontFamily = ["Source Sans Pro", "sans-serif"];

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
  'a': {
    backgroundImage: 'none',
    color: '#06c',
  },
  'a:visited': {
    color: '#D81159'
  },
  'a:hover': {
    color: '#1ca086',
   },
    'li > p': {
    marginBottom: rhythm(0.25),
    marginTop: rhythm(0.25),
  },
  'li > p:first-child': {
    display: 'inline'
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
