import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/page-layout';

const GalleryPostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <Layout>
      <div style={{ width: '100%', height: '100%' }}>
        <h1 style={{ textAlign: 'center' }}>{frontmatter.title}</h1>
        <Img fluid={frontmatter.image.childImageSharp.sizes} />
      </div>
    </Layout>
  );
};

export const galleryPostQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        date
        image {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes
            }
            resolutions(width: 256, height: 256) {
              ...GatsbyImageSharpResolutions
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

export default GalleryPostTemplate;
