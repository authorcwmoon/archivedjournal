import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { graphql } from "gatsby"
import SectionLayout from '../components/SectionLayout'

import { PostTitle, PostBody} from '../styles/postStyles'

// import '../css/blog-post.css';

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <div className="blog-post-container">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <SectionLayout maxWidth="576px">
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostBody>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </PostBody>
      </SectionLayout>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

