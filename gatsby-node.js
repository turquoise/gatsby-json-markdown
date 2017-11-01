const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const slugify = require('./src/utils/slugify')

exports.onCreateNode = ({ node, _, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'BeersJson') {
    const slug = slugify(node.Name_en)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    console.log(createFilePath({ node, getNode, basePath: `posts` }))
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allBeersJson {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
).then(result => {
      result.data.allBeersJson.edges.map( ({node}) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/beer-page.js`),
          context: {
            slug2: node.fields.slug,
          }
        })
      }),
      result.data.allMarkdownRemark.edges.map( ({node}) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // data passed to context is available in queries.
            slug: node.fields.slug,
          },
        })
      })
      //console.log(JSON.stringify(result, null, 4))
      resolve()
    })
  })
}
