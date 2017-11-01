import React from "react"
import Link from 'gatsby-link'

export default ({ data }) =>
  <div>
    <h4>Red category</h4>
    {data.allMarkdownRemark.edges.map(({ node }) =>
      <div key={node.id}>
        <Link
          to={node.fields.slug}
          css={{ textDecoration: `none`, color: `inherit` }}
        >
          <g.H3 marginBottom={rhythm(1 / 4)}>
            {node.frontmatter.title}{" "}
            <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
          </g.H3>
          <p>
            {node.excerpt}
          </p>
        </Link>
      </div>
    )}
  </div>

  export const query = graphql `
    query RedQuery {
      allMarkdownRemark(filter: {frontmatter: {category: {eq: "red"}}}) {
        edges {
          node {
            frontmatter {
              title
              category
              date(formatString: "DD MMMM, YYYY")
            }
          }
        }
      }
    }
  `
