import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Architects Daughter', cursive;
    }
`;

export default GlobalStyle;