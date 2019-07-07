module.exports = {
  siteMetadata: {
    title: 'Rob Cobb',
    author: 'Rob Cobb',
    description: 'blog, experiments, about',
    siteUrl: 'https://rob.co.bb/',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '±',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rob Cobb`,
        short_name: `Rob Cobb`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/rob-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-mixpanel',
      options: {
        pageViews: 'all',
        enableOnDevMode: true,
        apiToken: process.env.MIXPANEL_API_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-heap',
      options: {
        appId: process.env.HEAP_APP_ID,
        enableOnDevMode: true, // if 'false', heap will be fired on NODE_ENV=production only
      },
    },
  ],
};
