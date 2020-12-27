const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }
    // TODO: separate blog and gallery posts
    const posts = result.data.allMarkdownRemark.edges.filter((edge) => edge.node.frontmatter.templateKey === 'blog-post');
    const galleryPosts = result.data.allMarkdownRemark.edges.filter((edge) => edge.node.frontmatter.templateKey === 'gallery-post');

    posts.forEach((edge) => {
      const { id } = edge.node;
      createPage({
        path: `blog${edge.node.fields.slug}`,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.jsx`,
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });

    galleryPosts.forEach((edge) => {
      const { id } = edge.node;
      createPage({
        path: `gallery${edge.node.fields.slug}`,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.jsx`,
        ),
        context: {
          id,
        },
      });
    });

    // Tag pages:
    // let tags = []
    // // Iterate through each post, putting all found tags into `tags`
    // posts.forEach(edge => {
    //   if (_.get(edge, `node.frontmatter.tags`)) {
    //     tags = tags.concat(edge.node.frontmatter.tags)
    //   }
    // })
    // Eliminate duplicate tags
    // tags = _.uniq(tags)

    // Make tag pages
    // tags.forEach(tag => {
    //   const tagPath = `/tags/${_.kebabCase(tag)}/`

    //   createPage({
    //     path: tagPath,
    //     component: path.resolve(`src/templates/tags.js`),
    //     context: {
    //       tag,
    //     },
    //   })
    // })
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { frontmatter } = node;
  if (frontmatter) {
    const { image } = frontmatter;
    if (image) {
      if (image.indexOf('/images') === 0) {
        frontmatter.image = path.relative(
          path.dirname(node.fileAbsolutePath),
          path.join(__dirname, '/static/files/', image),
        );
      }
    }
  }

  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
