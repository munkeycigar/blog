import React from 'react';
import Link from 'gatsby-link';

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
                <ul>
                    {this.state.data.allMarkdownRemark.edges.map(document => (
                        <li key={document.node.id}>
                            <Link className="button is-small" to={document.node.fields.slug}>
                                <h3>
                                    {document.node.frontmatter.title}
                                </h3>
                            </Link>                            
                            {document.node.excerpt}
                        </li>
                    ))}
                </ul>			
            </div>
        );
    }
}

export const blogMasterQuery = graphql`
  query BlogMaster {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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