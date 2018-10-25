module.exports = {
  // https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/
  pathPrefix: '/blog',
  siteMetadata: {
    siteName: `Gatsby site`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-128113482-1',
      },
    },
  ],
}
