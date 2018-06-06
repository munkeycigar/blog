import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <script>
        if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
            if (!user) {
                window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
                });
            }
            })
        }
    </script>
  </div>
)

export default IndexPage
