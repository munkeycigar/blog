import React from 'react';
import { graphql } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import GalleryPost from '../components/gallery-post';
import PropTypes from 'prop-types';

import Layout from '../components/page-layout';


class Gallery extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return(
          <Layout title={`Pensieve | Leo Reyes`}>
            <div>
                <Grid container spacing={24}>
                    {this.props.data.allMarkdownRemark.edges.map(document => (                        
                        <Grid item xs key={document.node.id}>
                            <GalleryPost 
                                slug={'gallery' + document.node.fields.slug}
                                frontmatter={document.node.frontmatter}
                            />
                        </Grid>                        
                    ))}                    
                </Grid>		
            </div>
          </Layout>
        )
    }
}

Gallery.propTypes = {
    data: PropTypes.object,
}

export default Gallery

export const galleryMasterQuery = graphql`
query {
    allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "gallery-post"} } }
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
`