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
        @media screen and (max-width: 650px) {
            text-shadow: 0px 0px 3px rgba(255, 0, 178, 0.05);
        }
    }
    h1, h2 {
        text-shadow: 0px 0px 3px rgba(255, 0, 178, 0.2);
        @media screen and (max-width: 650px) {
            text-shadow: 0px 0px 3px rgba(255, 0, 178, 0.1);
        }
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
    li {
        list-style: none;
    }
    svg {
        filter: drop-shadow(0px 0px 3px rgba(255, 0, 178, 0.1));
        @media screen and (max-width: 650px) {
            filter: drop-shadow(0px 0px 3px rgba(255, 0, 178, 0.05));
        }
    }
`;

export default GlobalStyle;