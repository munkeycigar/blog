module.exports = {
  siteMetadata: {
    title: 'Leo Reyes',
    siteUrl: 'https://leorey.es',
    description: '',
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
            resolve: 'gatsby-remark-relative-images',
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: 'static/files',
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              // include: ['featured'],
              // [Optional] Exclude the following fields, use dot notation for nested fields
              // No fields are excluded by default
              // exclude: ['featured.skip'],
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900,
            },
          },
          // {
          //   resolve: '@debiki/gatsby-plugin-talkyard',
          //   options: {
          //     talkyardServerUrl: 'https://comments-for-leorey-es.talkyard.net',
          //   },
          // },
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
};
