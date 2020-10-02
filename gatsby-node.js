// //const path = require('path')

// // create pages dynamically
// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql`
//     query {
//       allMdx(sort: { fields: frontmatter_date, order: DESC})
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//             id
//           }
//         }
//       }
//     }
//   `
// // create pagination for post

// const postPerPage = 3
// const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)
// Array.from({ length: numPages }).forEach((_, i) => { 
//   actions.createPages({
//   path: i === 0 ? `/` : `/${i +1}`,
//   component: require.resolve("./src/templates/allPosts.js"),
//   context: {
//     limit: postPerPage,
//     skip: i * postPerPage,
//     numPages,
//     currentPage: i + 1,
//      },
//     })
//   })
 
// // Create single blog posts

// data.allMdx.edges.forEach(edge => {
//   const slug = edge.node.frontmatter.slug
//   const id = edge.node.id
//   actions.createPages({
//     path: slug,
//     component: require.resolve(`./src/templates/singlePost.js`),
//     context: { id },
//      })
//     })

// }





// // /**
// //  * Implement Gatsby's Node APIs in this file.
// //  *
// //  * See: https://www.gatsbyjs.com/docs/node-apis/
// //  */

// // // You can delete this file if you're not using it
// // const path = require("path")

// // exports.createPages = async ({ actions, graphql, reporter }) => {
// //   const { createPage } = actions

// //   const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

// //   const result = await graphql(`
// //     {
// //       allMarkdownRemark(
// //         sort: { order: DESC, fields: [frontmatter___date] }
// //         limit: 1000
// //       ) {
// //         edges {
// //           node {
// //             frontmatter {
// //               path
// //             }
// //           }
// //         }
// //       }
// //     }
// //   `)

// //   if (result.errors) {
// //     reporter.panicOnBuild(`Error while running GraphQL query.`)
// //     return
// //   }

// //   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
// //     createPage({
// //       path: node.frontmatter.path,
// //       component: blogPostTemplate,
// //       context: {} // additional data can be passed via context
// //     })
// //   })
// // }