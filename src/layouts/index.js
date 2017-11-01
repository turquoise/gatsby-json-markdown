import React from 'react'
import Link from 'gatsby-link'
import g from "glamorous"
import { css } from "glamor"
import { rhythm } from "../utils/typography"
import './index.css'

const linkStyle = css({
  float: `right`,
  marginRight: 20
})

const TemplateWrapper = ({ children, data }) => (
  <g.Div>
    <g.Div
        margin={`0 auto`}
        maxWidth={700}
        padding={rhythm(2)}
        paddingTop={rhythm(1.5)}
      >
        <Link to={`/`}>
          <g.H3
            marginBottom={rhythm(2)}
            display={`inline-block`}
            fontStyle={`normal`}
          >
            {data.site.siteMetadata.title}
          </g.H3>
        </Link>
        <Link className={linkStyle} to={`/page-2/`}>
          Page 2
        </Link>
        <Link className={linkStyle} to={`/about/`}>
          About
        </Link>
        <Link className={linkStyle} to={`/my-files/`}>
          My files
        </Link>
        <Link className={linkStyle} to={`/beers/`}>
          Beers
        </Link>
      </g.Div>
    <g.Div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </g.Div>
  </g.Div>
)

export const query = graphql `
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
