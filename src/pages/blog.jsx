import React from 'react';
import { graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';

import Layout from '../components/page-layout';
import BlogItem from '../components/blog-item';

const BlogPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  return (
    <Layout title="Stories | Leo Reyes">
      <div>
        <Grid container>
          {allMarkdownRemark.edges.map((document) => (
            <Grid key={document.node.fields.slug} item xs={12} style={{ paddingBottom: 35 }}>
              <BlogItem
                slug={document.node.fields.slug}
                frontmatter={document.node.frontmatter}
                excerpt={document.node.excerpt}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
};

export const blogMasterQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/blog/"}}
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug          
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default BlogPage;
