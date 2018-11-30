import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';

import Layout from '../components/page-layout';

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>
          {this.props.title}
        </h1>
        <img src={this.props.thumbnail} style={{ maxHeight: 350 }} />
        <div dangerouslySetInnerHTML={{ __html: this.props.content }}>
        </div>
        <TalkyardCommentsIframe />
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
}

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props)
    this.markdownRemark = props.data.markdownRemark
  }

  render() {
    return (
      <Layout>
        <BlogPostTemplate
          content={this.markdownRemark.html}
          description={this.markdownRemark.frontmatter.description}
          tags={this.markdownRemark.frontmatter.tags}
          title={this.markdownRemark.frontmatter.title}
          thumbnail={this.markdownRemark.frontmatter.thumbnail}
        />
      </Layout>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}
export const pageQuery = graphql`
  query($id: String!) {
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