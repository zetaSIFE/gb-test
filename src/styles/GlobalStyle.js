/**
 * Global 스타일 관리 파일
 * @file src/styles/GlobalStyles.js
 * @author yhJung
 * @version 1.0
 * @see none
 * @history
 * - 2023-04-27, 최초 작성
 */
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { reset } from "styled-reset";


import NotoSansKRMedium from "assets/fonts/NotoSansKR-Medium.otf";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    ${normalize};
    * {
        box-sizing: border-box;
        /* font-family: "Noto Sans CJK KR"; */
        font-weight: 400;
        letter-spacing: -0.5px;
        font-size: 12px;

    }
    @font-face {
        font-family: 'Noto Sans CJK KR';
        font-style: normal;
        font-weight: 500;
        src: url(${NotoSansKRMedium}) format('truetype')
        url(${NotoSansKRMedium}) format('woff'),
        url(${NotoSansKRMedium}) format('woff2'),
    }
    body {
        padding:0;
        margin:0;
        font-family: 'Noto Sans CJK KR';
    }

    h1 {
        font-size: 16px !important;
        font-weight: bold !important;
    }

    a {
        text-decoration: none;
    }

`;
