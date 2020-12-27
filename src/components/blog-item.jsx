import React from 'react';
import Link from 'gatsby-link';
import Paper from '@material-ui/core/Paper';

const BlogItem = ({ frontmatter, slug, excerpt }) => (
  <Paper style={{ padding: 25, backgroundColor: '#597dab' }}>
    <Link className="button is-small" style={{ textDecorationColor: '#ffffff' }} to={`/blog${slug}`}>
      <h3 style={{ color: '#ffffff' }}>
        {frontmatter.title}
      </h3>
    </Link>
    {(frontmatter.image != null)
      ? <img alt="" src={`/files${frontmatter.image}`} />
      : null}
    {excerpt}
  </Paper>
);

export default BlogItem;
