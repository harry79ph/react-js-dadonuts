import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@100;200;300;400;500;600;700&display=swap');
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Gluten', cursive;
    }
`;

export default GlobalStyle;