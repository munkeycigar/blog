import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

class BlogPostTemplate extends React.Component {
    constructor(props) {
        super(props)        
    }
    render() {
        return ( 
            <div>
                {this.props.helmet}
                <h1>
                    {this.props.title}
                </h1>
                <img src={this.props.thumbnail} style={{maxHeight: 350}}/>
                <div dangerouslySetInnerHTML={{__html:this.props.content}}>
                </div>
            </div>
        )
    }
}

BlogPostTemplate.propTypes = {
    content: PropTypes.string.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    helmet: PropTypes.instanceOf(Helmet),
}

export default class BlogPost extends React.Component {
    constructor(props) {
        super(props)
        this.markdownRemark = props.data.markdownRemark
    }

    render() {
        return (
            <BlogPostTemplate
                content={this.markdownRemark.html}
                description={this.markdownRemark.frontmatter.description}
                helmet={<Helmet title={`${this.markdownRemark.frontmatter.title} | Blog`} />}
                tags={this.markdownRemark.frontmatter.tags}
                title={this.markdownRemark.frontmatter.title}
                thumbnail={this.markdownRemark.frontmatter.thumbnail}
            />
        )
    }
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}
export const pageQuery = graphql `
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        thumbnail
        tags
      }
    }
  }
`