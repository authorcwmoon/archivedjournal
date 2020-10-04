import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav, Footer, RightNav } from "../components"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
      <RightNav/>
      <Footer />
    </ContainerWrapper>
  )
}