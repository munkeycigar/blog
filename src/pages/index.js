import React from 'react';
import { graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/page-layout';
import './index.css';

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

class Home extends React.Component {
    render() {
        const { classes } = this.props;
        
        return (
          <Layout title={'Leo Reyes'}>
            <div className={'main-container'}>
                <Grid container  
                      alignItems={'center'}
                      direction={'column'}
                      justify={'center'}>
                    <Typography variant='display4' col="true"
                    or='inherit' style={{textAlign:'center', color:'black'}}>
                        Leo Reyes
                    </Typography>
                </Grid>
                <Grid container
                      alignItems={'center'}
                      direction={'row'}
                      justify={'center'}>
                    <a href="https://www.linkedin.com/in/leoyreyes/" target="_blank" rel="noopener noreferrer"><img className={'social-media-icon'} src={linkedinIcon} alt="leo's linkedin" /></a>
					<a href="https://github.com/LeoYReyes" target="_blank" rel="noopener noreferrer"><img className={'social-media-icon'} src={githubIcon} alt="leo's github" /></a>
					<a href="https://www.facebook.com/leo.y.reyes" target="_blank" rel="noopener noreferrer"><img className={'social-media-icon'} src={facebookIcon} alt="leo's facebook" /></a>
                </Grid>
                <Grid container
                      alignItems={'center'}
                      direction={'row'}
                      justify={'center'}>
                    <Grid item xs={12} style={{textAlign:'center'}}>
                        <Typography variant='display2' color='inherit'>
                            Gizmos
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{textAlign:'center'}}>
                        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"><img className={'gizmos-icon'} src={vscodeIcon} alt="VS Code" /></a>
                        <a href="https://developer.apple.com/xcode/" target="_blank" rel="noopener noreferrer"><img className={'gizmos-icon'} src={xcodeIcon} alt="XCode" /></a>
                        <a href="https://en.wikipedia.org/wiki/Terminal_(macOS)" target="_blank" rel="noopener noreferrer"><img  className={'gizmos-icon'} src={terminalIcon} alt="Terminal" /></a>
                        <a href="https://www.spotify.com/us/" target="_blank" rel="noopener noreferrer"><img className={'gizmos-icon'} src={spotifyIcon} alt="Spotify" /></a>
                        <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer"><img className={'gizmos-icon'} src={photoshopIcon} alt="Photoshop" /></a>
                        <a href="https://www.sketchapp.com/" target="_blank" rel="noopener noreferrer"><img className={'gizmos-icon'} src={sketchIcon} alt="Sketch" /></a>
                        <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer"><img className={'gizmos-icon'} src={chromeIcon} alt="Google Chrome" /></a>
                        <a href="https://panic.com/transmit/" target="_blank" rel="noopener noreferrer"><img className={'gizmos-icon'} src={transmitIcon} alt="Transmit" /></a>
                    </Grid>                                    
                </Grid>
            </div>
          </Layout>
        );
    }
}

export default Home;

export const homePageQuery = graphql`
  query {    
    site {
      siteMetadata {
        title
      }
    }
  }
`