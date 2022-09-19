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
// padding: 20px;
// display: flex;
// flex-direction: column;
// justify-content: space-around;
// align-items: center;
// background-color: ${colors.background};
// color: ${colors.tertiary};
export default GlobalStyle