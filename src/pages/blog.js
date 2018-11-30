import React from 'react';
import { graphql } from 'gatsby';

import Link from 'gatsby-link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Layout from '../components/page-layout';

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
      <Layout title={`Stories | Leo Reyes`}>
        <div>
          <Grid container>
            {this.state.data.allMarkdownRemark.edges.map(document => (
              <Grid item xs={12} style={{ paddingBottom: 35 }}>
                <Paper style={{ padding: 25 }}>
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
      </Layout>
    );
  }
}

export const blogMasterQuery = graphql`
  query {
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