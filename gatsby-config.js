module.exports = {
  siteMetadata: {
    title: 'Leo Reyes',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/files/images/uploads`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog-posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/gallery`,
        name: 'gallery-posts',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 900,
            },
          },
          {
            resolve: `@debiki/gatsby-plugin-talkyard`,
            options: {
              talkyardServerUrl: 'https://comments-for-leorey-es.talkyard.net'
            }
          },
        ],
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    // `gatsby-plugin-offline`,
    // // This plugin sets up Google Analytics for you.
    // {
    //     resolve: `gatsby-plugin-google-analytics`,
    //     options: {
    //         trackingId: `UA-91652198-1`,
    //     },
    // },
  ],
}