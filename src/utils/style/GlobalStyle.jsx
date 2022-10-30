import { createGlobalStyle } from "styled-components";
import colors from '../style/colors'

//Style golbal avec police
const GlobalStyle = createGlobalStyle`
body {
    font-family: Lato, Trebuchet MS, Helvetica, sans-serif;
    max-width: 640px;
    margin: auto;
    background-color: ${colors.background};
}
body a {
    text-decoration: none;
    color: ${colors.tertiary};
}
body a:hover {
    text-shadow: 0px 0px ${colors.tertiary};
}
`

export default GlobalStyle