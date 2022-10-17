import { createGlobalStyle } from "styled-components";
import colors from '../style/colors'

const GlobalStyle = createGlobalStyle`
body {
    font-family: Lato, Trebuchet MS, Helvetica, sans-serif;
    max-width: 640px;
    margin: auto;
    background-color: ${colors.background};
}

`

export default GlobalStyle