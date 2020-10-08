import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav, Footer, RightNav } from "../components"
import { ThemeProvider } from "@chakra-ui/core"


export const Container = ({ children }) => {
  return (
    <ThemeProvider>
    <ContainerWrapper>
      <Nav />
      {children}
      <RightNav/>
      <Footer />
    </ContainerWrapper>
    </ThemeProvider>
  )
}