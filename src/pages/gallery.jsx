import React from 'react';
import { graphql } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import GalleryItem from '../components/gallery-item';

import Layout from '../components/page-layout';

const GalleryPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  return (
    <Layout title="Pensieve | Leo Reyes">
      <div>
        <Grid container spacing={1}>
          {allMarkdownRemark.edges.map((document) => (
            <Grid item xs key={document.node.id}>
              <GalleryItem
                slug={document.node.fields.slug}
                frontmatter={document.node.frontmatter}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
};

export const galleryPageQuery = graphql`
query {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/content/gallery/"}}
  ) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date
          image {
            childImageSharp {
              fixed(width: 256, height: 256) {
                ...GatsbyImageSharpFixed
              }
            }
          }
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

export default GalleryPage;
