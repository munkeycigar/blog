import React from 'react';
import { graphql } from 'gatsby';
// import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';

import Layout from '../components/page-layout';

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <div>
        <h1>
          {frontmatter.title}
        </h1>
        <img alt="" src={frontmatter.featuredImage?.childImageSharp?.fluid?.src} style={{ maxHeight: 350 }} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {/* <TalkyardCommentsIframe /> */}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
    }
  }
`;

export default BlogPostTemplate;
