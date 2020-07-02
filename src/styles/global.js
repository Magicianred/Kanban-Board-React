import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap');

    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    }

    html, boby, #root {
        height:100%;
    }

    body {
        font: 14px 'Roboto', sans-serif;
        background: #ecf1f8;
        color: #333;
        -webkit-font-smoothing: antialised !important;
    }

    ul {
        list-style: none;
    }

`;