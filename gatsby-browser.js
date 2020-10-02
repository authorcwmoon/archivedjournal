//import "./src/styles/global.css"
import React from "react"
import {ThemeProvider} from "styled-components"
import theme from './src/themes/theme.js'
// or:
// require('./src/styles/global.css')

export const wrapRootElement = ({element}) => (
    <ThemeProvider theme={theme}>
        {element}
    </ThemeProvider>
)