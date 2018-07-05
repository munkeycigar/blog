import React from 'react'
import Grid from '@material-ui/core/Grid'
import Img from 'gatsby-image'
import GalleryPost from '../components/gallery-post'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


class Gallery extends React.Component {
    constructor(props) {
        super(props)     
    }

    render() {
        return(
            <div>
                <Helmet
                    title={`Pensieve`}
                />
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
        )
    }
}

Gallery.propTypes = {
    data: PropTypes.object,
}

export default Gallery

export const galleryMasterQuery = graphql`
query GalleryMaster {
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
                            sizes(maxWidth: 200, maxHeight: 200) {
                                ...GatsbyImageSharpSizes
                            }
                            resolutions(width: 256, height: 256) {
                                ...GatsbyImageSharpResolutions
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
// query GalleryPage($id: String!) {
        
// }