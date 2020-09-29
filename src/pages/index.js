import React from "react"
import { Link } from "gatsby"
import SectionLayout from '../components/SectionLayout'
import styled from "styled-components"

import { PostTitle, PostExcerpt, PostDate} from '../styles/postStyles'
//import { Helmet } from "react-helmet"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="blog-posts">
      <SectionLayout maxWidth="1200px">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <PostTitle>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </PostTitle>
                
                <PostExcerpt>{post.excerpt}</PostExcerpt>
                <PostDate>{post.frontmatter.date}</PostDate>
              </div>
            )
          })}
      </SectionLayout>
      
    </div>
  )
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`


