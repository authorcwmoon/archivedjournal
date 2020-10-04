import React from "react"
import styled from "styled-components"
import { device } from "../styles/constants"

/* SectionLayout */

const SectionLayout = ({ children, alignContent,maxWidth }) => {
  return (
    <Layout alignContent={alignContent} >
      <InnerContainer maxWidth={maxWidth}>{children}</InnerContainer>
    </Layout>
  )
}

const InnerContainer = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth};
  margin: 0px auto;
  position: relative;
  padding: 32px 0 0 0;
  @media ${device.laptop} {
    padding: 32px 0 0 0;
  }
  @media ${device.mobileL} {
    padding: 0;
  }
`

const Layout = styled.div`
  max-width: 1600px;
  text-align: ${props => props.alignContent};
  @media ${device.desktop} {
    max-width: 1300px;
    margin: 0 auto;
  }
  @media ${device.laptopL} {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 64px;
  }
  @media ${device.tablet} {
    padding: 0;
  }
`

export default SectionLayout