import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';
import './page-layout.css';
import leoHeadShot from '../pages/images/leoreyes-headshot.jpg';

export default ({ children, title }) => (
  <div style={{ height: '100%' }}>
    <Helmet>
      <title>{title}</title>
      <link rel="icon" type="image/png" href="/files/images/super-lion.png" />
      <meta name="description" content="Superman's real identity has been revealed as Leo Reyes. This is his site, and it contains all secrets about him." />
      <meta name="keywords" content="Leo Reyes, Superman, Web developer, motorcyclist, adrenaline junkie" />
      <meta property="og:image" content={leoHeadShot} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1060" />
      <meta property="og:image:height" content="1060" />
      <meta property="og:title" content="Leo Reyes" />
      <meta property="og:description" content="is Superman" />
      <meta property="og:url" content="https://leorey.es" />
      <meta property="og:type" content="website" />

      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Helmet>
    <Header />
    <div
      className="layout-container"
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        height: 'calc(100% - 64px)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  </div>
);
