import React from "react"
import Link from 'gatsby-link'


export default ({ data }) =>
  <div>
    <h1>About adding data in Gatsby - {data.site.siteMetadata.title}</h1>
    <p>
      JSON and Mardown in Gatsby.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </div>

  export const query = graphql `
    query AboutQuery {
      site {
        siteMetadata {
          title
          category
        }
      }
    }
  `
