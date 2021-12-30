import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Architects Daughter', cursive;
        letter-spacing: 0.03em;
    }
    html{
        height: 100%;
    }
    button {
        font-weight: 700;
    }
    p {
        text-shadow: 0px 0px 3px rgba(255, 0, 178, 0.1);
        letter-spacing: 0.05em;
        @media screen and (max-width: 650px) {
            text-shadow: 0px 0px 3px rgba(255, 0, 178, 0.05);
        }
    }
    span {
        letter-spacing: 0.01em;
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
        letter-spacing: 0.01em;
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