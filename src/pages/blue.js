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
            <h3>
              {node.frontmatter.title}{" "}
              <span color="#BBB">— {node.frontmatter.date}</span>
            </h3>

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
            id
            frontmatter {
              title
              category
              date(formatString: "DD MMMM, YYYY")
            }
            fields {
              slug
            }

          }
        }
      }
    }
  `
