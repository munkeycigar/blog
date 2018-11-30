import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from './page-layout';

class GalleryPostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {
      image,
      title
    } = this.props.post.frontmatter;
    const { sizes } = image.childImageSharp;

    return (
      <Layout>
        <div 
          style={{
            width: `100%`,
            height: `100%`
          }}
        >
          <h1
            style={{
              textAlign: `center`
            }}>{title}</h1>
          <Img fluid={sizes} />
        </div>
      </Layout>
    )
  }
}

export default GalleryPostDetail;

export const galleryPostDetailFragment = graphql`
    fragment GalleryPostDetail_details on MarkdownRemark {
      id
      frontmatter {
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }                  
          }
        }
      }
    }
`