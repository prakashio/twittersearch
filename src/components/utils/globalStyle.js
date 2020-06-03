import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }
    html,
    body {
    margin: 0;
    color: #555;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 1.4;
    > div {
        margin-top: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #000;
        line-height: 1.1;
    }
    }
`;

export default GlobalStyle;
