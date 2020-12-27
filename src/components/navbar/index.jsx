import React from 'react';
import Link from 'gatsby-link';

import Button from '@material-ui/core/Button';

import './navbar.css';

const Navbar = () => (
  <nav>
    <Button component={Link} activeClassName="active" to="/">Home</Button>
    <Button component={Link} activeClassName="active" partiallyActive to="/gallery">Gallery</Button>
    <Button component={Link} activeClassName="active" partiallyActive to="/blog">Blog</Button>
  </nav>
);

export default Navbar;
