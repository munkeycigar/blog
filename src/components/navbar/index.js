import React from 'react';
import Link from 'gatsby-link';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export default class Navbar extends React.Component {
	render() {
		return (
			<Toolbar>
				<Button component={Link} to="/">Home</Button>
				<Button component={Link} to="/gallery">Gallery</Button>
				<Button component={Link} to="/blog">Blog</Button>
			</Toolbar>
		);
	}
};