import React from 'react'
import Link from 'gatsby-link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Helmet from 'react-helmet'

export default class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fieldVal: "",
            data: props.data,
        }
    }

    render() {
        return (
            <div>
                <Helmet
                    title={`Leo's Blog`}
                />
                <Grid container>
                    {this.state.data.allMarkdownRemark.edges.map(document => (
                        <Grid item xs={12}>
                            <Paper style={{ padding: 25}}>
                                <Link className="button is-small" to={'blog' + document.node.fields.slug}>
                                    <h3>
                                        {document.node.frontmatter.title}
                                    </h3>
                                </Link>                                                           
                                {(document.node.frontmatter.image != null) ?
                                <img src={'/files' + document.node.frontmatter.image} />
                                : null}
                                {document.node.excerpt}                                                          
                            </Paper>
                        </Grid>                        
                    ))}                    
                </Grid>		
            </div>
        );
    }
}

export const blogMasterQuery = graphql`
  query BlogMaster {
    allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-post"} } },
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
`