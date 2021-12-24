import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Architects Daughter', cursive;
    }
    button {
        font-weight: 700;
    }
    p {
        text-shadow: 0px 0px 3px rgba(255, 0, 178, 0.1);
    }
    h1, h2 {
        text-shadow: 0px 0px 3px rgba(255, 0, 178, 0.2);
    }
    a {
        cursor: pointer;
    }
    li {
        list-style: none;
    }
    svg {
        filter: drop-shadow(0px 0px 3px rgba(255, 0, 178, 0.1));
    }
`;

export default GlobalStyle;