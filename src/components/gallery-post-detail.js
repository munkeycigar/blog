import React from 'react'

class GalleryPostDetail extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        const {
            image,
            id,
            title
        } = this.props.post.frontmatter
        const { sizes } = image.childImageSharp

        return (
            <div>
                <img
                    key={sizes.src}
                    src={sizes.src}
                    srcSet={sizes.srcSet}
                    sizes="(min-width: 640px) 640px, 100vw"
                />
            </div>
        )
    }
}

export default GalleryPostDetail

export const galleryPostDetailFragment = graphql`
    fragment GalleryPostDetail_details on MarkdownRemark {
        id      
        frontmatter {
            title
            bigImage: image {
                childImageSharp {
                    # Here we query for *multiple* image thumbnails to be
                    # created. So with no effort on our part, 100s of
                    # thumbnails are created. This makes iterating on
                    # designs effortless as we change the args
                    # for the query and we get new thumbnails.
                    big: sizes(maxWidth: 640) {
                        src
                        srcSet
                    }
                }
            }
        }
    }
`