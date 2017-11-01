import React from "react"
import Link from 'gatsby-link'

export default ({ data }) => {
  console.log('blue ', data)
  return (
    <div>
      <h4>Blue category</h4>
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

          </Link>
        </div>
      )}
    </div>
  )
}


  export const query = graphql `
    query BlueQuery {
      allMarkdownRemark(filter: {frontmatter: {category: {eq: "blue"}}}) {
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
