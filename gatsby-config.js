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
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [],
            },
        },
        'gatsby-plugin-netlify-cms',
        'gatsby-plugin-react-helmet',
    ],
}