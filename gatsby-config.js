module.exports = {
    siteMetadata: {
        title: 'Leo Reyes',
    },
    plugins: [           
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
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [],
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp', 
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