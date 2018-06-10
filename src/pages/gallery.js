import React from 'react'
import Link from 'gatsby-link'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

export default class Gallery extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            data: props.data
        }        
        const { classes } = props
    }

    render() {
        return(
            <div>
                <Grid container spacing={24}>
                    {this.state.data.allMarkdownRemark.edges.map(document => (
                        <Grid item xs>
                            <Link className="button is-small" to={'gallery' + document.node.fields.slug}>
                                <Paper>                                
                                    <img src={'/files' + document.node.frontmatter.image} />                                                            
                                </Paper>
                            </Link>
                        </Grid>                        
                    ))}                    
                </Grid>		
            </div>
        )
    }
}

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
                    image
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