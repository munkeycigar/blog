import React from 'react';
import Link from 'gatsby-link';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    socialMediaIcon: {
        width: 60,
        paddingLeft: 10,
        paddingRight: 10
    },
    gizmosIcon: {
        width: 32,
        paddingLeft: 5,
        paddingRight: 5
    },
    centerText: {
        textAlign: 'center'
    }
};

class Home extends React.Component {
    render() {
        const { classes } = this.props;
        
        return (
            <div className={'main-container'}>
                <Grid container  
                      alignItems={'center'}
                      direction={'column'}
                      justify={'center'}>
                    <Typography variant='display4' color='inherit' style={{textAlign:'center'}}>
                        Leo Reyes
                    </Typography>
                </Grid>
                <Grid container
                      alignItems={'center'}
                      direction={'row'}
                      justify={'center'}>
                    <a href="https://www.linkedin.com/in/leoyreyes/" target="_blank"><img className={classes.socialMediaIcon} src={linkedinIcon} alt="leo's linkedin" /></a>
					<a href="https://github.com/LeoYReyes" target="_blank"><img className={classes.socialMediaIcon} src={githubIcon} alt="leo's github" /></a>
					<a href="https://www.facebook.com/leo.y.reyes" target="_blank"><img className={classes.socialMediaIcon} src={facebookIcon} alt="leo's facebook" /></a>
                </Grid>
                <Grid container
                      alignItems={'center'}
                      direction={'row'}
                      justify={'center'}>
                    <Grid item xs={12} className={classes.centerText}>
                        <Typography variant='display2' color='inherit'>
                            Gizmos
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.centerText}>
                        <a href="https://code.visualstudio.com/" target="_blank"><img className={classes.gizmosIcon} src={vscodeIcon} alt="VS Code" /></a>
                        <a href="https://developer.apple.com/xcode/" target="_blank"><img className={classes.gizmosIcon} src={xcodeIcon} alt="XCode" /></a>
                        <a href="https://en.wikipedia.org/wiki/Terminal_(macOS)" target="_blank"><img  className={classes.gizmosIcon} src={terminalIcon} alt="Terminal" /></a>
                        <a href="https://www.spotify.com/us/" target="_blank"><img className={classes.gizmosIcon} src={spotifyIcon} alt="Spotify" /></a>
                        <a href="https://www.adobe.com/products/photoshop.html" target="_blank"><img className={classes.gizmosIcon} src={photoshopIcon} alt="Photoshop" /></a>
                        <a href="https://www.sketchapp.com/" target="_blank"><img className={classes.gizmosIcon} src={sketchIcon} alt="Sketch" /></a>
                        <a href="https://www.google.com/chrome/" target="_blank"><img className={classes.gizmosIcon} src={chromeIcon} alt="Google Chrome" /></a>
                        <a href="https://panic.com/transmit/" target="_blank"><img className={classes.gizmosIcon} src={transmitIcon} alt="Transmit" /></a>
                    </Grid>                                    
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Home);

export const homePageQuery = graphql`
  query HomePage {    
    site {
      siteMetadata {
        title
      }
    }
  }
`