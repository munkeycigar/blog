import React from 'react'
import Link from 'gatsby-link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Img from "gatsby-image"

class GalleryPost extends React.Component {
    constructor(props) {
        super(props)
        this.frontmatter = props.frontmatter
        this.slug = props.slug
    }

    render() {
        return(
            <div>
                <Link className="button is-small" to={this.slug}>
                    <Paper 
                      style={{
                          textAlign: `center`,
                          paddingTop: 7
                      }}
                    >
                        <Img resolutions={this.frontmatter.image.childImageSharp.resolutions} />
                    </Paper>
                </Link>
            </div>
        )
    }
}

export default GalleryPost

// export const galleryPostFragment = graphql`
//     fragment squareImage on File {
//         childImageSharp {
//             sizes(maxWidth: 200, maxHeight: 200) {
//               ...GatsbyImageSharpSizes
//             }
//         }
//     }
// `