import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav, Footer, RightNav } from "../components"
import { ThemeProvider } from "@chakra-ui/core"


export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      <ThemeProvider>
      {children}
      <RightNav/>
      <Footer />
      </ThemeProvider>
    </ContainerWrapper>
   
  )
}