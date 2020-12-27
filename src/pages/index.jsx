import React from 'react';
import { graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/page-layout';
import './index.css';
import SkillsIq from '../components/skills-iq';

import facebookIcon from './images/facebook-icon.svg';
import githubIcon from './images/github-icon.svg';
import linkedinIcon from './images/linkedin-icon.svg';
import photoshopIcon from './images/photoshop-icon.png';
import sketchIcon from './images/sketch-icon.png';
import spotifyIcon from './images/spotify-icon.png';
import terminalIcon from './images/terminal-icon.png';
import transmitIcon from './images/transmit-icon.png';
import vscodeIcon from './images/vscode-icon.png';
import xcodeIcon from './images/xcode-icon.png';
import chromeIcon from './images/chrome-icon.png';
import gatsbyjsLogo from './images/gatsbyjs-logo.svg';
import graphqlLogo from './images/graphql-logo.svg';
import materialUiLogo from './images/material-ui-logo.svg';
import awsLogo from './images/aws-logo.png';
import dockerLogo from './images/docker-logo.png';

const HomePage = ({ data }) => (
  <Layout title="Leo Reyes">
    <div className="main-container">
      <Grid container alignItems="center" direction="column" justify="center">
        <h1 style={{
          textAlign: 'center',
          fontSize: '7rem',
          fontWeight: '400',
          color: '#bad5f7',
        }}
        >
          Leo Reyes
        </h1>
      </Grid>
      <Grid container alignItems="center" direction="row" justify="center">
        <a href="https://www.linkedin.com/in/leoyreyes/" target="_blank" rel="noopener noreferrer">
          <img className="social-media-icon" src={linkedinIcon} alt="leo's linkedin" />
        </a>
        <a href="https://github.com/LeoYReyes" target="_blank" rel="noopener noreferrer">
          <img className="social-media-icon-circular" src={githubIcon} alt="leo's github" />
        </a>
        <a href="https://www.facebook.com/leo.y.reyes" target="_blank" rel="noopener noreferrer">
          <img className="social-media-icon" src={facebookIcon} alt="leo's facebook" />
        </a>
      </Grid>
      <Grid container alignItems="center" direction="row" justify="center">
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="h4" color="inherit">
            Gizmos
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
            <img className="gizmos-icon" src={vscodeIcon} alt="VS Code" />
          </a>
          <a href="https://developer.apple.com/xcode/" target="_blank" rel="noopener noreferrer">
            <img className="gizmos-icon" src={xcodeIcon} alt="XCode" />
          </a>
          <a href="https://en.wikipedia.org/wiki/Terminal_(macOS)" target="_blank" rel="noopener noreferrer">
            <img className="gizmos-icon" src={terminalIcon} alt="Terminal" />
          </a>
          <a href="https://www.spotify.com/us/" target="_blank" rel="noopener noreferrer">
            <img className="gizmos-icon" src={spotifyIcon} alt="Spotify" />
          </a>
          <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer">
            <img className="gizmos-icon" src={photoshopIcon} alt="Photoshop" />
          </a>
          <a href="https://www.sketchapp.com/" target="_blank" rel="noopener noreferrer">
            <img className="gizmos-icon" src={sketchIcon} alt="Sketch" />
          </a>
          <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">
            <img className="gizmos-icon" src={chromeIcon} alt="Google Chrome" />
          </a>
          <a href="https://panic.com/transmit/" target="_blank" rel="noopener noreferrer">
            <img className="gizmos-icon" src={transmitIcon} alt="Transmit" />
          </a>
        </Grid>
      </Grid>
      <Grid container alignItems="center" direction="row" justify="center">
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography variant="h4" color="inherit">
            Skills
          </Typography>
        </Grid>
        <SkillsIq />
      </Grid>
      <Grid container className="footer" alignItems="center" direction="row" justify="center">
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="inherit">
            Powered by
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
            <img className="gizmos-icon" src={gatsbyjsLogo} alt="GatsbyJS" />
          </a>
          <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">
            <img className="gizmos-icon" src={graphqlLogo} alt="GraphQL" />
          </a>
          <a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">
            <img className="gizmos-icon" src={materialUiLogo} alt="Material-UI" />
          </a>
          <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">
            <img className="gizmos-icon" src={awsLogo} alt="Amazon Web Service" />
          </a>
          <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
            <img className="gizmos-icon" src={dockerLogo} alt="Docker" />
          </a>
        </Grid>
      </Grid>
    </div>
  </Layout>
);

export const homePageQuery = graphql`
  query {    
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default HomePage;
