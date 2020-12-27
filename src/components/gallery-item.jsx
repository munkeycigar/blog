import React from 'react';
import Link from 'gatsby-link';
import Paper from '@material-ui/core/Paper';
import Img from 'gatsby-image';

const GalleryItem = ({ frontmatter, slug }) => (
  <div>
    <Link className="button is-small" to={`/gallery${slug}`}>
      <Paper style={{ textAlign: 'center', paddingTop: 7 }}>
        <Img fixed={frontmatter.image.childImageSharp.fixed} />
      </Paper>
    </Link>
  </div>
);

export default GalleryItem;
