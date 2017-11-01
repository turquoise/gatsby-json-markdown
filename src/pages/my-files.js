import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) =>
              <tr key={index}>
                <td>
                  {node.relativePath}
                </td>
                <td>
                  {node.prettySize}
                </td>
                <td>
                  {node.extension}
                </td>
                <td>
                  {node.birthTime}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export const query = graphql `
  query MyFilesQuery {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
