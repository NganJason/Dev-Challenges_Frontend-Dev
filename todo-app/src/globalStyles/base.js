import { createGlobalStyle } from "styled-components";

export const BaseStyles = createGlobalStyle`
    * {
        width: 100%;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    :root, body, #root {
        height: 100%;
        font-size: 16px;
    }

`;