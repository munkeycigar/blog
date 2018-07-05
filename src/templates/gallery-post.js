import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import GalleryPostDetail from '../components/gallery-post-detail'

class GalleryPostTemplate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }
    render() {
        return (
            // <GalleryPostDetail post={this.props.data.postsJson} />
            <div>
                <h1>
                    {this.props.title}
                </h1>
                <img src={'/files'+this.props.image}/>
            </div>
        )
    }
}

GalleryPostTemplate.propTypes = {
    content: PropTypes.string.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    smallImage: PropTypes.object,
    helmet: PropTypes.instanceOf(Helmet),
}

export default class GalleryPost extends React.Component {
    constructor(props) {
        super(props)
        this.markdownRemark = props.data.markdownRemark        
    }

    render() {
        return (
            <GalleryPostDetail 
                post={this.markdownRemark}
            />
            // <GalleryPostTemplate
            //     content={this.markdownRemark.html}
            //     description={this.markdownRemark.frontmatter.description}
            //     helmet={<Helmet title={`${this.markdownRemark.frontmatter.title} | Blog`} />}
            //     tags={this.markdownRemark.frontmatter.tags}
            //     title={this.markdownRemark.frontmatter.title}
            //     image={this.markdownRemark.frontmatter.image}
            // />
        )
    }
}

GalleryPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}
export const galleryPostQuery = graphql `
    query GalleryPost($id: String!) {
        # Select the post which equals this id.
        markdownRemark(id: { eq: $id }) {
            # Specify the fields from the post we need.
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
`