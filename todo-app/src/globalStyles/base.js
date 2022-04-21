import { createGlobalStyle } from "styled-components";

export const BaseStyles = createGlobalStyle`
    * {
        width: 100%;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;

        transition: background-color ease-in-out 0.3s;
        -webkit-transition: background-color ease-in-out 0.3s;
        -o-transition: background-color ease-in-out 0.3s;
        -moz-transition: background-color ease-in-out 0.3s;
    }

    :root, body, #root {
        height: 100%;
        font-size: 16px;
    }

    @media (max-width: 1000px) {
        :root, body, #root {
            font-size: 12px;
        }
    }
`;