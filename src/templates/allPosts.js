import React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Content,
  ContentCard,
  // FeatureImage,
  Subscribe,
  Pagination,
  Seo,
} from "../components"

import { H1, P } from "../elements"

const allPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges

  return (
    <Container>
      <Seo />
      {/* <FeatureImage /> */}
      <Content>
        <H1 textAlign="left" margin="0 0 1rem 0">
          Journal
        </H1>
        <P color="dark2" textAlign="left">
         I've been writing for the last 8 years in the margins of pages, random notebooks, and my text editor.  I started reading from hymn books and the back of Captain Crunch cereal boxes. This journal bridges the gap between the childhood mind and the enterprise entrepreneur journey. 
        </P>
        <H1 textAlign="left" margin="4rem 0 1rem 0rem">
          Lastest
        </H1>
        {posts.map(post => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      <Subscribe />
    </Container>
  )
}

export default allPosts

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`